"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "ADAS Research Intern",
    company: "WILP — BITS Pilani",
    period: "2025",
    items: [
      "Built SUMOAPI v4 — a full-featured API for traffic simulation data",
      "Automated data pipelines for real-time traffic metrics collection",
      "Generated ML-ready datasets from simulation output",
      "Reduced manual setup by 90% through workflow automation",
    ],
  },
];

export default function ExperienceSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-[13px] text-white/40">Experience</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Where I&apos;ve worked.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/[0.04] bg-white/[0.015]"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04]">
                    <Briefcase size={16} className="text-white/40" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium text-white">
                      {exp.title}
                    </h3>
                    <p className="text-[13px] text-white/35">
                      {exp.company} · {exp.period}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-white/20 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/[0.04] px-5 pb-5 pt-4">
                      <ul className="space-y-2">
                        {exp.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-[13px] text-white/45"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/20" />
                            {item}
                          </li>
                        ))}
                      </ul>
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
