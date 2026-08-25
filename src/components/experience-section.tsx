"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    num: "01",
    title: "RESEARCH INTERN — COMMUNICATION SYSTEMS",
    company: "WILP ADAS Lab — BITS Pilani",
    period: "Jul 2025 — Oct 2025",
    description:
      "Developed an Optical Camera Communication (OCC) simulation environment in NS-3.42, integrating VLC frameworks and SUMO-based vehicular traffic modeling for optical wireless channel research.",
    items: [
      "Installed and configured NS-3.42 with CMake build system, resolving dependency linkage issues from waf-to-CMake migration and validating with point-to-point and LR-WPAN simulations",
      "Integrated NetAnim visualization to observe node interactions, packet flows, and event-driven simulation behaviors in real time",
      "Adapted and partially integrated an open-source VLC module into NS-3.42, enabling optical channel creation and link-level simulation",
      "Generated realistic vehicular mobility traces in SUMO using Poisson-based randomTrips.py, exported trajectories to Excel for analysis and future NS-3 OCC integration",
      "Studied Lambertian radiation model, DC channel gain, OCC receiver modeling (frame rate, pixel sampling, rolling shutter), and SNR/BER analysis for OOK modulation",
    ],
    tags: ["NS-3", "C++", "Python", "SUMO", "TraCI", "VLC", "NetAnim", "CMake"],
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
