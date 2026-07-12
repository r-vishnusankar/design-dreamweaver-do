"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { DURATION, EASING } from "@/lib/motion";

interface FadeRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeReveal({
  children,
  className,
  delay = 0,
  duration = DURATION.normal,
  direction = "up",
}: FadeRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const offset = { up: { y: 28 }, down: { y: -28 }, left: { x: 28 }, right: { x: -28 }, none: {} }[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration, delay, ease: EASING.enter }}
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
  const inView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${i}-${char}`}
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: delay + i * 0.025, ease: EASING.enter }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

interface ScrollSceneProps {
  id: string;
  sceneNumber: number;
  title: string;
  children: ReactNode;
  className?: string;
}

export function ScrollScene({ id, sceneNumber, title, children, className }: ScrollSceneProps) {
  return (
    <section
      id={id}
      data-scene={sceneNumber}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 md:px-12 lg:px-24 paper-texture",
        className
      )}
    >
      <FadeReveal className="text-center mb-12 md:mb-16">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-4">
          Scene {sceneNumber.toString().padStart(2, "0")}
        </p>
        <h2 id={`${id}-heading`} className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-text-primary">
          {title}
        </h2>
      </FadeReveal>
      {children}
    </section>
  );
}
