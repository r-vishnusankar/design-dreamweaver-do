"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DURATION, EASING } from "@/lib/motion";

interface PaperFoldProps {
  direction?: "unfold" | "fold";
  onComplete?: () => void;
  children: React.ReactNode;
  className?: string;
}

export function PaperFold({ direction = "unfold", onComplete, children, className }: PaperFoldProps) {
  const stages = [0, 1, 2];

  return (
    <div className={cn("relative perspective-[1200px]", className)} style={{ perspective: 1200 }}>
      <motion.div
        initial={{ rotateY: direction === "unfold" ? -90 : 0, opacity: direction === "unfold" ? 0.3 : 1 }}
        animate={{ rotateY: direction === "unfold" ? 0 : -90, opacity: 1 }}
        transition={{
          duration: DURATION.unfold * 3,
          ease: EASING.fold,
          times: [0, 0.33, 0.66, 1],
        }}
        onAnimationComplete={onComplete}
        className="relative preserve-3d origin-left"
        style={{ transformStyle: "preserve-3d" }}
      >
        {stages.map((s) => (
          <motion.div
            key={s}
            initial={{ rotateY: direction === "unfold" ? -75 : 0 }}
            animate={{ rotateY: 0 }}
            transition={{
              delay: s * (DURATION.unfold + DURATION.hold),
              duration: DURATION.unfold,
              ease: EASING.fold,
            }}
            className="absolute inset-0"
            style={{ transformOrigin: `${(s + 1) * 33}% center` }}
          />
        ))}
        <div className="relative bg-warm-white border border-sand/70 shadow-envelope rounded-sm overflow-hidden paper-texture">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
