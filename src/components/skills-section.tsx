"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Languages",
    items: ["SQL", "Python", "Excel", "Google Sheets"],
  },
  {
    name: "Visualization",
    items: ["Tableau", "Recharts", "Looker"],
  },
  {
    name: "Libraries",
    items: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    name: "Domains",
    items: [
      "A/B Testing",
      "Product Analytics",
      "Data Cleaning",
      "Traffic Simulation",
      "Predictive Modeling",
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
            Tools I work with.
          </h2>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="mb-4 text-[11px] font-medium uppercase tracking-wider text-white/25">
                {cat.name}
              </h3>
              <div className="flex flex-col gap-1">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-[14px] text-white/50 transition-all hover:bg-white/[0.03] hover:text-white/80"
                  >
                    <span className="h-px w-0 bg-[#38BDF8]/40 transition-all group-hover:w-3" />
                    {item}
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
