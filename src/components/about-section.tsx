"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 95, suffix: "K+", label: "CUSTOMERS" },
  { value: 30, suffix: "K", label: "PROFILES" },
  { value: 22, suffix: "+", label: "FEATURES" },
  { value: 90, suffix: "%", label: "AUTOMATION" },
];

const interests = [
  "A/B Testing",
  "Product Thinking",
  "Data Storytelling",
  "Dashboard Design",
  "Statistical Analysis",
  "User Research",
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = duration / 16;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section-border py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:pl-24 md:pr-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-[var(--fg-dim)]">
            04 // ABOUT
          </p>
          <h2
            className="font-extrabold leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            The person behind
            <br />
            <span className="text-[var(--fg-muted)]">the data.</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-[30%_70%]">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative overflow-hidden border border-white/5">
              <img
                src="/portrait.jpg"
                alt="Ishaan Parimal"
                className="img-grayscale aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_60px_30px_var(--bg)]" />
            </div>
            <div className="mt-4 border-l-2 border-[var(--accent)]/30 pl-3">
              <p className="font-mono text-[10px] tracking-[0.2em] text-white">
                ISHAAN PARIMAL
              </p>
              <p className="mt-1 font-mono text-[9px] tracking-[0.15em] text-[var(--fg-dim)]">
                DATA ANALYST · INDIA
              </p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            <p className="max-w-[720px] text-sm font-light leading-relaxed tracking-wide text-[var(--fg-muted)] sm:text-base">
              Ishaan Parimal is an independent data analyst and final-year
              Electrical & Electronics Engineering student at BITS Pilani. He
              designs and builds analytics systems end-to-end — from raw data
              extraction through SQL and Python to interactive dashboards and
              business recommendations.
            </p>

            <p className="max-w-[720px] text-sm font-light leading-relaxed tracking-wide text-[var(--fg-muted)] sm:text-base">
              Curious by nature, analytical by mindset. He believes great
              analytics isn&apos;t just about numbers — it&apos;s about asking
              the right questions, understanding user behavior, and
              communicating findings in a way that drives product decisions.
            </p>

            {/* Education */}
            <div className="border-l-2 border-white/5 pl-4">
              <p className="mb-2 font-mono text-[10px] tracking-[0.25em] text-[var(--fg-dim)]">
                EDUCATION
              </p>
              <h3 className="text-sm font-medium text-white">
                B.E. Electrical & Electronics
              </h3>
              <p className="mt-1 text-xs text-[var(--fg-dim)]">
                BITS Pilani — 2022–2026
              </p>
            </div>

            {/* Interests */}
            <div>
              <p className="mb-3 font-mono text-[10px] tracking-[0.25em] text-[var(--fg-dim)]">
                INTERESTS
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="border border-white/5 bg-white/[0.02] px-3 py-1.5 font-mono text-[11px] tracking-wider text-[var(--fg-muted)] transition-all hover:border-[var(--accent)]/20 hover:text-white"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="border-l-2 border-white/5 pl-4"
                >
                  <div className="text-2xl font-semibold tracking-tight text-white">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 font-mono text-[9px] tracking-[0.2em] text-[var(--fg-dim)]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
