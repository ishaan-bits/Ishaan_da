"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    num: "01",
    title: "ADAS RESEARCH INTERN",
    company: "WILP — BITS Pilani",
    period: "2025",
    description:
      "Worked on advanced driver-assistance systems research, building simulation infrastructure and data pipelines for traffic analysis.",
    items: [
      "Built SUMOAPI v4 — a full-featured API for traffic simulation data, supporting multiple network configurations and real-time data streaming",
      "Automated data pipelines for real-time traffic metrics collection, processing data from 7-lane simulation networks spanning 10km",
      "Generated ML-ready datasets from simulation output, enabling predictive traffic modeling and congestion analysis",
      "Reduced manual setup by 90% through end-to-end workflow automation, cutting project onboarding time from hours to minutes",
      "Designed 22+ configurable simulation features for different traffic scenarios and urban planning use cases",
    ],
    tags: ["Python", "SUMO", "TraCI", "API Design", "Automation"],
  },
];

export default function ExperienceSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="section-border py-24 sm:py-32">
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
            05 // EXPERIENCE
          </p>
          <h2
            className="font-extrabold leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Where I&apos;ve
            <br />
            <span className="text-[var(--fg-muted)]">worked.</span>
          </h2>
        </motion.div>

        {/* Experience items */}
        <div>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="border-t border-white/5"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between py-8 text-left"
                data-cursor-hover="true"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--fg-dim)]">
                    {exp.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-medium tracking-[0.12em] text-white">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--fg-dim)]">
                      {exp.company} · {exp.period}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-[var(--fg-dim)] transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-10">
                      <p className="mb-4 max-w-[720px] text-sm font-light leading-relaxed tracking-wide text-[var(--fg-muted)]">
                        {exp.description}
                      </p>
                      <ul className="mb-4 space-y-2">
                        {exp.items.map((item, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.06 }}
                            className="flex items-start gap-3 text-sm font-light tracking-wide text-[var(--fg-muted)]"
                          >
                            <span className="mt-1.5 h-px w-2 shrink-0 bg-[var(--fg-dim)]" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-white/5 px-3 py-1 font-mono text-[10px] tracking-wider text-[var(--fg-dim)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
