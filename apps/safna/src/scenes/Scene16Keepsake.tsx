"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { WoodTable } from "@/components/cinematic/WoodTable";
import { KeepsakeBox } from "@/components/cinematic/KeepsakeBox";
import { ScrollScene } from "@/components/motion/FadeReveal";

export default function Scene16Keepsake() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="keepsake" data-scene={16} ref={ref} className="relative min-h-screen">
      <WoodTable>
        <div className="flex flex-col items-center gap-8 px-6 text-center z-10">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-warm-white/50 mb-4">
            Scene 16 — Keepsake
          </p>
          <KeepsakeBox closing={inView} />
          <p className="font-heading text-warm-white/70 text-lg font-light italic max-w-md">
            An invitation to cherish — today, and for all the years to come.
          </p>
        </div>
      </WoodTable>
    </section>
  );
}
