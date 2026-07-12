"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  blur?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.8,
  direction = "up",
  blur = false,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: blur ? "blur(8px)" : "blur(0px)",
        ...directionOffset[direction],
      }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", x: 0, y: 0 }
          : {
              opacity: 0,
              filter: blur ? "blur(8px)" : "blur(0px)",
              ...directionOffset[direction],
            }
      }
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface LetterRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function LetterReveal({ text, className, delay = 0 }: LetterRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.03,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

interface ChapterWrapperProps {
  id: string;
  chapterNumber: number;
  chapterTitle: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function ChapterWrapper({
  id,
  chapterNumber,
  chapterTitle,
  children,
  className,
  dark = false,
}: ChapterWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "chapter-container paper-texture",
        dark && "bg-text-primary text-warm-white",
        className
      )}
    >
      <FadeIn className="text-center mb-12 md:mb-16">
        <p className="chapter-label">
          Chapter {chapterNumber.toString().padStart(2, "0")}
        </p>
        <h2 id={`${id}-title`} className="chapter-title">
          {chapterTitle}
        </h2>
      </FadeIn>
      {children}
    </section>
  );
}
