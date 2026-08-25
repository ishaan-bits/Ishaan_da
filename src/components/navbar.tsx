"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "WORK", href: "#work" },
  { label: "CAPABILITIES", href: "#capabilities" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "[ CONTACT → ]", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10 md:pl-24 md:pr-16">
          <a
            href="#"
            className="font-mono text-[11px] tracking-[0.15em] text-white/60 transition-colors hover:text-white"
          >
            ISHAAN
          </a>

          <nav className="hidden items-center gap-8 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-mono text-[10px] tracking-[0.15em] transition-colors ${
                  item.label.includes("CONTACT")
                    ? "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                    : "text-white/40 hover:text-white/70"
                }`}
                data-cursor-hover="true"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 xl:hidden"
          >
            <span
              className={`h-px w-5 bg-white transition-all ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-white transition-all ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#0A0A0A]/95 backdrop-blur-xl xl:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-lg tracking-[0.15em] text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}
