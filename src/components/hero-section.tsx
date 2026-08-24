"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center"
    >
      <motion.div
        style={{ y, opacity }}
        className="mx-auto w-full max-w-5xl px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[12px] text-white/40">
              Available for opportunities
            </span>
          </motion.div>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            I turn data into
            <br />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#10B981] to-[#A78BFA] bg-clip-text text-transparent">
              decisions.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-[16px] leading-relaxed text-white/40">
            Ishaan Parimal. I help teams cut through noise — analyzing
            behavior, building dashboards, and surfacing the insights that
            actually move the needle.
          </p>

          <div className="mt-12 flex items-center gap-8">
            <a
              href="#work"
              className="magnetic-btn group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[13px] font-medium text-[#050505] transition-all hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >
              View work
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="magnetic-btn text-[13px] text-white/35 transition-colors hover:text-white/70"
            >
              Contact me →
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="h-8 w-5 rounded-full border border-white/[0.12] p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto h-1.5 w-1 rounded-full bg-white/20"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
