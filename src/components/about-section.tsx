"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Customers Analyzed", value: 95, suffix: "K+", prefix: "" },
  { label: "User Profiles", value: 30, suffix: "K", prefix: "" },
  { label: "Features Engineered", value: 22, suffix: "+", prefix: "" },
  { label: "Workflow Automation", value: 90, suffix: "%", prefix: "" },
];

function CountUp({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan/20 via-emerald/10 to-purple-400/20 blur-lg" />
              <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl">
                <div className="flex h-[400px] w-[320px] items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan/20 to-emerald/10">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                    <p className="text-sm text-white/30">Ishaan Parimal</p>
                    <p className="text-xs text-white/20">Data Analyst</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Who I <span className="text-gradient">Am</span>
              </h2>
              <div className="mb-6 h-0.5 w-12 bg-gradient-to-r from-cyan to-emerald" />
              <p className="text-base leading-relaxed text-white/50">
                Curious by nature, analytical by mindset. I love translating raw
                numbers into meaningful narratives that improve products and
                business decisions.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/50">
                Final-year Electrical & Electronics Engineering student at BITS
                Pilani with a passion for analytics, experimentation, and product
                thinking. I enjoy uncovering patterns from data, building
                dashboards, and solving business problems through SQL, Python,
                Tableau, and statistical analysis.
              </p>
              <p className="mt-4 text-sm text-white/30">📍 India</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-cyan/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-1 text-2xl font-bold text-cyan">
                    <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <div className="text-xs text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
