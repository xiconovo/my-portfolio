'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function FloatingLaptop({
  imageSrc,
  linkSrc,
  width = 200,
  height = 270,
  scale: defaultScale = 1,
}) {
  const ref = useRef(null)
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)')
  const [scale, setScale] = useState(defaultScale)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (!isLargeScreen) return
    const handleMouseMove = e => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      const ry = Math.max(-10, Math.min(10, dx * 10))
      const rx = Math.max(-10, Math.min(10, -dy * 10))
      setTransform(`rotateX(${rx}deg) rotateY(${ry}deg)`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isLargeScreen])

  // Scale responsiveness
  useEffect(() => {
    const updateScale = () => {
      const w = window.innerWidth
      if (w < 360) setScale(defaultScale * 0.5)
      else if (w < 480) setScale(defaultScale * 0.6)
      else if (w < 768) setScale(defaultScale * 0.7)
      else if (w < 1024) setScale(defaultScale * 0.85)
      else setScale(defaultScale * 0.9)
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [defaultScale])

  const keyboardSpans = [
    [1, ...Array(12).fill(1), 1],
    [1, ...Array(12).fill(1), 2],
    [2, ...Array(12).fill(1)],
    [2, ...Array(11).fill(1)],
    [2, ...Array(10).fill(1), 2],
    [1, 1, 1, 5, 1, 1, 1, 1],
  ]

  const LaptopScreenContent = (
    <div
      className={`group relative block bg-black p-[6px] rounded-lg ${
        !isLargeScreen ? 'pointer-events-none' : ''
      }`}
      style={{ height: `${height}px` }}
    >
      <Image
        src={imageSrc}
        alt="Project screenshot"
        width={width - 8}
        height={height - 8}
        className="object-contain w-full h-full rounded-md"
      />
      {isLargeScreen && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-gray-800/50 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md flex items-center justify-center z-20">
          <div className="animate-fadeInUp text-white text-lg font-semibold tracking-wide flex items-center gap-2 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:scale-110 transform transition-transform duration-500 ease-in-out">
            <span className="animate-wiggle text-[20px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] group-hover:animate-bounce group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 ease-in-out text-gray-300 group-hover:drop-shadow-xl">
              👉
            </span>
            <span className="text-gradient text-gray-300 font-bold font-poppins text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl group-hover:translate-y-2 transform transition-transform duration-300 ease-in-out group-hover:opacity-100 opacity-90">
              Visit
            </span>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div
      style={{
        display: 'inline-block',
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
      }}
    >
      <div
        ref={ref}
        className="perspective animate-float"
        style={{ width: `${width}px` }}
      >
        <div
          className="relative"
          style={{
            transform,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.2s ease-out',
          }}
        >
          <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-xl p-1 shadow-[0_5px_60px_rgba(144,202,249,0.4)]">
            {isLargeScreen ? (
              <Link
                href={linkSrc}
                target="_blank"
                rel="noopener noreferrer"
              >
                {LaptopScreenContent}
              </Link>
            ) : (
              LaptopScreenContent
            )}
          </div>

          {/* Keyboard Base */}
          <div
            className="relative w-full z-10 -mt-1"
            style={{ transform: 'rotateX(60deg)', transformOrigin: 'top' }}
          >
            <div
              className="bg-gradient-to-b from-gray-600 to-gray-500 rounded-b-xl shadow-inner px-6 pt-6 pb-6 border border-gray-500"
              style={{ height: `${height * 0.75}px` }}
            >
              <div className="flex flex-col space-y-[2px] mx-auto max-w-[450px] px-1">
                {keyboardSpans.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex gap-0.5">
                    {row.map((span, keyIndex) => (
                      <div
                        key={`${rowIndex}-${keyIndex}`}
                        style={{ flex: span, minWidth: '10px' }}
                        className="h-[21px] bg-gray-400 rounded-sm shadow-sm border border-gray-500"
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-1 mx-auto w-24 h-8 bg-gray-400 rounded-md shadow-inner border border-gray-500" />
            </div>
            <div
              className="absolute bottom-[10px] left-0 w-full bg-gray-600 rounded-b-[50px] border border-gray-500"
              style={{
                height: `${height * 0.065}px`,
                transform: 'translateY(100%)',
                boxShadow: '0 12px 25px rgba(0,0,0,0.9)',
                borderTopLeftRadius: '0',
                borderTopRightRadius: '0',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
