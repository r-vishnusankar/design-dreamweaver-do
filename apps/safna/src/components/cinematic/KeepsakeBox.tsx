"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function KeepsakeBox({ closing = false, className }: { closing?: boolean; className?: string }) {
  return (
    <motion.div
      animate={{ scale: closing ? [1, 0.95, 1] : 1 }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative w-[min(70vw,320px)]", className)}
    >
      <motion.div
        animate={{ rotateX: closing ? -30 : 0 }}
        transition={{ duration: 1.5, delay: closing ? 1 : 0 }}
        className="relative h-8 rounded-t-sm origin-bottom"
        style={{
          background: "linear-gradient(180deg, #5C4F47 0%, #3d3229 100%)",
          transformStyle: "preserve-3d",
        }}
      />
      <div
        className="relative h-40 md:h-48 rounded-sm border border-brown-warm/30 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #4a3f36 0%, #2a221c 100%)",
          boxShadow: "inset 0 2px 20px rgba(0,0,0,0.4), 0 12px 40px rgba(0,0,0,0.3)",
        }}
      >
        {closing && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute inset-4 rounded-sm bg-warm-white/90 paper-texture shadow-inner"
          />
        )}
      </div>
      <div className="absolute -bottom-1 left-2 right-2 h-2 bg-black/20 blur-md rounded-full" />
    </motion.div>
  );
}
