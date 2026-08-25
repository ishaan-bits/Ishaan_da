"use client";

import { motion } from "framer-motion";

const certs = [
  {
    num: "01",
    title: "Deloitte Data Analytics Job Simulation",
    org: "Deloitte",
    period: "2024",
    description:
      "Completed a job simulation covering data analysis methodologies, forensic technology techniques, and structured problem-solving approaches used in consulting engagements.",
    skills: ["Data Analysis", "Forensic Technology", "Problem Solving"],
  },
  {
    num: "02",
    title: "NextLeap Product Manager Fellowship",
    org: "NextLeap",
    period: "2024",
    description:
      "Intensive fellowship covering product strategy, user research methodologies, roadmap planning, and cross-functional leadership skills.",
    skills: ["Product Management", "Strategy", "User Research"],
  },
];

export default function CertificationsSection() {
  return (
    <section className="section-border py-24 sm:py-32">
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
            06 // CERTIFICATIONS
          </p>
          <h2
            className="font-extrabold leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Continuous
            <br />
            <span className="text-[var(--fg-muted)]">learning.</span>
          </h2>
        </motion.div>

        {/* Cert cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group border border-white/5 bg-white/[0.015] p-6 transition-all hover:border-white/10 hover:bg-white/[0.03]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--fg-dim)]">
                  {cert.num}
                </span>
                <span className="font-mono text-[9px] tracking-wider text-[var(--fg-dim)]">
                  {cert.period}
                </span>
              </div>
              <p className="mb-2 font-mono text-[10px] tracking-[0.15em] text-[var(--fg-muted)]">
                {cert.org}
              </p>
              <h3 className="mb-3 text-sm font-medium text-white">
                {cert.title}
              </h3>
              <p className="mb-4 text-xs font-light leading-relaxed tracking-wide text-[var(--fg-dim)]">
                {cert.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="border border-white/5 px-2.5 py-1 font-mono text-[9px] tracking-wider text-[var(--fg-dim)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
