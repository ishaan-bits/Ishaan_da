"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 95, suffix: "K+", label: "Customers analyzed" },
  { value: 30, suffix: "K", label: "User profiles processed" },
  { value: 22, suffix: "+", label: "Features engineered" },
  { value: 90, suffix: "%", label: "Workflow automation" },
];

function CountUp({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = duration / 16;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-[13px] text-white/30">About</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Data analyst with a
              <br />
              product mindset.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <p className="text-[15px] leading-relaxed text-white/45">
              Curious by nature, analytical by mindset. I love translating raw
              numbers into meaningful narratives that improve products and
              business decisions.
            </p>
            <p className="text-[15px] leading-relaxed text-white/45">
              Final-year Electrical & Electronics Engineering student at BITS
              Pilani with a passion for analytics, experimentation, and product
              thinking. I enjoy uncovering patterns from data, building
              dashboards, and solving business problems through SQL, Python,
              Tableau, and statistical analysis.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group"
                >
                  <div className="text-2xl font-semibold text-white transition-colors group-hover:bg-gradient-to-r group-hover:from-[#38BDF8] group-hover:to-[#10B981] group-hover:bg-clip-text group-hover:text-transparent">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-[13px] text-white/30">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
