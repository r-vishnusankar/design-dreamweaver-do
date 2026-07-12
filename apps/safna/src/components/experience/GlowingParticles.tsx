"use client";

import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: `${(i * 13) % 100}%`,
  y: `${(i * 17) % 100}%`,
  delay: i * 0.3,
  size: 2 + (i % 3),
}));

export function GlowingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gold/30 blur-[1px]"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 4 + (p.id % 3), delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
