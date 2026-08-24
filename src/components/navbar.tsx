"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = ["About", "Work", "Skills", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navItems.map((s) =>
        document.getElementById(s.toLowerCase())
      );
      const pos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i]!.offsetTop <= pos) {
          setActive(navItems[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.04] bg-[#050505]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-sm font-semibold tracking-wide text-white/90"
        >
          ishaan
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-[13px] transition-colors ${
                active === item
                  ? "text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="mailto:ishaan@example.com"
          className="text-[13px] text-white/40 transition-colors hover:text-white/70"
        >
          Get in touch
        </a>
      </div>
    </motion.header>
  );
}
