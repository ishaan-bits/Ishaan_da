export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/5 py-8 sm:mt-40">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:pl-24 md:pr-16">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-[9px] tracking-wider text-[var(--fg-dim)] sm:text-[10px]">
            © 2026 ISHAAN PARIMAL — INDIA · REMOTE-FIRST
          </p>
          <p className="font-mono text-[9px] tracking-wider text-[var(--fg-dim)] sm:text-[10px]">
            DESIGNED WITH DATA, BUILT WITH CURIOSITY.
          </p>
        </div>
      </div>
    </footer>
  );
}
