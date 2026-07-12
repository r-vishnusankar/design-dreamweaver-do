"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HIDDEN_DUA, HIDDEN_DUA_TRANSLATION } from "@/lib/constants";

export function WeddingSeal() {
  const [showBloom, setShowBloom] = useState(false);
  const [showDua, setShowDua] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePressStart = () => {
    timerRef.current = setTimeout(() => {
      setShowBloom(true);
      setTimeout(() => setShowDua(true), 800);
    }, 1500);
  };

  const handlePressEnd = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <div className="relative">
      <motion.button
        onMouseDown={handlePressStart}
        onMouseUp={handlePressEnd}
        onMouseLeave={handlePressEnd}
        onTouchStart={handlePressStart}
        onTouchEnd={handlePressEnd}
        whileHover={{ scale: 1.05 }}
        className="w-16 h-16 rounded-full border-2 border-gold/50 flex items-center justify-center bg-champagne/50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        aria-label="Wedding seal — long press for a hidden blessing"
      >
        <span className="font-accent text-gold text-xl">S</span>
      </motion.button>

      <AnimatePresence>
        {showBloom && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: 1,
                  x: Math.cos((i * Math.PI * 2) / 8) * 40,
                  y: Math.sin((i * Math.PI * 2) / 8) * 40,
                  opacity: [1, 0],
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute w-3 h-3 rounded-full bg-sage/60"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDua && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 text-center"
          >
            <p className="font-heading text-lg text-gold leading-relaxed" dir="rtl">
              {HIDDEN_DUA}
            </p>
            <p className="font-body text-xs text-text-muted mt-2 italic">
              {HIDDEN_DUA_TRANSLATION}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
