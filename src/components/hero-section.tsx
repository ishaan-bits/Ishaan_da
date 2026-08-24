"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center pt-20"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-[13px] text-white/40">
            Data Analyst — India
          </p>

          <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            I build clarity
            <br />
            from complexity.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/40">
            Ishaan Parimal. I help teams make better decisions by turning raw
            data into clear insights through SQL, Python, and visual
            storytelling.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-medium text-[#050505] transition-all hover:bg-white/90"
            >
              View work
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="text-[13px] text-white/40 transition-colors hover:text-white/70"
            >
              Contact me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
