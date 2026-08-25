"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

interface Project {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accent: string;
  content: React.ReactNode;
}

const projects: Project[] = [
  {
    id: "amazon",
    num: "01",
    title: "Amazon Brazil → India Market Analysis",
    category: "Data Analysis",
    description:
      "Analyzed 95,000+ customers and 32,000+ products using PostgreSQL to identify purchasing behavior and recommend an India market-entry strategy.",
    longDescription:
      "Conducted comprehensive analysis of Amazon Brazil's marketplace data to evaluate feasibility of entering the Indian e-commerce market. Processed 95K+ customer records and 32K+ product listings to uncover purchasing patterns, regional demand variations, and payment preferences.",
    tags: ["SQL", "PostgreSQL", "Python", "Pandas"],
    metrics: [
      { label: "Customers", value: "95K+" },
      { label: "Products", value: "32K+" },
      { label: "SKUs", value: "6K+" },
    ],
    accent: "#10B981",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-white/5 bg-white/[0.02] p-4">
            <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
              PAYMENT METHODS
            </p>
            <ResponsiveContainer width="100%" height={140}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Credit Card", value: 77 },
                    { name: "Others", value: 23 },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={55}
                  paddingAngle={4}
                  dataKey="value"
                >
                  <Cell fill="#10B981" />
                  <Cell fill="rgba(255,255,255,0.06)" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-4">
            <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
              MONTHLY TREND
            </p>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart
                data={[
                  { m: "J", v: 4000 },
                  { m: "F", v: 5500 },
                  { m: "M", v: 4800 },
                  { m: "A", v: 7200 },
                  { m: "M", v: 6100 },
                  { m: "J", v: 8500 },
                ]}
              >
                <XAxis
                  dataKey="m"
                  tick={{ fill: "rgba(255,255,255,0.2)", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#111",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#fff",
                    fontSize: 12,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="v"
                  stroke="#10B981"
                  strokeWidth={1.5}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "swiggy",
    num: "02",
    title: "Swiggy Analytics Dashboard",
    category: "Visualization",
    description:
      "Tableau-style dashboard analyzing conversion rates, device traffic, and marketing campaign performance for a food delivery platform.",
    longDescription:
      "Designed and built a comprehensive analytics dashboard for Swiggy, tracking key metrics across 120K+ sessions including conversion rates, bounce rates, and device distribution.",
    tags: ["Tableau", "BI", "Dashboard"],
    metrics: [
      { label: "Conversion", value: "45.6%" },
      { label: "Bounce", value: "22.7%" },
      { label: "Sessions", value: "120K" },
    ],
    accent: "#38BDF8",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Conversion", value: "45.6%" },
            { label: "Bounce", value: "22.7%" },
            { label: "Session", value: "4m 32s" },
          ].map((k) => (
            <div
              key={k.label}
              className="border border-white/5 bg-white/[0.02] p-3 text-center"
            >
              <div className="text-lg font-semibold text-white">{k.value}</div>
              <div className="mt-1 font-mono text-[9px] text-[var(--fg-dim)]">
                {k.label}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-white/5 bg-white/[0.02] p-4">
            <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
              DEVICES
            </p>
            <ResponsiveContainer width="100%" height={120}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Mobile", value: 68 },
                    { name: "Desktop", value: 24 },
                    { name: "Tablet", value: 8 },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={25}
                  outerRadius={45}
                  paddingAngle={3}
                  dataKey="value"
                >
                  <Cell fill="#38BDF8" />
                  <Cell fill="#A0A0A0" />
                  <Cell fill="#6A6560" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-4">
            <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
              CAMPAIGNS
            </p>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart
                data={[
                  { n: "E", v: 4.2 },
                  { n: "S", v: 3.8 },
                  { n: "G", v: 5.1 },
                  { n: "D", v: 2.4 },
                ]}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.04)"
                />
                <XAxis
                  dataKey="n"
                  tick={{ fill: "rgba(255,255,255,0.2)", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Bar dataKey="v" fill="#38BDF8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "sumo",
    num: "03",
    title: "SUMO Traffic Analytics",
    category: "Simulation",
    description:
      "Built a traffic simulation analytics platform using Python, SUMO, and TraCI with automated data pipelines and ML-ready datasets.",
    longDescription:
      "Developed a full-stack traffic simulation analytics system using SUMO and TraCI. Automated data pipelines collecting real-time metrics from 7-lane networks spanning 10km.",
    tags: ["Python", "SUMO", "TraCI", "Automation"],
    metrics: [
      { label: "Lanes", value: "7" },
      { label: "Network", value: "10 km" },
      { label: "Auto", value: "90%" },
    ],
    accent: "#A78BFA",
    content: (
      <div className="space-y-4">
        <div className="border border-white/5 bg-[#0c0c0c] p-4">
          <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
            SIMULATION
          </p>
          <div className="relative h-24 overflow-hidden bg-[#080808]">
            {Array.from({ length: 7 }, (_, l) => (
              <div
                key={l}
                className="absolute h-px w-full bg-white/[0.04]"
                style={{ top: `${(l + 1) * 12.5}%` }}
              />
            ))}
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="h-1 w-3"
                style={{
                  position: "absolute",
                  top: `${((i % 7) + 1) * 12.5 - 1}%`,
                  left: `${((i * 27 + 5) % 85)}%`,
                  backgroundColor:
                    i % 3 === 0 ? "#A78BFA" : i % 3 === 1 ? "#38BDF8" : "#10B981",
                  opacity: 0.5,
                }}
              />
            ))}
          </div>
        </div>
        <div className="border border-white/5 bg-[#0c0c0c] p-4 font-mono text-[11px] leading-relaxed text-[var(--fg-dim)]">
          <div>
            <span className="text-[var(--accent)]">import</span> traci
          </div>
          <div className="mt-1">
            <span className="text-[var(--accent)]">def</span>{" "}
            <span className="text-white/50">run</span>():
          </div>
          <div className="pl-3">traci.start(cmd)</div>
        </div>
      </div>
    ),
  },
  {
    id: "hinge",
    num: "04",
    title: "Hinge Match-to-Meet Funnel",
    category: "Product Analytics",
    description:
      "Analyzed the complete user funnel from matches to meetups and ran A/B tests that increased LTV by 18%.",
    longDescription:
      "Analyzed the full user lifecycle on Hinge, identifying critical drop-off points. A/B tests drove 18% LTV increase, 3× premium likelihood, and +10 NPS.",
    tags: ["A/B Testing", "Funnel", "SQL"],
    metrics: [
      { label: "LTV", value: "+18%" },
      { label: "Premium", value: "3×" },
      { label: "NPS", value: "+10" },
    ],
    accent: "#F472B6",
    content: (
      <div className="space-y-4">
        <div className="border border-white/5 bg-white/[0.02] p-4">
          <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
            FUNNEL
          </p>
          <div className="flex flex-col gap-2">
            {[
              { label: "Matches", pct: "100%", w: "100%" },
              { label: "Chats", pct: "78%", w: "78%" },
              { label: "Dates", pct: "45%", w: "45%" },
              { label: "Meetups", pct: "22%", w: "22%" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ width: 0 }}
                whileInView={{ width: s.w }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center justify-between border-l-2 border-[var(--accent)] bg-white/[0.02] px-4 py-2"
              >
                <span className="text-[13px] text-[var(--fg-muted)]">
                  {s.label}
                </span>
                <span className="text-[13px] font-medium text-white">
                  {s.pct}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-white/5 bg-white/[0.02] p-4">
            <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
              A/B TEST
            </p>
            <div className="flex gap-6">
              <div>
                <div className="font-mono text-[9px] text-[var(--fg-dim)]">
                  CTRL
                </div>
                <div className="text-lg font-semibold text-[var(--fg-muted)]">
                  12.4%
                </div>
              </div>
              <div>
                <div className="font-mono text-[9px] text-[var(--accent)]">
                  VAR
                </div>
                <div className="text-lg font-semibold text-[var(--accent)]">
                  14.6%
                </div>
              </div>
            </div>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-4">
            <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
              IMPACT
            </p>
            <div className="space-y-1.5">
              {[
                { l: "LTV", v: "+18%" },
                { l: "Premium", v: "3×" },
                { l: "NPS", v: "+10" },
              ].map((i) => (
                <div
                  key={i.l}
                  className="flex justify-between text-[13px]"
                >
                  <span className="text-[var(--fg-dim)]">{i.l}</span>
                  <span className="font-medium text-white">{i.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto border border-white/5 bg-[#0c0c0c] p-6"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center border border-white/10 bg-white/[0.03] text-white/40 transition-colors hover:text-white"
        >
          <X size={14} />
        </button>
        <div className="mb-5">
          <p className="mb-1 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
            {project.category}
          </p>
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {project.title}
          </h3>
        </div>
        <p className="mb-5 text-sm font-light leading-relaxed tracking-wide text-[var(--fg-muted)]">
          {project.longDescription}
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="border border-white/5 px-3 py-1 font-mono text-[10px] tracking-wider text-[var(--fg-dim)]"
            >
              {t}
            </span>
          ))}
        </div>
        {project.content}
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32">
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
            02 // WORK
          </p>
          <h2
            className="font-extrabold leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Selected
            <br />
            projects.
          </h2>
        </motion.div>

        {/* Project cards — left-accent border style */}
        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group border-l-2 border-white/5 bg-white/[0.01] p-6 transition-all hover:border-l-[var(--accent)] hover:bg-white/[0.025] sm:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-10">
                {/* Left: meta */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--fg-dim)]">
                      {project.num}
                    </span>
                    <span className="h-px flex-1 bg-white/5" />
                    <span
                      className="font-mono text-[10px] tracking-[0.15em]"
                      style={{ color: `${project.accent}99` }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mb-3 text-lg font-medium text-white">
                    {project.title}
                  </h3>
                  <p className="mb-5 text-sm font-light leading-relaxed tracking-wide text-[var(--fg-muted)]">
                    {project.description}
                  </p>
                  <div className="mb-5 flex gap-5">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div
                          className="text-lg font-semibold"
                          style={{ color: project.accent }}
                        >
                          {m.value}
                        </div>
                        <div className="mt-0.5 font-mono text-[9px] tracking-[0.15em] text-[var(--fg-dim)]">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-white/5 px-2.5 py-1 font-mono text-[9px] tracking-wider text-[var(--fg-dim)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: chart preview */}
                <div className="hidden lg:block">
                  <div className="border border-white/5 bg-white/[0.015] p-4">
                    <p className="mb-3 font-mono text-[9px] tracking-[0.2em] text-[var(--fg-dim)]">
                      PREVIEW
                    </p>
                    <div className="h-48">{project.content}</div>
                  </div>
                </div>
              </div>

              {/* Mobile: expand button */}
              <div className="mt-5 lg:hidden">
                <button
                  onClick={() => setSelected(project)}
                  className="font-mono text-[10px] tracking-[0.15em] text-[var(--accent)] transition-colors hover:text-white"
                  data-cursor-hover="true"
                >
                  [ VIEW DETAILS → ]
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
