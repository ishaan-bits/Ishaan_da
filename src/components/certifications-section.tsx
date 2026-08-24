"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    title: "Deloitte Data Analytics Job Simulation",
    org: "Deloitte",
    skills: ["Data Analysis", "Forensic Technology"],
  },
  {
    title: "NextLeap Product Manager Fellowship",
    org: "NextLeap",
    skills: ["Product Management", "Strategy"],
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-[13px] text-white/30">Certifications</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Continuous learning.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              className="glow-hover rounded-2xl border border-white/[0.04] bg-white/[0.015] p-5 transition-all hover:border-white/[0.08] hover:bg-white/[0.025]"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04]">
                  <Award size={14} className="text-white/30" />
                </div>
                <span className="text-[13px] text-white/35">{cert.org}</span>
              </div>
              <h3 className="mb-3 text-[15px] font-medium text-white/85">
                {cert.title}
              </h3>
              <div className="flex gap-2">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[11px] text-white/30"
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
