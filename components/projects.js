"use client";

import React from "react";
import FloatingLaptop from "./floating_laptop";

const projects = [
  {
    title: "CrowdFlow",
    date: "2024 - Now",
    icon: "logos/crowdflow.png",
    tags: ["Data Visualization", "UI", "Performance Testing"],
    skills: [
      "react",
      "typescript",
      "javascript",
      "html",
      "tailwindcss",
      "postman",
      "k6",
      "python",
    ],
    description:
      "CrowdFlow is a platform for analyzing foot traffic using AI-powered video feeds. My role focused on the frontend, where I developed interactive dashboards and map-based visualizations using HTML and Tailwind CSS. I also conducted security vulnerability assessments and led scalability testing using Postman and k6 to ensure system reliability under load.",
    link: "https://crowdflow.pt/",
    image: "../images/crowdflow.png",
  },
  {
    title: "Ticket Management Platform",
    date: "2024",
    icon: "logos/huggingface.svg",
    tags: ["Fullstack", "Ticketing System", "Admin Panel"],
    skills: [
      "react",
      "javascript",
      "express",
      "sequelize",
      "mysql",
      "styled-components",
    ],
    description:
      "FastTicket is a fullstack ticket management platform for handling internal requests across departments. I built both the backend and frontend using JavaScript, with features like authentication, role-based access, ticket filtering, and lazy loading.",
    link: "https://github.com/xiconovo/FastTicket/tree/main",
    image: "../images/fastTicketLogo.png",
  },
];

export default function ProjectSections() {
  return (
    <>
      <section
        id="projects"
        className="w-full mx-auto mt-24 py-8 lg:py-16 sm:py-6 mb-8 lg:mb-16 scroll-mt-[80px]"
      >
        <h2 className="text-3xl sm:text-5xl text-center font-semibold text-blue-200 font-poppins mb-16 sm:mb-8">
          <span>Take a Look at</span>
          <br />
          <span>Some of My Projects</span>
        </h2>
      </section>

      {/* Projects Details */}
      <div className="flex flex-col items-center xl:items-start space-y-0.5 sm:space-y-1 xl:space-y-2">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={project.title}
              className={`
                w-full flex flex-col items-center xl-custom:items-start
                xl-custom:flex-row ${
                  !isEven ? "xl-custom:flex-row-reverse" : ""
                }
                justify-start xl-custom:justify-between
                gap-x-24 sm:gap-x-16 md:gap-x-24 xl-custom:gap-x-64
                last:mt-0
              `}
            >
              <div
                className="
                  w-full order-1 xl:order-none
                  px-4 sm:px-0
                  space-y-2
                  sm:space-y-3
                  md:space-y-4
                  xl:space-y-4
                "
              >
                {/* Project Title */}
                <h3 className="text-2xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-blue-200 font-poppins">
                  {project.title}
                </h3>
                {/* Project Date */}
                <p className="text-xs sm:text-sm text-[#c0cad8] font-poppins">
                  {project.date}
                </p>
                {/* Project Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="group relative w-7 h-7 bg-[#e4e6e9] rounded-full flex items-center justify-center border-2 border-[#6f85a3]"
                    >
                      {/* Skill Icon */}
                      <img
                        src={`logos/${skill}.svg`}
                        alt={skill}
                        className="w-4 h-4"
                      />

                      {/* Tooltip (Name of Skill) */}
                      <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 text-xs text-[#445874] font-semibold transition-opacity duration-200 ease-in-out group-hover:opacity-100 group-hover:scale-100 scale-75">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Project Description */}
                <p className="text-sm sm:text-lg xl:text-lg font-poppins text-gray-100">
                  {project.description}
                </p>
                {/* Project Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs sm:text-sm bg-[#e0edff] text-[#445874] font-semibold font-poppins rounded-full border-2 border-[#6f85a3]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#eff4ff] text-[#41567e] font-semibold font-poppins py-1.5 px-6 rounded-xl border-2 border-[#6f85a3] shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-l hover:from-blue-200 hover:to-blue-200 block xl:hidden"
                >
                  Visit
                </a>
              </div>

              {/* Floating Laptop */}
              <div className="w-auto max-w-[420px] flex-shrink-0 order-2 xl:order-none sm:mt-4 mt-8">
                <FloatingLaptop
                  imageSrc={project.image}
                  linkSrc={project.link}
                  className="w-full h-auto"
                  width={420}
                  height={280}
                />
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
