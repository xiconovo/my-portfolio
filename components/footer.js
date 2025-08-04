"use client";

import React from "react";
import Socials from "./ui/socials";

const Footer = () => {
  return (
    <footer className="w-full bg-[#02001E]/5 backdrop-blur-lg">
      <div className="w-full px-4 sm:px-6 lg:px-[10vw] py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-md font-semibold text-blue-200 font-poppins text-center md:text-left">
          Francisco Novo
        </span>
        <div className="flex flex-row-reverse gap-6">
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
