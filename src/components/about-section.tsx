"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "95K+", label: "Customers analyzed" },
  { value: "30K", label: "User profiles processed" },
  { value: "22+", label: "Features engineered" },
  { value: "90%", label: "Workflow automation" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-[13px] text-white/40">About</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Data analyst with a
              <br />
              product mindset.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <p className="text-[15px] leading-relaxed text-white/50">
              Curious by nature, analytical by mindset. I love translating raw
              numbers into meaningful narratives that improve products and
              business decisions.
            </p>
            <p className="text-[15px] leading-relaxed text-white/50">
              Final-year Electrical & Electronics Engineering student at BITS
              Pilani with a passion for analytics, experimentation, and product
              thinking. I enjoy uncovering patterns from data, building
              dashboards, and solving business problems through SQL, Python,
              Tableau, and statistical analysis.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[13px] text-white/35">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
