"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Globe } from "lucide-react";

const roles = [
  "Data Analyst",
  "SQL Specialist",
  "Tableau Developer",
  "Product Analytics",
];

function ParticlesBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        x: ((i * 37 + 13) % 100),
        y: ((i * 53 + 7) % 100),
        size: (i % 3) + 1,
        duration: 15 + (i % 10),
        delay: i % 8,
        drift: (i % 5) * 4 - 8,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan/30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, p.drift, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function FloatingDashboard() {
  return (
    <div className="relative h-[400px] w-full md:h-[500px]">
      {/* KPI Card */}
      <motion.div
        className="animate-float absolute right-4 top-4 w-40 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-xl md:right-8 md:top-8 md:w-48"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="mb-2 text-xs text-white/40">Total Revenue</div>
        <div className="text-2xl font-bold text-white">$2.4M</div>
        <div className="mt-1 text-xs text-emerald">+12.5%</div>
      </motion.div>

      {/* SQL Icon Card */}
      <motion.div
        className="animate-float-delayed absolute left-0 top-28 w-36 rounded-2xl border border-cyan/20 bg-cyan/5 p-4 backdrop-blur-xl md:left-4 md:top-36 md:w-40"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <div className="mb-2 text-2xl">🔍</div>
        <div className="text-sm font-medium text-white/80">PostgreSQL</div>
        <div className="mt-1 font-mono text-xs text-cyan">SELECT * FROM</div>
      </motion.div>

      {/* Line Chart Card */}
      <motion.div
        className="animate-float-slow absolute bottom-16 left-8 w-56 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-xl md:bottom-20 md:left-12 md:w-64"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <div className="mb-3 text-xs text-white/40">Monthly Trend</div>
        <svg viewBox="0 0 200 60" className="w-full">
          <motion.path
            d="M0,50 Q25,45 50,35 T100,20 T150,25 T200,10"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />
          <motion.path
            d="M0,50 Q25,45 50,35 T100,20 T150,25 T200,10 L200,60 L0,60 Z"
            fill="url(#lineGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 2 }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Python Icon Card */}
      <motion.div
        className="animate-float absolute bottom-4 right-8 w-36 rounded-2xl border border-emerald/20 bg-emerald/5 p-4 backdrop-blur-xl md:bottom-8 md:right-4 md:w-40"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <div className="mb-2 text-2xl">🐍</div>
        <div className="text-sm font-medium text-white/80">Python</div>
        <div className="mt-1 font-mono text-xs text-emerald">import pandas</div>
      </motion.div>

      {/* Bar Chart Card */}
      <motion.div
        className="animate-float-delayed absolute right-0 top-[45%] w-44 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-xl md:right-12 md:w-48"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <div className="mb-3 text-xs text-white/40">Conversion Rate</div>
        <div className="flex h-16 items-end gap-1.5">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-cyan/60 to-cyan/20"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.6, delay: 1.5 + i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Tableau Icon Card */}
      <motion.div
        className="animate-float-slow absolute bottom-[40%] left-2 w-32 rounded-2xl border border-purple-400/20 bg-purple-400/5 p-4 backdrop-blur-xl md:bottom-[45%] md:left-0 md:w-36"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="mb-2 text-2xl">📊</div>
        <div className="text-sm font-medium text-white/80">Tableau</div>
        <div className="mt-1 text-xs text-purple-300/60">Dashboard</div>
      </motion.div>
    </div>
  );
}

function TypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      startTransition(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      });
    } else {
      timeout = setTimeout(
        () => {
          startTransition(() => {
            setDisplayText(
              isDeleting
                ? currentRole.slice(0, displayText.length - 1)
                : currentRole.slice(0, displayText.length + 1)
            );
          });
        },
        isDeleting ? 30 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, isPending, startTransition]);

  return (
    <span className="font-mono text-lg text-white/60">
      {displayText}
      <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-cyan" />
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <ParticlesBackground />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Gradient blobs */}
      <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-cyan/[0.03] blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald/[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-24 md:grid-cols-2 md:pt-0">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs text-white/50 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
              Available for opportunities
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              ISHAAN
              <br />
              <span className="text-gradient">PARIMAL</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-10"
          >
            <TypingAnimation />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-md text-base leading-relaxed text-white/40"
          >
            Transforming complex datasets into actionable business decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-cyan px-6 py-3 text-sm font-medium text-[#09090B] transition-all hover:bg-cyan/90 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
            >
              View Projects
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/70 backdrop-blur-sm transition-all hover:border-white/20 hover:text-white"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-3 pt-2"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/40 backdrop-blur-sm transition-all hover:border-cyan/30 hover:text-cyan"
            >
              <Globe size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/40 backdrop-blur-sm transition-all hover:border-cyan/30 hover:text-cyan"
            >
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right - Floating Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:block"
        >
          <FloatingDashboard />
        </motion.div>
      </div>
    </section>
  );
}
