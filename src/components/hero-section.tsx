"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-dvh flex-col justify-between px-6 pt-32 pb-20 sm:px-10 md:pl-24 md:pr-16 sm:pt-40 sm:pb-24"
    >
      <motion.div style={{ y, opacity }} className="relative z-10">
        {/* Kicker row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--fg-dim)]">
            DATA ANALYST — INDIA
          </span>
          <span className="h-px flex-1 bg-white/5" />
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
        </motion.div>

        {/* Main heading — split two-line treatment */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <span
            className="block font-semibold leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem, 9vw, 5rem)" }}
          >
            Ishaan Parimal.
          </span>
          <span
            className="mt-2 block font-extrabold leading-[0.92] tracking-[-0.04em] text-[var(--accent)]"
            style={{ fontSize: "clamp(2.5rem, 9vw, 5rem)" }}
          >
            Data that decides.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 max-w-lg text-sm font-light leading-relaxed tracking-wide text-[var(--fg-muted)] sm:text-base"
        >
          I help teams cut through noise — analyzing behavior, building
          dashboards, and surfacing the insights that actually move the needle.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-8"
        >
          <a
            href="#work"
            className="group/btn inline-flex items-center gap-2 border border-[var(--accent)]/30 bg-[var(--accent)]/5 px-5 py-2.5 font-mono text-[11px] tracking-[0.15em] text-[var(--accent)] transition-all hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/50"
            data-cursor-hover="true"
          >
            VIEW WORK
            <span className="btn-arrow inline-block transition-transform group-hover/btn:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)] transition-colors hover:text-[var(--fg-muted)]"
            data-cursor-hover="true"
          >
            [ CONTACT → ]
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom info strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative z-10 mt-auto grid grid-cols-2 gap-6 border-t border-white/5 pt-8 sm:grid-cols-4"
      >
        {[
          { value: "95K+", label: "CUSTOMERS" },
          { value: "30K", label: "PROFILES" },
          { value: "22+", label: "FEATURES" },
          { value: "90%", label: "AUTOMATION" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + i * 0.1 }}
          >
            <div className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {stat.value}
            </div>
            <div className="mt-1 font-mono text-[9px] tracking-[0.2em] text-[var(--fg-dim)]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_60px_var(--bg)]" />
    </section>
  );
}
