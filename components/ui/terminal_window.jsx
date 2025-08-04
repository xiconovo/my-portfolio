import Typewriter from "typewriter-effect";
import React, { useRef, useEffect, useState, useLayoutEffect } from "react";

export default function TerminalWindow() {
  const [height, setHeight] = useState("auto");
  const hiddenRef = useRef(null);
  const terminalRef = useRef(null);

  const codeString = `
<span class="text-[#569CD6]">const</span> <span class="text-[#9CDCFE]">developer</span> = &#123;
  <span class="text-[#DCDCAA]">degree</span>: '<span class="text-[#CE9178]">Master's in Informatics Engineering</span>',
  <span class="text-[#DCDCAA]">company</span>: '<span class="text-[#CE9178]">Frejen Wise Solutions</span>',
  <span class="text-[#DCDCAA]">skills</span>: [
  <span class="text-[#CE9178]">"Frontend Architecture", "API Design", "Database Modeling"</span>,
  <span class="text-[#CE9178]">"Component-Based Design", "Responsive Interfaces", "Clean Code", "System Integration"</span>
],
  <span class="text-[#DCDCAA]">collaborative</span>: <span class="text-[#B5CEA8]">true</span>,
  <span class="text-[#DCDCAA]">autonomous</span>: <span class="text-[#B5CEA8]">true</span>,
  <span class="text-[#DCDCAA]">entrepreneurial</span>: <span class="text-[#B5CEA8]">true</span>,
  <span class="text-[#DCDCAA]">hireable</span>: <span class="text-[#569CD6]">function</span>() &#123;
    <span class="text-[#569CD6]">return</span> (
      <span class="text-[#9CDCFE]">this</span>.collaborative &amp;&amp;
      <span class="text-[#9CDCFE]">this</span>.autonomous &amp;&amp;
      <span class="text-[#9CDCFE]">this</span>.entrepreneurial &amp;&amp;
      <span class="text-[#9CDCFE]">this</span>.skills.length &gt;= <span class="text-[#B5CEA8]">7</span>
    );
  &#125;
&#125;;`.trim();

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (terminalRef.current && hiddenRef.current) {
        const calculatedHeight = hiddenRef.current.clientHeight;
        const screenHeight = window.innerHeight;

        setHeight(Math.min(calculatedHeight + 20, screenHeight * 0.85) + "px");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      {/* Hidden Measurement Container */}
      <div
        ref={hiddenRef}
        className="invisible absolute w-full max-w-3xl text-sm sm:text-base whitespace-pre-wrap leading-relaxed font-mono px-4 py-4 border border-white/20 rounded-xl"
      >
        <div className="px-4 pt-4">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-400 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
        </div>
        <div className="w-full border-t border-gray-500 mt-4" />
        <pre
          className="text-green-400 whitespace-pre-wrap leading-relaxed"
          dangerouslySetInnerHTML={{ __html: codeString }}
        />
      </div>

      {/* Responsive Terminal Window */}
      <div
        ref={terminalRef}
        className={`
          w-full max-w-3xl
          bg-[#222227]/50
          backdrop-blur-md
          rounded-xl
          shadow-2xl
          text-sm sm:text-base
          border border-white/20
          overflow-hidden
        `}
        style={{
          height: height,
        }}
      >
        <div className="px-4 pt-4">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-400 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
        </div>

        <div className="w-full border-t border-gray-500 mt-4" />

        <div className="px-4 py-4">
          <pre className="text-green-400 font-mono whitespace-pre-wrap leading-relaxed">
            <code>
              <Typewriter
                options={{
                  cursor: "|",
                  delay: 15,
                  deleteSpeed: 20,
                  loop: false,
                  html: true,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString(codeString).start();
                }}
              />
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}
