import React, { useEffect, useState } from "react";

const Navbar = () => {

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <>
      <nav className="border-b border-black/10 sticky top-0 bg-[#f3f4f6]/80 backdrop-blur-md z-50 w-full">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">RION.</h1>

          <ul className="hidden md:flex gap-5 text-sm">
            <li>
              <a
                href="#home"
                className={`px-5 py-2 rounded-full duration-300 ${
                  activeSection === "home"
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className={`px-5 py-2 rounded-full duration-300 ${
                  activeSection === "about"
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className={`px-5 py-2 rounded-full duration-300 ${
                  activeSection === "skills"
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className={`px-5 py-2 rounded-full duration-300 ${
                  activeSection === "projects"
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={`px-5 py-2 rounded-full duration-300 ${
                  activeSection === "contact"
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
