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
  YAxis,
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
  image: string;
  content: React.ReactNode;
}

const projects: Project[] = [
  {
    id: "amazon",
    num: "01",
    title: "AMAZON BRAZIL → INDIA",
    category: "DATA ANALYSIS",
    description:
      "Analyzed 95,000+ customers and 32,000+ products using PostgreSQL to identify purchasing behavior and recommend an India market-entry strategy.",
    longDescription:
      "Conducted comprehensive analysis of Amazon Brazil's marketplace data to evaluate feasibility of entering the Indian e-commerce market. Processed 95K+ customer records and 32K+ product listings to uncover purchasing patterns, regional demand variations, and payment preferences.",
    tags: ["SQL", "PostgreSQL", "Python", "Pandas", "Data Analysis"],
    metrics: [
      { label: "Customers", value: "95K+" },
      { label: "Products", value: "32K+" },
      { label: "SKUs", value: "6K+" },
    ],
    image: "/project-amazon.jpg",
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
                  <Cell fill="var(--accent)" />
                  <Cell fill="rgba(255,255,255,0.06)" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-2 flex justify-center gap-4 font-mono text-[10px] text-[var(--fg-dim)]">
              <span>Credit Card 77%</span>
              <span>Others 23%</span>
            </div>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-4">
            <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
              MONTHLY TREND
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
                    color: "#fff",
                    fontSize: 12,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="v"
                  stroke="var(--accent)"
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
    title: "SWIGGY ANALYTICS DASHBOARD",
    category: "VISUALIZATION",
    description:
      "Tableau-style dashboard analyzing conversion rates, device traffic, and marketing campaign performance for a food delivery platform.",
    longDescription:
      "Designed and built a comprehensive analytics dashboard for Swiggy, a leading food delivery platform. Tracked key metrics including conversion rates, bounce rates, session duration, and device distribution across 120K+ sessions.",
    tags: ["Tableau", "BI", "Dashboard Design", "Marketing Analytics"],
    metrics: [
      { label: "Conversion", value: "45.6%" },
      { label: "Bounce Rate", value: "22.7%" },
      { label: "Sessions", value: "120K" },
    ],
    image: "/project-swiggy.jpg",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Conversion", value: "45.6%" },
            { label: "Bounce Rate", value: "22.7%" },
            { label: "Avg Session", value: "4m 32s" },
          ].map((k) => (
            <div
              key={k.label}
              className="border border-white/5 bg-white/[0.02] p-3 text-center"
            >
              <div className="text-lg font-semibold text-white">{k.value}</div>
              <div className="mt-1 font-mono text-[9px] tracking-wider text-[var(--fg-dim)]">
                {k.label}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-white/5 bg-white/[0.02] p-4">
            <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
              DEVICE SPLIT
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
                  <Cell fill="var(--accent)" />
                  <Cell fill="#A0A0A0" />
                  <Cell fill="#6A6560" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-4">
            <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
              CAMPAIGN CTR
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
                <Bar dataKey="v" fill="var(--accent)" />
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
    title: "SUMO TRAFFIC ANALYTICS",
    category: "SIMULATION",
    description:
      "Built a traffic simulation analytics platform using Python, SUMO, and TraCI with automated data pipelines and ML-ready datasets.",
    longDescription:
      "Developed a full-stack traffic simulation analytics system using SUMO and TraCI. Built automated data pipelines that collect real-time metrics from 7-lane traffic networks spanning 10km. Reduced manual setup by 90%.",
    tags: ["Python", "SUMO", "TraCI", "Automation", "Data Pipelines"],
    metrics: [
      { label: "Lanes", value: "7" },
      { label: "Network", value: "10 km" },
      { label: "Automation", value: "90%" },
    ],
    image: "/project-sumo.jpg",
    content: (
      <div className="space-y-4">
        <div className="border border-white/5 bg-[#0c0c0c] p-4">
          <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
            LIVE SIMULATION
          </p>
          <div className="relative h-28 overflow-hidden bg-[#080808]">
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
                className="h-1 w-3"
                style={{
                  position: "absolute",
                  top: `${((i % 7) + 1) * 12.5 - 1}%`,
                  left: `${((i * 23 + 7) % 90)}%`,
                  backgroundColor:
                    i % 3 === 0
                      ? "var(--accent)"
                      : i % 3 === 1
                        ? "#A0A0A0"
                        : "#6A6560",
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
        </div>
        <div className="border border-white/5 bg-[#0c0c0c] p-4 font-mono text-[11px] leading-relaxed text-[var(--fg-dim)]">
          <div>
            <span className="text-[var(--fg-muted)]">import</span> traci, sumolib
          </div>
          <div className="mt-1">
            <span className="text-[var(--fg-muted)]">def</span>{" "}
            <span className="text-white/60">run_simulation</span>():
          </div>
          <div className="pl-3">traci.start(cmd)</div>
          <div className="pl-3">
            <span className="text-[var(--fg-muted)]">while</span> step(): collect()
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "hinge",
    num: "04",
    title: "HINGE MATCH-TO-MEET FUNNEL",
    category: "PRODUCT ANALYTICS",
    description:
      "Analyzed the complete user funnel from matches to meetups and ran A/B tests that increased LTV by 18%.",
    longDescription:
      "Analyzed the full user lifecycle on Hinge — from match to chat to date to meetup — identifying critical drop-off points. Designed and ran A/B tests that drove 18% LTV increase and 3× premium subscription likelihood.",
    tags: ["A/B Testing", "Funnel Analysis", "SQL", "Product Strategy"],
    metrics: [
      { label: "LTV Increase", value: "+18%" },
      { label: "Premium", value: "3×" },
      { label: "NPS", value: "+10" },
    ],
    image: "/project-hinge.jpg",
    content: (
      <div className="space-y-4">
        <div className="border border-white/5 bg-white/[0.02] p-4">
          <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
            CONVERSION FUNNEL
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
                className="flex items-center justify-between border-l-2 border-[var(--fg-dim)] bg-white/[0.02] px-4 py-2.5"
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
                  CONTROL
                </div>
                <div className="text-lg font-semibold text-[var(--fg-muted)]">
                  12.4%
                </div>
              </div>
              <div>
                <div className="font-mono text-[9px] text-white/50">
                  VARIANT
                </div>
                <div className="text-lg font-semibold text-white">14.6%</div>
              </div>
            </div>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-4">
            <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)]">
              IMPACT
            </p>
            <div className="space-y-1.5">
              {[
                { label: "LTV", value: "+18%" },
                { label: "Premium", value: "3×" },
                { label: "NPS", value: "+10" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between text-[13px]"
                >
                  <span className="text-[var(--fg-dim)]">{item.label}</span>
                  <span className="font-medium text-white">{item.value}</span>
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
            04 // WORK
          </p>
          <h2
            className="font-extrabold leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Systems
            <br />
            <span className="text-[var(--fg-muted)]">shipped.</span>
          </h2>
        </motion.div>

        {/* Project exhibits */}
        <div className="flex flex-col gap-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group/exhibit border-t border-white/5"
            >
              <div className="grid gap-6 py-10 sm:py-16 lg:grid-cols-[45%_55%] lg:gap-10">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-grayscale aspect-[16/10] w-full object-cover"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_80px_40px_var(--bg)]" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <p className="mb-3 font-mono text-[10px] tracking-[0.3em] text-[var(--fg-dim)]">
                    {project.num} {"//"} SYSTEM EXHIBIT
                  </p>
                  <h3
                    className="mb-4 font-extrabold leading-[0.95] tracking-[-0.03em] text-white"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="mb-6 max-w-[520px] text-sm font-light leading-relaxed tracking-wide text-[var(--fg-muted)]">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="mb-6 flex gap-6">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-lg font-semibold text-white">
                          {m.value}
                        </div>
                        <div className="mt-0.5 font-mono text-[9px] tracking-[0.15em] text-[var(--fg-dim)]">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] tracking-[0.1em] text-[var(--fg-dim)]"
                      >
                        {t}
                        {t !== project.tags[project.tags.length - 1] && " /"}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => setSelected(project)}
                      className="group/btn inline-flex items-baseline font-mono text-[10px] tracking-[0.2em] text-white transition-colors hover:text-gray-300"
                      data-cursor-hover="true"
                    >
                      [ VIEW DETAILS ]
                      <span className="btn-arrow ml-1 inline-block">↗</span>
                    </button>
                    <span className="font-mono text-[9px] tracking-wider text-[var(--fg-dim)]">
                      {project.tags[0]} / {project.tags[1]}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 border-t border-white/5 pt-8"
        >
          <a
            href="#contact"
            className="group/btn inline-flex items-baseline font-mono text-[10px] tracking-[0.2em] text-[var(--fg-dim)] transition-colors hover:text-[var(--fg-muted)]"
            data-cursor-hover="true"
          >
            WANT SOMETHING LIKE THIS? START A BUILD →
            <span className="btn-arrow ml-1 inline-block">↗</span>
          </a>
        </motion.div>
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
