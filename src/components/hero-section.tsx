"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-dvh flex-col justify-between px-6 pt-32 pb-20 sm:px-10 md:pl-24 md:pr-16 sm:pt-40 sm:pb-24"
    >
      <motion.div style={{ y, opacity }} className="relative z-10">
        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 font-mono text-[10px] tracking-[0.3em] text-[var(--fg-dim)]"
        >
          DATA ANALYST — INDIA
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-semibold leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.5rem, 9vw, 4.5rem)" }}
        >
          Immersive data
          <br />
          experiences.
          <br />
          <span className="text-[var(--fg-muted)]">
            Engineered for decisions.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 max-w-xl font-light leading-relaxed tracking-wide text-[var(--fg-muted)]"
        >
          Premium analytics and dashboards for ambitious teams — built from
          insight through deployment.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="#work"
            className="group/btn inline-flex items-baseline font-mono text-xs tracking-[0.2em] text-white transition-colors hover:text-gray-300"
            data-cursor-hover="true"
          >
            [ VIEW WORK → ]
            <span className="btn-arrow ml-1 inline-block">↗</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Stats row at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative z-10 mt-auto flex flex-wrap gap-8 border-t border-white/5 pt-8 sm:gap-16"
      >
        {[
          { value: "95K+", label: "CUSTOMERS ANALYZED" },
          { value: "<24H", label: "AVG. RESPONSE" },
          { value: "22+", label: "FEATURES BUILT" },
          { value: "90%", label: "AUTOMATION RATE" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 font-mono text-[9px] tracking-[0.2em] text-[var(--fg-dim)] sm:text-[10px]">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Vignette overlay */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_60px_var(--bg)]" />
    </section>
  );
}
