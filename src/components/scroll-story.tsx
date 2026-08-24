"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FileSpreadsheet, Database, Code2, BarChart3, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: FileSpreadsheet,
    title: "CSV Files",
    desc: "Raw data arrives — messy, unstructured, full of potential.",
    color: "#38BDF8",
  },
  {
    icon: Database,
    title: "SQL Query",
    desc: "Structured queries extract meaning from millions of rows.",
    color: "#10B981",
  },
  {
    icon: Code2,
    title: "Python Cleans",
    desc: "Pandas transforms chaos into clean, analysis-ready datasets.",
    color: "#A78BFA",
  },
  {
    icon: BarChart3,
    title: "Tableau Dashboard",
    desc: "Visualizations reveal patterns invisible in raw numbers.",
    color: "#F472B6",
  },
  {
    icon: Lightbulb,
    title: "Business Insights",
    desc: "Data-driven decisions that move the needle.",
    color: "#FBBF24",
  },
];

function StoryStep({
  step,
  index,
  scrollYProgress,
}: {
  step: (typeof steps)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index * 0.2;
  const end = start + 0.2;
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0.3]
  );
  const y = useTransform(scrollYProgress, [start, start + 0.05], [60, 0]);
  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.05, end],
    [0.9, 1, 0.95]
  );

  const Icon = step.icon;

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="flex items-center gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm"
    >
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
        style={{ backgroundColor: `${step.color}15` }}
      >
        <Icon size={24} style={{ color: step.color }} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">{step.title}</h3>
        <p className="text-sm text-white/40">{step.desc}</p>
      </div>
      <div className="ml-auto font-mono text-sm text-white/10">
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#09090B]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="relative mx-auto w-full max-w-4xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              From Raw Data to{" "}
              <span className="text-gradient">Decisions</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <StoryStep
                key={step.title}
                step={step}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <div className="absolute left-1/2 top-24 bottom-12 w-px -translate-x-1/2 bg-gradient-to-b from-cyan/20 via-emerald/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
