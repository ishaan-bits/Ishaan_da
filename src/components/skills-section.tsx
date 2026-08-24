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
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-[13px] text-white/40">Skills</p>
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
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="mb-4 text-[13px] font-medium text-white/30">
                {cat.name}
              </h3>
              <div className="flex flex-col gap-2">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="text-[15px] text-white/60 transition-colors hover:text-white"
                  >
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
