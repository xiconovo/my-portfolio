import Socials from "./ui/socials";
import TerminalWindow from "./ui/terminal_window";

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="w-full min-h-screen flex items-center justify-center pt-14 sm:pt-16 md:pt-20 scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 tall:grid-cols-1 items-center gap-10 md:gap-16 lg:gap-20 lg:items-start">
        {/* Left Side Panel*/}
        <div className="space-y-8 justify-self-start max-w-3xl lg:py-0 lg:pt-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold text-white leading-tight">
            <span>Hello, I am</span>
            <br />
            <span className="font-mono text-blue-400 text-2xl sm:text-4xl md:text-5xl lg:text-3xl">
              <span className="brackets">{"{"}</span>
              <span className="typed-name">Francisco Novo</span>
              <span className="brackets">{"}"}</span>
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-200 font-poppins">
            Software Engineer
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200 max-w-3xl font-poppins">
            I'm a 25-year-old professional based in Braga, specialized in
            Full-Stack development. I thrive in diverse teams and love
            collaborating to build impactful solutions.
          </p>
          <div className="flex gap-4">
            <Socials />
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#eff4ff] backdrop-blur-lg text-[#41567e] rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-l hover:from-blue-200 hover:to-blue-200"
            >
              <span className="text-lg font-semibold">Resume</span>
            </a>
          </div>
        </div>

        {/* Righ Side Pannel */}
        <div className="w-full flex justify-center lg:justify-end">
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
}
