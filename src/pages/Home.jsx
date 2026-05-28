import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import FooterNav from "../components/FooterNav";

const Home = () => {
  // ---------- scroll ----------
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .floating-arrow {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
      <div className="bg-[#f3f4f6] text-black min-h-screen font-sans">
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <FooterNav />
        <div className="fixed bottom-8 right-8 z-50">
          <a
            href="#home"
            className="relative floating-arrow w-[65px] h-[65px] rounded-full flex items-center justify-center text-3xl bg-white shadow-2xl"
            style={{
              background: `conic-gradient(
        #22c55e ${scrollProgress * 3.6}deg,
        #d1d5db ${scrollProgress * 3.6}deg
      )`,
            }}
          >
            <div className="w-[52px] h-[52px] rounded-full bg-[#f3f4f6] flex items-center justify-center">
              ↑
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
