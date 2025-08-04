import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("intro");
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const navItems = [
    { href: "#introduction", label: "Francisco Novo", key: "intro" },
    { href: "#projects", label: "Projects", key: "projects" },
    { href: "#tools", label: "Tools", key: "skillssphere" },
    {
      href: "#achievements",
      label: "Achievements",
      key: "achievements",
    },
    { href: "#contact", label: "Contact", key: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        bg-[#02001E]/5 backdrop-blur-lg fixed top-0 w-full z-50
        transition-all duration-500
        ${showNavbar ? "opacity-100" : "opacity-0 -translate-y-full"}
      `}
    >
      <div className="w-full max-w-screen overflow-hidden flex flex-wrap items-center justify-between px-6 md:px-[10vw] py-5">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 17 14"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul
            className="
              flex flex-col
              md:flex-row
              flex-wrap
              gap-y-4
              md:gap-y-0
              md:gap-x-8
              items-start
              list-none p-0 m-0
            "
          >
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(item.key);
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  href={item.href}
                  className={`
                    text-md font-semibold font-poppins transition-all duration-200 border-b-2
                    ${
                      activeLink === item.key
                        ? "text-white border-blue-200"
                        : "text-gray-400 border-transparent hover:text-gray-300 hover:border-gray-500"
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
