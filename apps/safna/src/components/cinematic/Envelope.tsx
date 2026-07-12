"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { WaxSeal } from "./WaxSeal";

interface EnvelopeProps {
  state?: "closed" | "open" | "empty";
  showSeal?: boolean;
  onSealClick?: () => void;
  sealBreaking?: boolean;
  className?: string;
}

/**
 * Split-door invitation: faces the screen fully, seal centered.
 * On open, the left panel swings left and the right panel swings right,
 * revealing a warm glow and the couple's monogram inside.
 */
export function Envelope({
  state = "closed",
  showSeal = true,
  onSealClick,
  sealBreaking = false,
  className,
}: EnvelopeProps) {
  const isOpen = state === "open" || state === "empty";

  const doorFace = "linear-gradient(160deg, #F9F5EE 0%, #F1E9DC 55%, #E7DCC9 100%)";
  const doorEdge = "inset 0 0 0 1px rgba(196,169,98,0.18)";

  return (
    <motion.div
      animate={state === "closed" ? { scale: [1, 1.006, 1] } : { scale: 1 }}
      transition={{ duration: 6, repeat: state === "closed" ? Infinity : 0, ease: "easeInOut" }}
      className={cn(
        "relative w-[min(90vw,420px)] md:w-[min(60vw,480px)] aspect-[4/5]",
        className
      )}
      style={{ perspective: 1400 }}
    >
      {/* ── Inside of the invitation (revealed when doors open) ── */}
      <div
        className="absolute inset-0 rounded-sm overflow-hidden"
        style={{
          background: "linear-gradient(170deg, #FFFDF8 0%, #FAF3E6 60%, #F3E9D7 100%)",
          boxShadow: "0 24px 60px rgba(44,40,37,0.25), 0 6px 16px rgba(44,40,37,0.12)",
        }}
      >
        {/* Warm glow from within */}
        <motion.div
          animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.7 }}
          transition={{ duration: 1, delay: isOpen ? 0.35 : 0 }}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at center, rgba(196,169,98,0.4) 0%, rgba(196,169,98,0.12) 45%, transparent 75%)",
          }}
        />

        {/* Monogram inside */}
        <motion.div
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 16 }}
          transition={{ duration: 0.9, delay: isOpen ? 0.55 : 0 }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        >
          <span className="font-accent text-5xl md:text-6xl text-gold drop-shadow-sm">S &amp; J</span>
          <span className="h-px w-16 bg-gold/50" />
          <span className="font-body text-[10px] uppercase tracking-[0.35em] text-brown-warm/70">
            16 · 08 · 2026
          </span>
        </motion.div>

        {/* Fine inner border */}
        <div className="absolute inset-3 border border-gold/20 rounded-sm pointer-events-none" />
      </div>

      {/* ── Left door ── */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 origin-left z-10"
        style={{ transformStyle: "preserve-3d" }}
        initial={false}
        animate={{ rotateY: isOpen ? -105 : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: isOpen ? 0.1 : 0 }}
      >
        <div
          className="absolute inset-0 rounded-l-sm"
          style={{
            background: doorFace,
            boxShadow: `${doorEdge}, 6px 0 18px rgba(44,40,37,0.10)`,
            backfaceVisibility: "hidden",
          }}
        >
          {/* Decorative corner flourishes */}
          <div className="absolute top-4 left-4 h-8 w-8 border-t border-l border-gold/30" />
          <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-gold/30" />
        </div>
        {/* Door back face */}
        <div
          className="absolute inset-0 rounded-l-sm"
          style={{
            background: "linear-gradient(160deg, #EDE3D2 0%, #E2D5BF 100%)",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>

      {/* ── Right door ── */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 origin-right z-10"
        style={{ transformStyle: "preserve-3d" }}
        initial={false}
        animate={{ rotateY: isOpen ? 105 : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: isOpen ? 0.1 : 0 }}
      >
        <div
          className="absolute inset-0 rounded-r-sm"
          style={{
            background: doorFace,
            boxShadow: `${doorEdge}, -6px 0 18px rgba(44,40,37,0.10)`,
            backfaceVisibility: "hidden",
          }}
        >
          <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-gold/30" />
          <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-gold/30" />
        </div>
        <div
          className="absolute inset-0 rounded-r-sm"
          style={{
            background: "linear-gradient(160deg, #EDE3D2 0%, #E2D5BF 100%)",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>

      {/* Center seam line (closed only) */}
      <motion.div
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-y-3 left-1/2 w-px -translate-x-1/2 bg-brown-warm/15 z-10 pointer-events-none"
      />

      {/* Wax seal — centered on the seam */}
      {showSeal && state === "closed" && (
        <WaxSeal
          onClick={onSealClick}
          breaking={sealBreaking}
          className="!top-1/2 z-20"
        />
      )}

      {/* Seal-break burst */}
      {sealBreaking && (
        <motion.div
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 2.4, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/45 blur-md pointer-events-none z-20"
        />
      )}
    </motion.div>
  );
}
