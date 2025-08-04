"use client";

import { Cloud } from "react-icon-cloud";
import { useEffect, useRef, useState } from "react";

export default function IconCloud({ images }) {
  const containerRef = useRef(null);
  const cloudRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const canvas = container.querySelector("canvas");
      if (canvas && canvas.Cloud) {
        cloudRef.current = canvas.Cloud;
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (cloudRef.current) {
      cloudRef.current.SetSpeed(0);
      setPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (!paused) return;
    if (cloudRef.current) {
      cloudRef.current.SetSpeed(0.03);
    }
    setPaused(false);
  };

  const cloudProps = {
    containerProps: {
      ref: containerRef,
      style: {
        width: "100%",
        height: "100%",
        position: "relative",
      },
    },
    options: {
      reverse: true,
      depth: 1,
      wheelZoom: false,
      imageScale: 1.5,
      initial: [0.2, -0.2],
      clickToFront: 500,
      tooltipDelay: 0,
      outlineColour: "#0000",
      maxSpeed: 0.03,
      minSpeed: 0.015,
      zoom: 0.75,
    },
  };

  const imageElements = images.map((src, i) => (
    <a key={i} href="#" style={{ display: "inline-block" }}>
      <img
        src={src}
        alt=""
        width={100}
        height={100}
        style={{ display: "block" }}
      />
    </a>
  ));

  return (
    <div
      className="w-full h-full relative"
      onMouseLeave={handleMouseLeave}
    >
      <Cloud {...cloudProps}>{imageElements}</Cloud>
    </div>
  );
}