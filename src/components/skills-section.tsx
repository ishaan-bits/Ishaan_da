"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Languages",
    items: [
      { name: "SQL", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "Excel", level: "Advanced" },
      { name: "Google Sheets", level: "Intermediate" },
      { name: "R", level: "Intermediate" },
    ],
  },
  {
    name: "Visualization",
    items: [
      { name: "Tableau", level: "Advanced" },
      { name: "Recharts", level: "Intermediate" },
      { name: "Looker", level: "Intermediate" },
      { name: "Matplotlib", level: "Intermediate" },
    ],
  },
  {
    name: "Libraries",
    items: [
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Intermediate" },
      { name: "Scikit-learn", level: "Intermediate" },
      { name: "Seaborn", level: "Intermediate" },
    ],
  },
  {
    name: "Domains",
    items: [
      { name: "A/B Testing", level: "Advanced" },
      { name: "Product Analytics", level: "Advanced" },
      { name: "Data Cleaning", level: "Advanced" },
      { name: "Traffic Simulation", level: "Intermediate" },
      { name: "Predictive Modeling", level: "Intermediate" },
      { name: "User Segmentation", level: "Intermediate" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-[13px] text-white/30">Skills</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tools & expertise.
          </h2>
          <p className="mt-4 max-w-lg text-[14px] text-white/35">
            A blend of technical skills and domain knowledge that lets me move
            from raw data to business recommendations end-to-end.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="mb-5 text-[11px] font-medium uppercase tracking-wider text-white/25">
                {cat.name}
              </h3>
              <div className="flex flex-col gap-1.5">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center justify-between rounded-lg px-2.5 py-2 text-[14px] text-white/50 transition-all hover:bg-white/[0.03]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-px w-0 bg-[#38BDF8]/40 transition-all group-hover:w-3" />
                      <span className="transition-colors group-hover:text-white/80">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-white/15 transition-colors group-hover:text-white/30">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
