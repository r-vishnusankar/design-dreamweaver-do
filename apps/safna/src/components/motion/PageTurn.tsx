"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types/scene";
import { EASING } from "@/lib/motion";

interface PageTurnProps {
  images: readonly GalleryImage[];
  index: number;
  onChange: (index: number) => void;
}

export function PageTurn({ images, index, onChange }: PageTurnProps) {
  const image = images[index];

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="relative aspect-[3/4] perspective-[1200px]" style={{ perspective: 1200 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ rotateY: 15, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -15, opacity: 0 }}
            transition={{ duration: 0.7, ease: EASING.luxury }}
            className="relative w-full h-full rounded-sm overflow-hidden shadow-lifted border border-sand/60"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-sand/80 to-transparent z-10 rounded-bl-sm" />
            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="512px" />
            <div className="absolute inset-0 bg-gradient-to-t from-text-primary/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 font-subheading italic text-warm-white text-sm">
              {image.caption}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, index - 1))}
          disabled={index === 0}
          className="p-2 rounded-full border border-sand/60 disabled:opacity-30 hover:border-gold/50 transition-colors"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-5 h-5 text-text-secondary" />
        </button>
        <div className="flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onChange(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-gold" : "bg-sand"}`}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => onChange(Math.min(images.length - 1, index + 1))}
          disabled={index === images.length - 1}
          className="p-2 rounded-full border border-sand/60 disabled:opacity-30 hover:border-gold/50 transition-colors"
          aria-label="Next photo"
        >
          <ChevronRight className="w-5 h-5 text-text-secondary" />
        </button>
      </div>
    </div>
  );
}
