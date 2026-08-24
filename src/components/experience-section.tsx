"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "ADAS Research Intern",
    company: "WILP – BITS Pilani",
    period: "2025",
    achievements: [
      "Built SUMOAPI v4 — a full-featured API for traffic simulation data",
      "Automated data pipelines for real-time traffic metrics collection",
      "Generated ML-ready datasets from simulation output",
      "Reduced manual setup by 90% through workflow automation",
    ],
  },
];

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/40 via-emerald/20 to-transparent md:left-8" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 flex h-5 w-5 items-center justify-center rounded-full border-2 border-cyan/40 bg-[#09090B] md:left-6">
                  <div className="h-2 w-2 rounded-full bg-cyan" />
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
                  <button
                    onClick={() =>
                      setExpanded(expanded === i ? null : i)
                    }
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10">
                        <Briefcase size={18} className="text-cyan" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-white/40">
                          {exp.company} • {exp.period}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expanded === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} className="text-white/30" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/[0.04] px-6 pb-6 pt-4">
                          <ul className="flex flex-col gap-3">
                            {exp.achievements.map((a, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.1 }}
                                className="flex items-start gap-2 text-sm text-white/50"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan/60" />
                                {a}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
