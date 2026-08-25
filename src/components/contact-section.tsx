"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-border pt-32 pb-20 sm:pt-40 sm:pb-24">
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
            07 // CONTACT
          </p>
          <h2
            className="max-w-4xl font-bold leading-[0.92] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}
          >
            Commission
            <br />
            a build.
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[55%_45%]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="py-10">
                <p className="text-sm font-light tracking-wide text-[var(--fg-muted)]">
                  Thanks for reaching out. I&apos;ll get back to you within 24
                  hours.
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
                    className="w-full border-b border-white/20 bg-transparent py-3 text-sm font-light tracking-wide text-white outline-none transition-colors placeholder:text-[#6A6560] focus:border-[var(--accent)]"
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
                    className="w-full border-b border-white/20 bg-transparent py-3 text-sm font-light tracking-wide text-white outline-none transition-colors placeholder:text-[#6A6560] focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] tracking-[0.25em] text-[var(--fg-muted)]">
                    PROJECT NOTES
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What problem are you solving? What does success look like?"
                    className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-sm font-light tracking-wide text-white outline-none transition-colors placeholder:text-[#6A6560] focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="group/btn inline-flex items-baseline font-mono text-xs tracking-[0.2em] text-white transition-colors hover:text-gray-300"
                    data-cursor-hover="true"
                  >
                    [ REQUEST DISCOVERY ]
                    <span className="btn-arrow ml-1 inline-block">↗</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Side info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <div className="border-t border-white/5 pt-8">
              <p className="mb-6 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
                IMMERSIVE DATA EXPERIANCES /
              </p>
              <div className="flex items-end justify-between">
                {/* Inner footer */}
                <div className="flex items-end gap-8 font-mono text-[9px] tracking-wider text-[var(--fg-dim)] sm:text-[10px] md:text-[11px]">
                  <div>
                    <p className="text-white/40">ISHAAN PARIMAL</p>
                    <p className="mt-1 text-[var(--fg-dim)]">
                      INDEPENDENT DATA ANALYST · INDIA
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 font-mono text-[9px] tracking-wider text-[var(--fg-dim)] sm:text-[10px]">
                  <a
                    href="mailto:ishaan@example.com"
                    className="transition-colors hover:text-[var(--fg-muted)]"
                    data-cursor-hover="true"
                  >
                    [ EMAIL ↗ ]
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--fg-muted)]"
                    data-cursor-hover="true"
                  >
                    [ GITHUB ↗ ]
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--fg-muted)]"
                    data-cursor-hover="true"
                  >
                    [ LINKEDIN ↗ ]
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
