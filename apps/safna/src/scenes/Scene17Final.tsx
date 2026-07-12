"use client";

import { WEDDING, HIDDEN_DUA, HIDDEN_DUA_TRANSLATION } from "@/lib/constants";
import { FadeReveal } from "@/components/motion/FadeReveal";
import { WeddingSeal } from "@/components/effects/WeddingSeal";

export default function Scene17Final() {
  return (
    <section
      id="final"
      data-scene={17}
      className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-ivory to-champagne/40 paper-texture"
    >
      <FadeReveal className="text-center max-w-2xl">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-6">Scene 17</p>
        <p className="font-accent text-4xl md:text-6xl text-gold mb-6">
          {WEDDING.bride.firstName} &amp; {WEDDING.groom.firstName}
        </p>
        <div className="w-16 h-px bg-gold/50 mx-auto mb-8" />
        <p className="font-body text-text-secondary mb-2">
          {WEDDING.event.day} · {WEDDING.event.dateShort}
        </p>
        <p className="font-body text-text-muted mb-10">{WEDDING.venue.name}, Thrissur</p>
        <p className="font-heading text-xl text-text-primary italic mb-12">
          Jazakum Allahu Khairan
        </p>
        <WeddingSeal />
        <p className="font-body text-xs text-text-muted mt-8">
          With best compliments from Dear &amp; Near
        </p>
        <p className="font-body text-[10px] text-text-muted/50 mt-6 sr-only focus:not-sr-only" tabIndex={0}>
          {HIDDEN_DUA} — {HIDDEN_DUA_TRANSLATION}
        </p>
      </FadeReveal>
    </section>
  );
}
