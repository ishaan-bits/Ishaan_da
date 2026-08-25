"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-border pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:pl-24 md:pr-16">
        <div className="grid gap-16 lg:grid-cols-[55%_45%]">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-[var(--fg-dim)]">
              07 // CONTACT
            </p>
            <h2
              className="mb-8 max-w-lg font-bold leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
            >
              Let&apos;s build
              <br />
              something{" "}
              <span className="text-[var(--accent)]">together.</span>
            </h2>
            <p className="max-w-md text-sm font-light leading-relaxed tracking-wide text-[var(--fg-muted)]">
              Have a dataset that needs analysis? A dashboard that needs
              building? A product question that needs answering? Tell me what
              you&apos;re working on.
            </p>

            {/* Social links */}
            <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-8">
              {[
                { label: "EMAIL", value: "ishaan@example.com", href: "mailto:ishaan@example.com" },
                { label: "LINKEDIN", value: "linkedin.com/in/ishaan-parimal", href: "https://linkedin.com" },
                { label: "GITHUB", value: "github.com/ishaan-parimal", href: "https://github.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-l-2 border-white/5 bg-white/[0.01] p-4 transition-all hover:border-l-[var(--accent)] hover:bg-white/[0.025]"
                  data-cursor-hover="true"
                >
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.2em] text-[var(--fg-dim)]">
                      {link.label}
                    </div>
                    <div className="mt-0.5 text-[13px] text-[var(--fg-muted)] transition-colors group-hover:text-white">
                      {link.value}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-[var(--fg-dim)] transition-all group-hover:text-[var(--accent)] group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-end"
          >
            <div className="border-t border-white/5 pt-8">
              <p className="mb-6 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
                START A CONVERSATION
              </p>
              {submitted ? (
                <div className="py-10">
                  <p className="text-sm font-light tracking-wide text-[var(--fg-muted)]">
                    Thanks for reaching out. I&apos;ll get back to you within
                    24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="flex flex-col gap-8"
                >
                  <div>
                    <label className="mb-2 block font-mono text-[10px] tracking-[0.25em] text-[var(--fg-muted)]">
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full border-b border-white/15 bg-transparent py-3 text-sm font-light tracking-wide text-white outline-none transition-colors placeholder:text-[#6A6560] focus:border-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-[10px] tracking-[0.25em] text-[var(--fg-muted)]">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full border-b border-white/15 bg-transparent py-3 text-sm font-light tracking-wide text-white outline-none transition-colors placeholder:text-[#6A6560] focus:border-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-[10px] tracking-[0.25em] text-[var(--fg-muted)]">
                      WHAT ARE YOU WORKING ON?
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your data challenge..."
                      className="w-full resize-none border-b border-white/15 bg-transparent py-3 text-sm font-light tracking-wide text-white outline-none transition-colors placeholder:text-[#6A6560] focus:border-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group/btn inline-flex items-center gap-2 border border-[var(--accent)]/30 bg-[var(--accent)]/5 px-5 py-2.5 font-mono text-[11px] tracking-[0.15em] text-[var(--accent)] transition-all hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/50"
                      data-cursor-hover="true"
                    >
                      SEND MESSAGE
                      <span className="btn-arrow inline-block transition-transform group-hover/btn:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
