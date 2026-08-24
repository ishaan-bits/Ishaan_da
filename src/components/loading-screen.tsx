"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [queryText, setQueryText] = useState("");
  const fullQuery = "SELECT * FROM portfolio WHERE passion='analytics';";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullQuery.length) {
        setQueryText(fullQuery.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 600);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#09090B]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-cyan/10 blur-2xl animate-pulse-glow" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative font-mono text-sm md:text-base text-cyan/80"
              >
                <span className="text-emerald">&gt; </span>
                {queryText}
                <span className="inline-block w-[2px] h-4 bg-cyan ml-0.5 animate-pulse" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-1"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-cyan"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
