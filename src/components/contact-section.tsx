"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "ishaan@example.com",
    href: "mailto:ishaan@example.com",
    description: "For inquiries and collaboration",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ishaan-parimal",
    href: "https://linkedin.com",
    description: "Professional network and updates",
  },
  {
    label: "GitHub",
    value: "github.com/ishaan-parimal",
    href: "https://github.com",
    description: "Open source projects and code",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-[13px] text-white/30">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s work
            <br />
            together.
          </h2>
          <p className="mt-4 max-w-lg text-[14px] text-white/35">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="glow-hover group rounded-2xl border border-white/[0.04] bg-white/[0.015] p-6 transition-all hover:border-white/[0.1] hover:bg-white/[0.03]"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04]">
                  {link.label === "Email" ? (
                    <Mail size={16} className="text-white/30" />
                  ) : link.label === "LinkedIn" ? (
                    <span className="text-[14px]">in</span>
                  ) : (
                    <span className="text-[14px]">⌥</span>
                  )}
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-white/10 transition-all group-hover:text-white/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <h3 className="mb-1 text-[15px] font-medium text-white/80">
                {link.label}
              </h3>
              <p className="mb-3 text-[13px] text-white/30">
                {link.description}
              </p>
              <p className="text-[13px] text-white/50 transition-colors group-hover:text-white/70">
                {link.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-2 text-[13px] text-white/25"
        >
          <MapPin size={12} />
          Based in India · Open to remote opportunities
        </motion.div>
      </div>
    </section>
  );
}
