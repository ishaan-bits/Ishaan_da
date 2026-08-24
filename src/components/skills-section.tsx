"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "SQL", icon: "🗄️" },
      { name: "Python", icon: "🐍" },
      { name: "Excel", icon: "📊" },
      { name: "Google Sheets", icon: "📋" },
    ],
  },
  {
    title: "Visualization",
    skills: [
      { name: "Tableau", icon: "📈" },
      { name: "Recharts", icon: "📉" },
    ],
  },
  {
    title: "Libraries",
    skills: [
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
    ],
  },
  {
    title: "Domains",
    skills: [
      { name: "A/B Testing", icon: "🔬" },
      { name: "Product Analytics", icon: "📱" },
      { name: "Data Cleaning", icon: "🧹" },
      { name: "Traffic Simulation", icon: "🚗" },
      { name: "Predictive Modeling", icon: "🎯" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Skills & <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-white/40">
            Technologies and domains I work with
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-white/30">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group relative cursor-default"
                  >
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan/0 via-cyan/0 to-emerald/0 opacity-0 blur transition-all group-hover:from-cyan/20 group-hover:via-emerald/10 group-hover:to-cyan/20 group-hover:opacity-100" />
                    <div className="relative flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 backdrop-blur-sm transition-all group-hover:border-cyan/20 group-hover:bg-white/[0.06]">
                      <span className="text-sm">{skill.icon}</span>
                      <span className="text-sm text-white/60 group-hover:text-white/90">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
