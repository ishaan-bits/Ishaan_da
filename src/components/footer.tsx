"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-sm text-white/30">
              © 2026 Ishaan Parimal
            </div>
            <div className="mt-1 text-xs text-white/20">
              Designed with data, built with curiosity.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {["LinkedIn", "GitHub", "Email"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-white/20 transition-colors hover:text-white/50"
              >
                {link}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
