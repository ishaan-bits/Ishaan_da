"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    num: "01",
    title: "SQL & DATABASES",
    desc: "Complex queries, window functions, CTEs, and data modeling across PostgreSQL, MySQL, and BigQuery.",
  },
  {
    num: "02",
    title: "PYTHON ANALYTICS",
    desc: "Data wrangling with Pandas, statistical analysis with NumPy, and visualization with Matplotlib and Seaborn.",
  },
  {
    num: "03",
    title: "DASHBOARD DESIGN",
    desc: "Interactive dashboards in Tableau and Recharts that tell clear stories and drive product decisions.",
  },
  {
    num: "04",
    title: "A/B TESTING",
    desc: "Experiment design, statistical significance analysis, and actionable recommendations for product teams.",
  },
  {
    num: "05",
    title: "PRODUCT ANALYTICS",
    desc: "Funnel analysis, user segmentation, cohort tracking, and behavioral insights that inform strategy.",
  },
  {
    num: "06",
    title: "DATA PIPELINES",
    desc: "Automated ETL workflows, data cleaning, and ML-ready dataset generation from raw sources.",
  },
];

export default function SkillsSection() {
  return (
    <section id="capabilities" className="section-border py-24 sm:py-32">
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
            03 // CAPABILITIES
          </p>
          <h2
            className="font-extrabold leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Everything a build needs.
          </h2>
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border-t border-white/5 p-6 transition-colors hover:bg-white/[0.02] sm:p-8"
            >
              <p className="mb-4 font-mono text-[10px] tracking-[0.35em] text-[var(--fg-dim)]">
                {cap.num}
              </p>
              <h3 className="mb-3 text-sm font-medium tracking-[0.12em] text-white">
                {cap.title}
              </h3>
              <p className="text-sm font-light leading-relaxed tracking-wide text-[var(--fg-dim)]">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 border-t border-white/5 pt-8"
        >
          <a
            href="#work"
            className="group/btn inline-flex items-baseline font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)] transition-colors hover:text-[var(--fg-muted)]"
            data-cursor-hover="true"
          >
            SEE THESE IN ACTION →
            <span className="btn-arrow ml-1 inline-block">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
