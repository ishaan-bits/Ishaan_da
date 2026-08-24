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
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-[13px] text-white/30">Experience</p>
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="glow-hover rounded-2xl border border-white/[0.04] bg-white/[0.015] transition-all hover:border-white/[0.08]"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] transition-colors group-hover:bg-white/[0.06]">
                    <Briefcase size={16} className="text-white/35" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium text-white/90">
                      {exp.title}
                    </h3>
                    <p className="text-[13px] text-white/30">
                      {exp.company} · {exp.period}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-white/15 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/[0.04] px-5 pb-5 pt-4">
                      <ul className="space-y-2.5">
                        {exp.items.map((item, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.06 }}
                            className="flex items-start gap-2.5 text-[13px] text-white/40"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/15" />
                            {item}
                          </motion.li>
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
