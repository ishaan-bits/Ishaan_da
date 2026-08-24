"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Deloitte Data Analytics Job Simulation",
    org: "Deloitte",
    skills: ["Data Analysis", "Forensic Technology"],
    color: "#38BDF8",
  },
  {
    title: "NextLeap Product Manager Fellowship",
    org: "NextLeap",
    skills: ["Product Management", "Strategy"],
    color: "#10B981",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                rotateX: 3,
                rotateY: -3,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              style={{ perspective: 1000 }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${cert.color}15` }}
                >
                  <Award size={18} style={{ color: cert.color }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{cert.org}</h3>
                </div>
              </div>
              <p className="mb-4 text-sm text-white/60">{cert.title}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-white/40"
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
