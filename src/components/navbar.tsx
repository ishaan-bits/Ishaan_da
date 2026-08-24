"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionElements = sections.map((s) =>
        document.getElementById(s.toLowerCase())
      );
      const scrollPos = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.06] bg-[#09090B]/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.button
            onClick={() => scrollTo("Home")}
            className="text-lg font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gradient">IS</span>
            <span className="text-white/90">HAAN</span>
          </motion.button>

          <div className="hidden items-center gap-1 md:flex">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className="relative px-4 py-2 text-sm text-white/50 transition-colors hover:text-white/80"
              >
                {section}
                {active === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-cyan"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            className="text-white/60 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[64px] z-[99] border-b border-white/[0.06] bg-[#09090B]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col p-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={`py-3 text-left text-sm transition-colors ${
                    active === section ? "text-cyan" : "text-white/50"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
