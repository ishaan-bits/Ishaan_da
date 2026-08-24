"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "ishaan@example.com",
    href: "mailto:ishaan@example.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ishaan-parimal",
    href: "https://linkedin.com",
  },
  {
    label: "GitHub",
    value: "github.com/ishaan-parimal",
    href: "https://github.com",
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
        </motion.div>

        <div className="flex flex-col gap-3">
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
              whileHover={{ x: 4 }}
              className="glow-hover group flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.015] p-5 transition-all hover:border-white/[0.1] hover:bg-white/[0.03]"
            >
              <div>
                <div className="text-[13px] text-white/30">{link.label}</div>
                <div className="mt-0.5 text-[15px] text-white/60 transition-colors group-hover:text-white/80">
                  {link.value}
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-white/10 transition-all group-hover:text-white/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
