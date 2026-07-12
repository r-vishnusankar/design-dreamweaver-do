"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OPENING_QUOTE } from "@/lib/constants";
import { JasminePetals } from "@/components/effects/JasminePetals";

interface OpeningExperienceProps {
  onComplete: () => void;
  skip?: boolean;
}

export function OpeningExperience({ onComplete, skip = false }: OpeningExperienceProps) {
  const [phase, setPhase] = useState<"quote" | "unfold" | "done">(skip ? "done" : "quote");

  useEffect(() => {
    if (skip) {
      onComplete();
      return;
    }
    const t1 = setTimeout(() => setPhase("unfold"), 3500);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 5500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete, skip]);

  if (skip || phase === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="fixed inset-0 z-[90] bg-ivory flex items-center justify-center overflow-hidden"
      >
        <JasminePetals count={8} active={phase === "quote"} />

        <div className="relative z-10 text-center px-8 max-w-lg">
          {phase === "quote" && (
            <motion.blockquote
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-accent text-2xl md:text-3xl lg:text-4xl text-text-primary leading-relaxed italic"
            >
              &ldquo;{OPENING_QUOTE}&rdquo;
            </motion.blockquote>
          )}

          {phase === "unfold" && (
            <motion.div
              initial={{ scaleY: 0.3, opacity: 0, rotateX: -15 }}
              animate={{ scaleY: 1, opacity: 1, rotateX: 0 }}
              transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
              style={{ transformOrigin: "top center", perspective: 1000 }}
            >
              <div className="premium-card border-gold/20 shadow-lg">
                <p className="font-body text-xs uppercase tracking-[0.4em] text-gold mb-4">
                  Wedding Reception
                </p>
                <p className="font-accent text-4xl text-gold">Meera Malhotra</p>
                <div className="gold-divider" />
                <p className="font-body text-text-secondary text-sm">
                  An invitation, from her heart
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
