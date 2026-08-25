"use client";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Subtle vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_80px_var(--bg)]" />
    </div>
  );
}
