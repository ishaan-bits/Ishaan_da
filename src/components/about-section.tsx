"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Heart } from "lucide-react";

const stats = [
  { value: 95, suffix: "K+", label: "Customers analyzed" },
  { value: 30, suffix: "K", label: "User profiles processed" },
  { value: 22, suffix: "+", label: "Features engineered" },
  { value: 90, suffix: "%", label: "Workflow automation" },
];

const interests = [
  "A/B Testing",
  "Product Thinking",
  "Data Storytelling",
  "Dashboard Design",
  "Statistical Analysis",
  "User Research",
];

function CountUp({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
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
    <section id="about" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Top row */}
        <div className="grid gap-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-[13px] text-white/30">About</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Data analyst with a
              <br />
              product mindset.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <p className="text-[15px] leading-relaxed text-white/45">
              Curious by nature, analytical by mindset. I love translating raw
              numbers into meaningful narratives that improve products and
              business decisions. Whether it&apos;s running A/B tests, building
              dashboards, or writing complex SQL queries — I enjoy every step of
              the data-to-decision pipeline.
            </p>
            <p className="text-[15px] leading-relaxed text-white/45">
              I believe great analytics isn&apos;t just about numbers — it&apos;s
              about asking the right questions, understanding user behavior, and
              communicating findings in a way that drives action.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-20 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="glow-hover rounded-xl border border-white/[0.04] bg-white/[0.015] p-5 transition-all hover:border-white/[0.08]"
            >
              <div className="text-2xl font-semibold text-white">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1.5 text-[13px] text-white/30">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education + Interests */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/[0.04] bg-white/[0.015] p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04]">
                <GraduationCap size={14} className="text-white/35" />
              </div>
              <h3 className="text-[13px] font-medium text-white/50">
                Education
              </h3>
            </div>
            <h4 className="text-[15px] font-medium text-white/85">
              B.E. Electrical & Electronics
            </h4>
            <p className="mt-1 text-[13px] text-white/35">
              BITS Pilani — 2022–2026
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-white/30">
              Focused on signal processing, control systems, and data analysis.
              Active participant in analytics clubs and hackathons.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/[0.04] bg-white/[0.015] p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04]">
                <Heart size={14} className="text-white/35" />
              </div>
              <h3 className="text-[13px] font-medium text-white/50">
                Interests
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                  className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3.5 py-1.5 text-[13px] text-white/40 transition-all hover:border-white/[0.12] hover:text-white/60"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* What I do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-20"
        >
          <h3 className="mb-8 text-[13px] font-medium text-white/30">
            What I do
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: "📊",
                title: "Data Analysis",
                desc: "Transform raw datasets into actionable insights using SQL, Python, and statistical methods. From customer segmentation to funnel analysis.",
              },
              {
                icon: "📈",
                title: "Dashboard Design",
                desc: "Build interactive dashboards and visualizations in Tableau and Recharts that tell clear stories and drive product decisions.",
              },
              {
                icon: "🔬",
                title: "Product Analytics",
                desc: "Run A/B tests, track key metrics, and uncover user behavior patterns that inform product strategy and growth initiatives.",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glow-hover rounded-2xl border border-white/[0.04] bg-white/[0.015] p-6 transition-all hover:border-white/[0.08]"
              >
                <div className="mb-3 text-xl">{service.icon}</div>
                <h4 className="mb-2 text-[15px] font-medium text-white/80">
                  {service.title}
                </h4>
                <p className="text-[13px] leading-relaxed text-white/30">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
