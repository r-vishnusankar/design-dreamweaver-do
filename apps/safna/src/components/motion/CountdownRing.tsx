"use client";

import { motion } from "framer-motion";

interface CountdownRingProps {
  value: string;
  label: string;
}

export function CountdownRing({ value, label }: CountdownRingProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 md:w-28 md:h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100" aria-hidden>
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-sand" />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="283"
            strokeDashoffset="70"
            className="text-gold/50"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            key={value}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="font-heading text-3xl md:text-4xl font-light text-text-primary"
          >
            {value}
          </motion.span>
        </div>
      </div>
      <p className="font-body text-xs uppercase tracking-[0.2em] text-text-muted mt-3">{label}</p>
    </div>
  );
}
