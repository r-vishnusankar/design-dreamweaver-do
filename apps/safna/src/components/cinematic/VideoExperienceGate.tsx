"use client";

import { motion } from "framer-motion";
import { OPENING_QUOTE } from "@/lib/constants";
import { JasminePetals } from "@/components/effects/JasminePetals";
import { Button } from "@/components/ui/button";
import { EASING } from "@/lib/motion";

interface VideoExperienceGateProps {
  onBegin: () => void;
  onSkip: () => void;
}

export function VideoExperienceGate({ onBegin, onSkip }: VideoExperienceGateProps) {
  return (
    <motion.div
      key="video-gate"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ivory"
    >
      <JasminePetals count={10} active />

      <div className="relative z-10 mx-auto max-w-lg px-8 text-center">
        <motion.p
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: EASING.luxury }}
          className="font-accent text-2xl italic leading-relaxed text-text-primary md:text-3xl"
        >
          {OPENING_QUOTE}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 font-body text-sm uppercase tracking-[0.3em] text-gold"
        >
          From Her Heart
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <Button size="lg" onClick={onBegin} className="min-w-[220px]">
            Begin the Experience
          </Button>
          <button
            type="button"
            onClick={onSkip}
            className="font-body text-xs uppercase tracking-widest text-text-muted transition-colors hover:text-text-secondary"
          >
            Skip to details
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
