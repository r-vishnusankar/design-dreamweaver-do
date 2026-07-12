"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FlowerParticles({ count = 6 }: { count?: number }) {
  const [flowers, setFlowers] = useState<{ id: number; x: number; delay: number }[]>([]);

  useEffect(() => {
    setFlowers(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: 15 + Math.random() * 70,
        delay: i * 0.35,
      }))
    );
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <AnimatePresence>
        {flowers.map((f) => (
          <motion.div
            key={f.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ delay: f.delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute w-4 h-4 rounded-full bg-sage/50"
            style={{ left: `${f.x}%`, top: `${20 + f.id * 8}%` }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
