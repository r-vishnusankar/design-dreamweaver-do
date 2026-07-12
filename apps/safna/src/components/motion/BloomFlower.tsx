"use client";

import { motion } from "framer-motion";

export function BloomFlower({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative w-16 h-16 mx-auto mb-4"
      aria-hidden
    >
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <motion.div
          key={deg}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: deg / 2000, duration: 0.5 }}
          className="absolute left-1/2 top-1/2 w-3 h-5 -ml-1.5 -mt-4 bg-sage/60 rounded-full origin-bottom"
          style={{ transform: `rotate(${deg}deg) translateY(-12px)` }}
        />
      ))}
      <div className="absolute left-1/2 top-1/2 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-gold/70" />
    </motion.div>
  );
}
