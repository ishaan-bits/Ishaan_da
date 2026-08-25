"use client";

import { motion } from "framer-motion";

const items = [
  "DATA ANALYSIS",
  "SQL",
  "PYTHON",
  "TABLEAU",
  "A/B TESTING",
  "PRODUCT ANALYTICS",
  "DASHBOARD DESIGN",
  "DATA CLEANING",
  "PREDICTIVE MODELING",
  "VISUALIZATION",
];

export default function Marquee() {
  return (
    <div className="section-border overflow-hidden border-t border-b border-white/8 py-5">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 font-mono text-[10px] tracking-[0.3em] text-[var(--fg-dim)] transition-colors duration-300 hover:text-[var(--accent)]"
          >
            {item}
            <span className="ml-6 text-white/10">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
