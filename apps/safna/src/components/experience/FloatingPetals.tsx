"use client";

import { motion } from "framer-motion";

const PETALS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 7.3) % 100}%`,
  delay: i * 0.4,
  duration: 12 + (i % 5) * 2,
  size: 6 + (i % 4) * 2,
  color: i % 3 === 0 ? "rgba(212, 165, 165, 0.5)" : i % 3 === 1 ? "rgba(184, 207, 224, 0.45)" : "rgba(232, 212, 208, 0.5)",
}));

export function FloatingPetals({ active = true }: { active?: boolean }) {
  if (!active) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {PETALS.map((petal) => (
        <motion.span
          key={petal.id}
          className="absolute rounded-full"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 1.4,
            background: petal.color,
            borderRadius: "50% 50% 50% 0",
          }}
          initial={{ y: "-10vh", opacity: 0, rotate: 0 }}
          animate={{ y: "110vh", opacity: [0, 0.7, 0.5, 0], rotate: 360 }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
