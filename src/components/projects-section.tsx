"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, Tooltip,
  BarChart, Bar, CartesianGrid,
} from "recharts";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  colorClass: string;
  borderClass: string;
  bgClass: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  details: React.ReactNode;
}

const projects: Project[] = [
  {
    id: "amazon",
    title: "Amazon Brazil → India",
    subtitle: "Market Analysis",
    color: "#10B981",
    colorClass: "text-emerald",
    borderClass: "border-emerald/20",
    bgClass: "bg-emerald/5",
    description:
      "Analyzed 95,000+ customers and 32,000+ products using PostgreSQL to identify purchasing behavior and recommend an India market-entry strategy.",
    tech: ["SQL", "PostgreSQL", "Data Analysis"],
    metrics: [
      { label: "Customers", value: "95K+" },
      { label: "Products", value: "32K+" },
      { label: "High-demand SKUs", value: "6K+" },
    ],
    details: (
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h4 className="mb-3 text-xs text-white/40">Payment Methods</h4>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Credit Card", value: 77 },
                    { name: "Others", value: 23 },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={4}
                  dataKey="value"
                >
                  <Cell fill="#10B981" />
                  <Cell fill="rgba(255,255,255,0.1)" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 text-xs">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald" /> Credit
                Card 77%
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-white/10" /> Others
                23%
              </span>
            </div>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h4 className="mb-3 text-xs text-white/40">Monthly Sales Trend</h4>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart
                data={[
                  { month: "Jan", sales: 4000 },
                  { month: "Feb", sales: 5500 },
                  { month: "Mar", sales: 4800 },
                  { month: "Apr", sales: 7200 },
                  { month: "May", sales: 6100 },
                  { month: "Jun", sales: 8500 },
                  { month: "Jul", sales: 7800 },
                ]}
              >
                <XAxis
                  dataKey="month"
                  tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }}
                  axisLine={false}
                />
                <YAxis
                  tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#18181B",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <h4 className="mb-3 text-xs text-white/40">Regional Demand</h4>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 28 }, (_, i) => (
              <div
                key={i}
                className="aspect-square rounded-sm"
                style={{
                  backgroundColor: `rgba(16, 185, 129, ${
                    Math.random() * 0.6 + 0.1
                  })`,
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
    title: "Swiggy Analytics",
    subtitle: "Dashboard",
    color: "#38BDF8",
    colorClass: "text-cyan",
    borderClass: "border-cyan/20",
    bgClass: "bg-cyan/5",
    description:
      "Built a realistic Tableau-style dashboard analyzing conversion rates, bounce rates, device traffic, and marketing campaign performance.",
    tech: ["Tableau", "BI", "Visualization"],
    metrics: [
      { label: "Conversion", value: "45.6%" },
      { label: "Bounce Rate", value: "22.7%" },
      { label: "Mobile Traffic", value: "68%" },
    ],
    details: (
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Conversion", value: "45.6%", color: "#38BDF8" },
            { label: "Bounce Rate", value: "22.7%", color: "#F472B6" },
            { label: "Avg Session", value: "4m 32s", color: "#10B981" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center"
            >
              <div
                className="text-xl font-bold"
                style={{ color: kpi.color }}
              >
                {kpi.value}
              </div>
              <div className="mt-1 text-[10px] text-white/40">{kpi.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h4 className="mb-3 text-xs text-white/40">Traffic by Device</h4>
            <ResponsiveContainer width="100%" height={140}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Mobile", value: 68 },
                    { name: "Desktop", value: 24 },
                    { name: "Tablet", value: 8 },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={55}
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
            <h4 className="mb-3 text-xs text-white/40">Campaign Performance</h4>
            <ResponsiveContainer width="100%" height={140}>
              <BarChart
                data={[
                  { name: "Email", ctr: 4.2 },
                  { name: "Social", ctr: 3.8 },
                  { name: "Search", ctr: 5.1 },
                  { name: "Display", ctr: 2.4 },
                ]}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.05)"
                />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }}
                  axisLine={false}
                />
                <YAxis
                  tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }}
                  axisLine={false}
                />
                <Bar dataKey="ctr" fill="#38BDF8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "sumo",
    title: "SUMO Traffic",
    subtitle: "Analytics",
    color: "#A78BFA",
    colorClass: "text-purple-300",
    borderClass: "border-purple-400/20",
    bgClass: "bg-purple-400/5",
    description:
      "Built a futuristic traffic simulation analytics platform using Python, SUMO, and TraCI with animated lane visualization and automated data pipelines.",
    tech: ["Python", "SUMO", "TraCI"],
    metrics: [
      { label: "Lanes", value: "7" },
      { label: "Network", value: "10 km" },
      { label: "Features", value: "22+" },
      { label: "Automation", value: "90%" },
    ],
    details: (
      <div className="flex flex-col gap-4">
        {/* Animated Lanes */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <h4 className="mb-3 text-xs text-white/40">Live Traffic Simulation</h4>
          <div className="relative h-32 overflow-hidden rounded-lg bg-[#0D0D12]">
            {Array.from({ length: 7 }, (_, lane) => (
              <div
                key={lane}
                className="absolute h-[1px] w-full bg-white/[0.06]"
                style={{ top: `${(lane + 1) * (100 / 8)}%` }}
              />
            ))}
            {Array.from({ length: 12 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute h-1.5 w-4 rounded-sm"
                style={{
                  top: `${((i % 7) + 1) * (100 / 8) - 1}%`,
                  backgroundColor:
                    i % 3 === 0
                      ? "#10B981"
                      : i % 3 === 1
                      ? "#38BDF8"
                      : "#A78BFA",
                }}
                animate={{
                  left: ["-5%", "105%"],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Lanes", value: "7", icon: "🛤️" },
            { label: "Network", value: "10 km", icon: "🌐" },
            { label: "Features", value: "22+", icon: "⚡" },
            { label: "Automation", value: "90%", icon: "🤖" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
            >
              <div className="mb-1 text-lg">{kpi.icon}</div>
              <div className="text-lg font-bold text-purple-300">{kpi.value}</div>
              <div className="text-[10px] text-white/40">{kpi.label}</div>
            </div>
          ))}
        </div>

        {/* Floating Code */}
        <div className="rounded-xl border border-white/[0.06] bg-[#0D0D12] p-4 font-mono text-xs text-white/40">
          <div>
            <span className="text-purple-300">import</span> traci
          </div>
          <div>
            <span className="text-purple-300">import</span> sumolib
          </div>
          <div className="mt-1">
            <span className="text-cyan">def</span>{" "}
            <span className="text-emerald">simulate_traffic</span>():
          </div>
          <div className="pl-4">
            traci.<span className="text-cyan">start</span>([sumoCmd])
          </div>
          <div className="pl-4">
            <span className="text-purple-300">while</span> traci.
            <span className="text-cyan">simulation</span>.step():
          </div>
          <div className="pl-8">collect_metrics()</div>
        </div>
      </div>
    ),
  },
  {
    id: "hinge",
    title: "Hinge Match-to-Meet",
    subtitle: "Funnel Analysis",
    color: "#F472B6",
    colorClass: "text-pink-400",
    borderClass: "border-pink-400/20",
    bgClass: "bg-pink-400/5",
    description:
      "Visualized the complete user funnel from matches to real-world meetups, conducted A/B testing to optimize the conversion pipeline.",
    tech: ["A/B Testing", "Product Analytics", "Funnel"],
    metrics: [
      { label: "LTV Increase", value: "+18%" },
      { label: "Premium Likelihood", value: "3×" },
      { label: "NPS Increase", value: "+10" },
    ],
    details: (
      <div className="flex flex-col gap-4">
        {/* Funnel */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <h4 className="mb-4 text-xs text-white/40">User Funnel</h4>
          <div className="flex flex-col items-center gap-2">
            {[
              { label: "Matches", width: "100%", value: "100%", color: "#F472B6" },
              { label: "Chats", width: "78%", value: "78%", color: "#E879F9" },
              { label: "Dates", width: "45%", value: "45%", color: "#C084FC" },
              { label: "Meetups", width: "22%", value: "22%", color: "#A78BFA" },
            ].map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: step.width, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex items-center justify-between rounded-lg px-4 py-2.5"
                style={{
                  backgroundColor: `${step.color}15`,
                  borderLeft: `3px solid ${step.color}`,
                }}
              >
                <span className="text-xs text-white/70">{step.label}</span>
                <span className="text-xs font-medium" style={{ color: step.color }}>
                  {step.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* A/B Test */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <h4 className="mb-3 text-xs text-white/40">A/B Test Results</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
              <div className="mb-2 text-[10px] uppercase tracking-wider text-white/30">
                Control
              </div>
              <div className="text-lg font-bold text-white/60">12.4%</div>
              <div className="text-[10px] text-white/30">Conversion</div>
            </div>
            <div className="rounded-lg border border-pink-400/20 bg-pink-400/5 p-3">
              <div className="mb-2 text-[10px] uppercase tracking-wider text-pink-400/60">
                Variant
              </div>
              <div className="text-lg font-bold text-pink-400">14.6%</div>
              <div className="text-[10px] text-pink-400/60">Conversion +18%</div>
            </div>
          </div>
        </div>

        {/* Impact */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "LTV", value: "+18%", icon: "💰" },
            { label: "Premium", value: "3×", icon: "⭐" },
            { label: "NPS", value: "+10", icon: "📊" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center"
            >
              <div className="mb-1 text-lg">{kpi.icon}</div>
              <div className="text-lg font-bold text-pink-400">{kpi.value}</div>
              <div className="text-[10px] text-white/40">{kpi.label}</div>
            </div>
          ))}
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4, scale: 1.01 }}
      onClick={onClick}
      className={`group cursor-pointer rounded-2xl border ${project.borderClass} ${project.bgClass} p-6 backdrop-blur-sm transition-all hover:shadow-lg`}
      style={{
        boxShadow: `0 0 0 rgba(0,0,0,0)`,
      }}
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className={`text-sm ${project.colorClass}`}>{project.subtitle}</p>
        </div>
        <ExternalLink
          size={18}
          className="text-white/20 transition-colors group-hover:text-white/60"
        />
      </div>
      <p className="mb-4 text-sm leading-relaxed text-white/40">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-white/40"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.metrics.map((m) => (
          <div key={m.label}>
            <div className={`text-lg font-bold ${project.colorClass}`}>
              {m.value}
            </div>
            <div className="text-[10px] text-white/30">{m.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
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
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/[0.08] bg-[#111114] p-6 md:p-8"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 transition-colors hover:text-white"
        >
          <X size={16} />
        </button>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className={`text-sm ${project.colorClass}`}>{project.subtitle}</p>
        </div>
        {project.details}
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/40">
            Data-driven solutions that delivered real impact
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelected(project)}
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
