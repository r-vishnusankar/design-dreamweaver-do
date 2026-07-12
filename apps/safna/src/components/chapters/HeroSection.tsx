"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WEDDING } from "@/lib/constants";
import { FadeIn, LetterReveal } from "@/components/ui/motion";
import { GeometricPattern } from "@/components/effects/GeometricPattern";

export function HeroSection() {
  return (
    <section
      id="welcome"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-champagne/30 via-ivory to-ivory"
    >
      <GeometricPattern />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20 text-center">
        <FadeIn delay={0.2}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-gold mb-8">
            ٱلسَّلَامُ عَلَيْكُمْ
          </p>
        </FadeIn>

        <FadeIn delay={0.4} blur>
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-10 rounded-full overflow-hidden border-2 border-gold/30 shadow-xl animate-float-slow">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80"
              alt="Meera Malhotra"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 192px, 256px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-champagne/20 to-transparent" />
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <h1 className="font-accent text-5xl md:text-7xl lg:text-8xl text-gold mb-4">
            <LetterReveal text={WEDDING.bride.firstName} delay={0.8} />
          </h1>
          <p className="font-heading text-xl md:text-2xl font-light text-text-primary tracking-wide">
            Latheef
          </p>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="gold-divider" />
          <p className="font-body text-sm uppercase tracking-[0.25em] text-text-muted mb-2">
            Daughter of
          </p>
          <p className="font-heading text-lg md:text-xl text-text-primary">
            {WEDDING.brideFamily.father}
          </p>
          <p className="font-heading text-lg md:text-xl text-text-primary">
            {WEDDING.brideFamily.mother}
          </p>
        </FadeIn>

        <FadeIn delay={1.2}>
          <p className="font-body text-text-secondary text-base md:text-lg font-light mt-10 max-w-xl mx-auto leading-relaxed">
            Cordially invites your esteemed presence and blessings with family on the
            auspicious occasion of her wedding reception.
          </p>
        </FadeIn>

        <FadeIn delay={1.4}>
          <div className="mt-12 flex flex-col items-center gap-2">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-gold">
              {WEDDING.event.day}
            </p>
            <p className="font-heading text-5xl md:text-6xl font-light text-text-primary">
              {WEDDING.event.dayNumber}
            </p>
            <p className="font-heading text-xl text-text-secondary">
              {WEDDING.event.month} · {WEDDING.event.year}
            </p>
            <p className="font-body text-sm text-text-muted mt-2">
              {WEDDING.event.islamicDate}
            </p>
          </div>
        </FadeIn>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs uppercase tracking-[0.3em] text-text-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
