"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";
import { ChapterWrapper, FadeIn } from "@/components/ui/motion";

export function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <ChapterWrapper id="gallery" chapterNumber={8} chapterTitle="Gallery">
      <p className="chapter-subtitle text-center mx-auto mb-16">
        Moments captured in light and grace
      </p>

      <div className="max-w-6xl mx-auto w-full relative min-h-[600px]">
        {GALLERY_IMAGES.map((image, i) => {
          const positions = [
            "top-0 left-[5%] w-48 md:w-56",
            "top-20 right-[8%] w-44 md:w-52",
            "top-[45%] left-[15%] w-52 md:w-60",
            "bottom-10 right-[12%] w-48 md:w-56",
            "bottom-32 left-[40%] w-40 md:w-48",
          ];

          return (
            <FadeIn key={image.src} delay={i * 0.15}>
              <motion.button
                whileHover={{ scale: 1.03, zIndex: 10 }}
                className={`absolute ${positions[i]} group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50`}
                onClick={() => setSelected(i)}
                aria-label={`View ${image.caption}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-lg border border-sand/40">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="240px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="absolute bottom-3 left-3 font-body text-xs text-warm-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.caption}
                  </p>
                </div>
              </motion.button>
            </FadeIn>
          );
        })}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-text-primary/80 backdrop-blur-md p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-3xl w-full aspect-[3/4] md:aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[selected].src}
                alt={GALLERY_IMAGES[selected].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-warm-white/90 hover:bg-warm-white transition-colors"
                aria-label="Close gallery image"
              >
                <X className="w-5 h-5 text-text-primary" />
              </button>
              <p className="absolute bottom-4 left-4 font-body text-warm-white text-sm">
                {GALLERY_IMAGES[selected].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ChapterWrapper>
  );
}
