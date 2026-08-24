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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.04] bg-[#050505]/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="group text-sm font-semibold tracking-wide text-white/90"
        >
          <span className="bg-gradient-to-r from-white/90 to-white/50 bg-clip-text text-transparent transition-all group-hover:from-white group-hover:to-white/70">
            ishaan
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative rounded-lg px-3 py-1.5 text-[13px] transition-colors hover:text-white/80"
            >
              <span
                className={
                  active === item ? "text-white" : "text-white/35"
                }
              >
                {item}
              </span>
              {active === item && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="magnetic-btn rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-[13px] text-white/50 backdrop-blur-sm transition-all hover:border-white/[0.15] hover:text-white/80"
        >
          Get in touch
        </a>
      </div>
    </motion.header>
  );
}
