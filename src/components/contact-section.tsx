"use client";

import { motion } from "framer-motion";
import { Mail, Globe, ExternalLink, ArrowUpRight } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "ishaan@example.com",
    href: "mailto:ishaan@example.com",
    color: "#38BDF8",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/in/ishaan-parimal",
    href: "https://linkedin.com",
    color: "#10B981",
  },
  {
    icon: ExternalLink,
    label: "GitHub",
    value: "github.com/ishaan-parimal",
    href: "https://github.com",
    color: "#A78BFA",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">meaningful</span>
            <br />
            with data.
          </h2>
          <p className="mb-12 text-lg text-white/40">
            Always open to new opportunities and interesting conversations.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-white/[0.12]"
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${card.color}08 0%, transparent 70%)`,
                  }}
                />
                <div className="relative flex flex-col items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                    style={{ backgroundColor: `${card.color}10` }}
                  >
                    <Icon size={20} style={{ color: card.color }} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/70">
                      {card.label}
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-xs text-white/30">
                      {card.value}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
