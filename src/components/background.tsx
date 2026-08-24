"use client";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Gradient blobs */}
      <div
        className="animate-blob absolute left-[15%] top-[20%] h-[500px] w-[500px] rounded-full opacity-[0.035]"
        style={{
          background:
            "radial-gradient(circle, #38BDF8 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="animate-blob-delayed absolute right-[10%] top-[50%] h-[400px] w-[400px] rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, #10B981 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="animate-blob absolute bottom-[10%] left-[40%] h-[350px] w-[350px] rounded-full opacity-[0.025]"
        style={{
          background:
            "radial-gradient(circle, #A78BFA 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] to-transparent" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}
