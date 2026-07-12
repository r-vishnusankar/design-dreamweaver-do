"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASING } from "@/lib/motion";

interface WaxSealProps {
  onClick?: () => void;
  breaking?: boolean;
  className?: string;
}

export function WaxSeal({ onClick, breaking = false, className }: WaxSealProps) {
  const sharedProps = {
    animate: breaking
      ? { scale: [1, 1.1, 0], opacity: [1, 1, 0], rotate: [0, 5, -5] }
      : { scale: [1, 1.02, 1] },
    transition: breaking
      ? { duration: 0.8 }
      : { duration: 6, repeat: Infinity, ease: EASING.breathe },
    className: cn(
      "absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 z-20",
      "w-14 h-14 md:w-16 md:h-16 rounded-full",
      "bg-gradient-to-br from-gold via-gold-muted to-gold",
      "border-2 border-gold/80 shadow-lg",
      "flex items-center justify-center",
      onClick ? "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60" : "pointer-events-none",
      className
    ),
  };

  const content = (
    <>
      <span className="font-accent text-warm-white text-xl md:text-2xl drop-shadow">S</span>
      {!breaking && <div className="absolute inset-0 rounded-full border border-warm-white/20" />}
    </>
  );

  if (onClick) {
    return (
      <motion.button type="button" onClick={onClick} whileHover={{ scale: 1.06, filter: "brightness(1.1)" }} {...sharedProps} aria-label="Tap the seal to open the invitation">
        {content}
      </motion.button>
    );
  }

  return (
    <motion.div {...sharedProps} aria-hidden>
      {content}
    </motion.div>
  );
}
