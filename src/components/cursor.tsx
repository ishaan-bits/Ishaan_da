"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);

    // Detect hoverable elements
    const observe = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };
    observe();
    const interval = setInterval(observe, 2000);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden rounded-full border border-white/20 md:block"
        animate={{
          x: pos.x - (hovered ? 20 : 12),
          y: pos.y - (hovered ? 20 : 12),
          width: hovered ? 40 : 24,
          height: hovered ? 40 : 24,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1 w-1 rounded-full bg-white md:block"
        animate={{
          x: pos.x - 2,
          y: pos.y - 2,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      />
    </>
  );
}
