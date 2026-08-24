"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-bg.jpg)" }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-5xl px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[12px] text-white/40">
                Available for opportunities
              </span>
            </div>
            <div className="flex items-center gap-1 text-[12px] text-white/25">
              <MapPin size={12} />
              India
            </div>
          </motion.div>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            I turn data into
            <br />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#10B981] to-[#A78BFA] bg-clip-text text-transparent">
              decisions.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-[16px] leading-relaxed text-white/45">
            Ishaan Parimal — Data Analyst. I help teams cut through noise by
            analyzing user behavior, building interactive dashboards, and
            surfacing the insights that actually move the needle. Currently
            finishing my EEE degree at BITS Pilani.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
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
            <div className="ml-auto hidden items-center gap-4 text-[12px] text-white/20 sm:flex">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white/50"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white/50"
              >
                GitHub
              </a>
              <span>·</span>
              <a
                href="mailto:ishaan@example.com"
                className="transition-colors hover:text-white/50"
              >
                Email
              </a>
            </div>
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
            <div className="h-8 w-5 rounded-full border border-white/[0.1] p-1">
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
