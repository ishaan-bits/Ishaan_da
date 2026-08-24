"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[13px] text-white/30">
              © 2026 Ishaan Parimal
            </p>
            <p className="mt-1 text-[12px] text-white/15">
              Built with curiosity, designed with data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {["LinkedIn", "GitHub", "Email"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[12px] text-white/20 transition-colors hover:text-white/50"
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
