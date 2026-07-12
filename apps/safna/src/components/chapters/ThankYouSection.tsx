"use client";

import { WEDDING } from "@/lib/constants";
import { FadeIn } from "@/components/ui/motion";
import { WeddingSeal } from "@/components/effects/WeddingSeal";
import { GeometricPattern } from "@/components/effects/GeometricPattern";

export function ThankYouSection() {
  return (
    <section
      id="thanks"
      className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-ivory to-champagne/30"
    >
      <GeometricPattern />

      <div className="relative z-10 text-center max-w-2xl">
        <FadeIn>
          <p className="chapter-label">Chapter 11</p>
          <h2 className="chapter-title mb-8">Thank You</h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-body text-text-secondary text-lg font-light leading-relaxed mb-8">
            Your presence, your prayers, and your love mean more to us than words
            can express. We look forward to sharing this blessed day with you.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="gold-divider" />
          <p className="font-accent text-4xl md:text-5xl text-gold my-8">
            {WEDDING.bride.firstName} &amp; {WEDDING.groom.firstName}
          </p>
          <p className="font-body text-sm text-text-muted">
            {WEDDING.event.day} · {WEDDING.event.dateShort} · {WEDDING.venue.name}
          </p>
        </FadeIn>

        <FadeIn delay={0.6} className="mt-12">
          <WeddingSeal />
          <p className="font-body text-xs text-text-muted mt-8">
            With best compliments from Dear &amp; Near
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
