"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
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
  YAxis,
} from "recharts";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accent: string;
  content: React.ReactNode;
}

const projects: Project[] = [
  {
    id: "amazon",
    title: "Amazon Brazil → India Market Analysis",
    category: "Data Analysis",
    description:
      "Analyzed 95,000+ customers and 32,000+ products using PostgreSQL to identify purchasing behavior and recommend an India market-entry strategy.",
    tags: ["SQL", "PostgreSQL", "Python"],
    metrics: [
      { label: "Customers", value: "95K+" },
      { label: "Products", value: "32K+" },
      { label: "SKUs", value: "6K+" },
    ],
    accent: "#10B981",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="mb-3 text-[11px] uppercase tracking-wider text-white/30">
              Payment Methods
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
            <div className="mt-2 flex justify-center gap-4 text-[11px] text-white/40">
              <span>Credit Card 77%</span>
              <span>Others 23%</span>
            </div>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="mb-3 text-[11px] uppercase tracking-wider text-white/30">
              Monthly Trend
            </p>
            <ResponsiveContainer width="100%" height={160}>
              <LineChart
                data={[
                  { m: "Jan", v: 4000 },
                  { m: "Feb", v: 5500 },
                  { m: "Mar", v: 4800 },
                  { m: "Apr", v: 7200 },
                  { m: "May", v: 6100 },
                  { m: "Jun", v: 8500 },
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
                    borderRadius: 8,
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
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <p className="mb-3 text-[11px] uppercase tracking-wider text-white/30">
            Regional Demand Heatmap
          </p>
          <div className="grid grid-cols-10 gap-1">
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className="aspect-square rounded-[2px]"
                style={{
                  backgroundColor: `rgba(16,185,129,${0.1 + ((i * 7 + 3) % 6) * 0.12})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "swiggy",
    title: "Swiggy Analytics Dashboard",
    category: "Visualization",
    description:
      "Tableau-style dashboard analyzing conversion rates, device traffic, and marketing campaign performance for a food delivery platform.",
    tags: ["Tableau", "BI", "Dashboard"],
    metrics: [
      { label: "Conversion", value: "45.6%" },
      { label: "Bounce Rate", value: "22.7%" },
      { label: "Mobile", value: "68%" },
    ],
    accent: "#38BDF8",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Conversion", value: "45.6%", color: "#38BDF8" },
            { label: "Bounce Rate", value: "22.7%", color: "#F472B6" },
            { label: "Avg Session", value: "4m 32s", color: "#10B981" },
          ].map((k) => (
            <div
              key={k.label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center"
            >
              <div className="text-lg font-semibold" style={{ color: k.color }}>
                {k.value}
              </div>
              <div className="mt-1 text-[11px] text-white/30">{k.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="mb-3 text-[11px] uppercase tracking-wider text-white/30">
              Device Split
            </p>
            <ResponsiveContainer width="100%" height={130}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Mobile", value: 68 },
                    { name: "Desktop", value: 24 },
                    { name: "Tablet", value: 8 },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={50}
                  paddingAngle={3}
                  dataKey="value"
                >
                  <Cell fill="#38BDF8" />
                  <Cell fill="#A78BFA" />
                  <Cell fill="#10B981" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="mb-3 text-[11px] uppercase tracking-wider text-white/30">
              Campaign CTR
            </p>
            <ResponsiveContainer width="100%" height={130}>
              <BarChart
                data={[
                  { name: "Email", v: 4.2 },
                  { name: "Social", v: 3.8 },
                  { name: "Search", v: 5.1 },
                  { name: "Display", v: 2.4 },
                ]}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.04)"
                />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "rgba(255,255,255,0.2)", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "rgba(255,255,255,0.2)", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Bar dataKey="v" fill="#38BDF8" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "sumo",
    title: "SUMO Traffic Analytics",
    category: "Simulation",
    description:
      "Built a traffic simulation analytics platform using Python, SUMO, and TraCI with automated data pipelines and ML-ready datasets.",
    tags: ["Python", "SUMO", "TraCI"],
    metrics: [
      { label: "Lanes", value: "7" },
      { label: "Network", value: "10 km" },
      { label: "Automation", value: "90%" },
    ],
    accent: "#A78BFA",
    content: (
      <div className="space-y-4">
        <div className="rounded-xl border border-white/[0.06] bg-[#0a0a0a] p-4">
          <p className="mb-3 text-[11px] uppercase tracking-wider text-white/30">
            Live Simulation
          </p>
          <div className="relative h-28 overflow-hidden rounded-lg bg-[#080808]">
            {Array.from({ length: 7 }, (_, l) => (
              <div
                key={l}
                className="absolute h-px w-full bg-white/[0.04]"
                style={{ top: `${(l + 1) * 12.5}%` }}
              />
            ))}
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="absolute h-1 w-3 rounded-sm"
                style={{
                  top: `${((i % 7) + 1) * 12.5 - 1}%`,
                  left: `${((i * 23 + 7) % 90)}%`,
                  backgroundColor:
                    i % 3 === 0
                      ? "#10B981"
                      : i % 3 === 1
                        ? "#38BDF8"
                        : "#A78BFA",
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-[#0a0a0a] p-4 font-mono text-[12px] leading-relaxed text-white/30">
          <div>
            <span className="text-[#A78BFA]">import</span> traci, sumolib
          </div>
          <div className="mt-1">
            <span className="text-[#A78BFA]">def</span>{" "}
            <span className="text-[#10B981]">run_simulation</span>():
          </div>
          <div className="pl-4">traci.start(sumoCmd)</div>
          <div className="pl-4">
            <span className="text-[#A78BFA]">while</span> traci.simulation.step():
          </div>
          <div className="pl-8">collect_metrics()</div>
        </div>
      </div>
    ),
  },
  {
    id: "hinge",
    title: "Hinge Match-to-Meet Funnel",
    category: "Product Analytics",
    description:
      "Analyzed the complete user funnel from matches to meetups and ran A/B tests that increased LTV by 18%.",
    tags: ["A/B Testing", "Funnel", "SQL"],
    metrics: [
      { label: "LTV Increase", value: "+18%" },
      { label: "Premium", value: "3×" },
      { label: "NPS", value: "+10" },
    ],
    accent: "#F472B6",
    content: (
      <div className="space-y-4">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <p className="mb-4 text-[11px] uppercase tracking-wider text-white/30">
            Conversion Funnel
          </p>
          <div className="flex flex-col gap-2">
            {[
              { label: "Matches", pct: "100%", w: "100%", c: "#F472B6" },
              { label: "Chats", pct: "78%", w: "78%", c: "#E879F9" },
              { label: "Dates", pct: "45%", w: "45%", c: "#C084FC" },
              { label: "Meetups", pct: "22%", w: "22%", c: "#A78BFA" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ width: 0 }}
                whileInView={{ width: s.w }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center justify-between rounded-lg px-4 py-2.5"
                style={{
                  backgroundColor: `${s.c}0A`,
                  borderLeft: `2px solid ${s.c}`,
                }}
              >
                <span className="text-[13px] text-white/60">{s.label}</span>
                <span
                  className="text-[13px] font-medium"
                  style={{ color: s.c }}
                >
                  {s.pct}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="mb-3 text-[11px] uppercase tracking-wider text-white/30">
              A/B Test
            </p>
            <div className="flex gap-4">
              <div>
                <div className="text-[11px] text-white/30">Control</div>
                <div className="text-lg font-semibold text-white/50">12.4%</div>
              </div>
              <div>
                <div className="text-[11px] text-[#F472B6]/60">Variant</div>
                <div className="text-lg font-semibold text-[#F472B6]">
                  14.6%
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="mb-3 text-[11px] uppercase tracking-wider text-white/30">
              Impact
            </p>
            <div className="flex gap-4">
              <div>
                <div className="text-[11px] text-white/30">LTV</div>
                <div className="text-lg font-semibold text-[#F472B6]">
                  +18%
                </div>
              </div>
              <div>
                <div className="text-[11px] text-white/30">NPS</div>
                <div className="text-lg font-semibold text-[#F472B6]">+10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="group w-full text-left"
    >
      <div className="rounded-2xl border border-white/[0.04] bg-white/[0.015] p-6 transition-all hover:border-white/[0.08] hover:bg-white/[0.025]">
        <div className="mb-3 flex items-start justify-between">
          <p
            className="text-[11px] uppercase tracking-wider"
            style={{ color: `${project.accent}99` }}
          >
            {project.category}
          </p>
          <ArrowUpRight
            size={14}
            className="text-white/15 transition-colors group-hover:text-white/40"
          />
        </div>
        <h3 className="mb-2 text-lg font-medium text-white">
          {project.title}
        </h3>
        <p className="mb-4 text-[13px] leading-relaxed text-white/35">
          {project.description}
        </p>
        <div className="flex gap-3">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-sm font-semibold text-white/70">
                {m.value}
              </div>
              <div className="text-[11px] text-white/25">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

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
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 10 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/[0.06] bg-[#0c0c0c] p-6"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 transition-colors hover:text-white"
        >
          <X size={14} />
        </button>
        <div className="mb-5">
          <p
            className="mb-1 text-[11px] uppercase tracking-wider"
            style={{ color: `${project.accent}99` }}
          >
            {project.category}
          </p>
          <h3 className="text-xl font-medium text-white">{project.title}</h3>
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[11px] text-white/40"
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
    <section id="work" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-[13px] text-white/40">Work</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Selected projects.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onClick={() => setSelected(p)}
            />
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
