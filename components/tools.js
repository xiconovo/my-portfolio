import React from "react";
import dynamic from "next/dynamic";

const IconCloud = dynamic(() => import("./ui/icon_cloud"), {
  ssr: false,
});

export default function SkillsSphere() {
  const skills = {
    "Frontend Development": [
      "logos/html.svg",
      "logos/css.svg",
      "logos/javascript.svg",
      "logos/typescript.svg",
      "logos/react.svg",
      "logos/tailwindcss.svg",
      "logos/styled-components.svg",
    ],
    "Backend & Databases": [
      "logos/nodejs.svg",
      "logos/express.svg",
      "logos/java.svg",
      "logos/python.svg",
      "logos/sequelize.svg",
      "logos/mysql.svg",
    ],
    "Testing & Performance": [
      "logos/postman.svg",
      "logos/k6.svg",
      "logos/jmeter.svg",
    ],
  };

  return (
    <section
      id="tools"
      className="w-full mx-auto mt-24 py-8 lg:py-16 scroll-mt-[80px]"
    >
      <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center font-semibold text-blue-200 font-poppins mb-20">
        Development Stack
      </h2>
      {/* Tools Cards*/}
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-y-6 gap-x-2 xl:gap-x-2 2xl:gap-x-6 mb-8 lg:mb-16 justify-items-center">
        {Object.entries(skills).map(([title, icons]) => (
          <div
            key={title}
            className="relative bg-[#02001E]/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center border border-white/10 max-w-[clamp(300px,25vw,400px)] w-full"
            style={{ height: "400px" }}
          >
            {/* Title Tool*/}
            <h3 className="text-xl font-semibold text-blue-300 font-poppins mb-4 text-center">
              {title}
            </h3>
            {/* Icons Cloud*/}
            <div
              className="flex justify-center items-center"
              style={{ width: "300px", height: "300px" }}
            >
              <IconCloud images={icons} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
