import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  // --------- responsive --------
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* ------------ responsive --------------- */}
      {/* ================= MOBILE NAVBAR ================= */}

      <nav className="lg:hidden fixed top-0 left-0 w-full z-50 bg-[#f3f4f6]/90 backdrop-blur-md border-b border-black/10">
        {/* ---------- top row ---------- */}
        <div className="px-5 py-4 flex justify-between items-center">
          {/* ------ logo ------ */}
          <h1 className="text-2xl font-black">RION.</h1>

          {/* ------ menu button ------ */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-[50px] h-[50px] rounded-full bg-white shadow-lg flex justify-center items-center text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* ---------- dropdown menu ---------- */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            menuOpen
              ? "max-h-[500px] opacity-100 pb-5"
              : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <div className="px-5">
            <div className="bg-white rounded-[30px] p-4 flex flex-col gap-3 shadow-2xl">
              {/* ------ home ------ */}
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className={`px-5 py-4 rounded-2xl duration-300 font-medium ${
                  activeSection === "home"
                    ? "bg-black text-white"
                    : "bg-[#f3f4f6]"
                }`}
              >
                Home
              </a>

              {/* ------ about ------ */}
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={`px-5 py-4 rounded-2xl duration-300 font-medium ${
                  activeSection === "about"
                    ? "bg-black text-white"
                    : "bg-[#f3f4f6]"
                }`}
              >
                About
              </a>

              {/* ------ skills ------ */}
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className={`px-5 py-4 rounded-2xl duration-300 font-medium ${
                  activeSection === "skills"
                    ? "bg-black text-white"
                    : "bg-[#f3f4f6]"
                }`}
              >
                Skills
              </a>

              {/* ------ projects ------ */}
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`px-5 py-4 rounded-2xl duration-300 font-medium ${
                  activeSection === "projects"
                    ? "bg-black text-white"
                    : "bg-[#f3f4f6]"
                }`}
              >
                Projects
              </a>

              {/* ------ contact ------ */}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`px-5 py-4 rounded-2xl duration-300 font-medium ${
                  activeSection === "contact"
                    ? "bg-black text-white"
                    : "bg-[#f3f4f6]"
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
