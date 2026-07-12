"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export function JasminePetals({ count = 12, active = true }: { count?: number; active?: boolean }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    if (!active) return;
    setPetals(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 12 + Math.random() * 8,
        size: 6 + Math.random() * 8,
        rotation: Math.random() * 360,
      }))
    );
  }, [count, active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
      <AnimatePresence>
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            className="absolute opacity-40"
            style={{
              left: `${petal.x}%`,
              width: petal.size,
              height: petal.size,
              background: "radial-gradient(ellipse, #F5F0E8 30%, #E8DFD0 70%)",
              borderRadius: "50% 0 50% 50%",
              transform: `rotate(${petal.rotation}deg)`,
            }}
            initial={{ y: "-5vh", opacity: 0 }}
            animate={{
              y: "110vh",
              opacity: [0, 0.5, 0.5, 0],
              rotate: petal.rotation + 180,
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
