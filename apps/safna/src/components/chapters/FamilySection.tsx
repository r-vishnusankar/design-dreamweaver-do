"use client";

import { WEDDING } from "@/lib/constants";
import { ChapterWrapper, FadeIn } from "@/components/ui/motion";

export function FamilySection() {
  return (
    <ChapterWrapper
      id="family"
      chapterNumber={7}
      chapterTitle="Family"
      className="bg-champagne/20"
    >
      <p className="chapter-subtitle text-center mx-auto mb-16">
        Two families, one celebration — united by love and the grace of Allah
      </p>

      <div className="max-w-4xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12">
        <FadeIn direction="left">
          <div className="premium-card h-full text-center md:text-left">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Bride&apos;s Family
            </p>
            <p className="font-heading text-2xl text-text-primary">
              {WEDDING.brideFamily.father}
            </p>
            <p className="font-heading text-2xl text-text-primary">&amp;</p>
            <p className="font-heading text-2xl text-text-primary mb-6">
              {WEDDING.brideFamily.mother}
            </p>
            <div className="gold-divider md:mx-0" />
            <p className="font-body text-text-secondary text-sm leading-relaxed">
              {WEDDING.brideFamily.house}
              <br />
              {WEDDING.brideFamily.address.join(", ")}
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="right">
          <div className="premium-card h-full text-center md:text-left">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Groom&apos;s Family
            </p>
            <p className="font-heading text-2xl text-text-primary">
              {WEDDING.groomFamily.father}
            </p>
            <p className="font-heading text-2xl text-text-primary">&amp;</p>
            <p className="font-heading text-2xl text-text-primary mb-6">
              {WEDDING.groomFamily.mother}
            </p>
            <div className="gold-divider md:mx-0" />
            <p className="font-body text-text-secondary text-sm leading-relaxed">
              {WEDDING.groomFamily.house}
              <br />
              {WEDDING.groomFamily.address.join(", ")}
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.4} className="mt-16 text-center">
        <p className="font-heading text-xl md:text-2xl font-light text-text-primary italic max-w-2xl mx-auto">
          From Nenmara to Akkikavu — two homes, one blessed union. We welcome you
          with open hearts.
        </p>
      </FadeIn>
    </ChapterWrapper>
  );
}
