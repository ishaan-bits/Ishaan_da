"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

function AnimatedCounter({
  target,
  suffix = "",
  duration = 1.5,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const wordVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3 + i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.97]);

  const nameWords = ["Ishaan", "Parimal."];
  const taglineWords = ["Data", "that", "decides."];

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-dvh flex-col justify-between px-6 pt-32 pb-20 sm:px-10 md:pl-24 md:pr-16 sm:pt-40 sm:pb-24"
    >
      <motion.div style={{ y, opacity, scale }} className="relative z-10">
        {/* Kicker row with animated line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--fg-muted)]">
            DATA ANALYST — INDIA
          </span>
          <motion.span
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="h-px flex-1 origin-left bg-gradient-to-r from-white/20 to-transparent"
          />
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
        </motion.div>

        {/* Main heading — staggered word reveal */}
        <h1 className="max-w-5xl overflow-hidden">
          <span
            className="block font-semibold leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem, 9vw, 5rem)" }}
          >
            {nameWords.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="mr-[0.3em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span
            className="mt-2 block overflow-hidden font-extrabold leading-[0.92] tracking-[-0.04em] text-[var(--accent)]"
            style={{ fontSize: "clamp(2.5rem, 9vw, 5rem)" }}
          >
            {taglineWords.map((word, i) => (
              <motion.span
                key={word}
                custom={i + 2}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="mr-[0.3em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 max-w-lg text-sm font-light leading-relaxed tracking-wide text-[var(--fg-muted)] sm:text-base"
        >
          I help teams cut through noise — analyzing behavior, building
          dashboards, and surfacing the insights that actually move the needle.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-8"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn inline-flex items-center gap-2 border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-5 py-2.5 font-mono text-[11px] tracking-[0.15em] text-[var(--accent)] transition-all hover:bg-[var(--accent)]/20 hover:border-[var(--accent)]/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
            data-cursor-hover="true"
          >
            VIEW WORK
            <span className="btn-arrow inline-block transition-transform group-hover/btn:translate-x-1">
              →
            </span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ x: 3 }}
            className="font-mono text-[10px] tracking-[0.2em] text-[var(--fg-muted)] transition-colors hover:text-white"
            data-cursor-hover="true"
          >
            [ CONTACT → ]
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom info strip with animated counters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative z-10 mt-auto grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
      >
        {[
          { target: 95, suffix: "K+", label: "CUSTOMERS" },
          { target: 30, suffix: "K", label: "PROFILES" },
          { target: 22, suffix: "+", label: "FEATURES" },
          { target: 90, suffix: "%", label: "AUTOMATION" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
          >
            <div className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
            </div>
            <div className="mt-1 font-mono text-[9px] tracking-[0.2em] text-[var(--fg-muted)]">
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
