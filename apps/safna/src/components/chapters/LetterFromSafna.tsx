"use client";

import { LETTER_FROM_SAFNA } from "@/lib/constants";
import { ChapterWrapper, FadeIn } from "@/components/ui/motion";

export function LetterFromSafna() {
  const paragraphs = LETTER_FROM_SAFNA.split("\n\n");

  return (
    <ChapterWrapper id="letter" chapterNumber={2} chapterTitle="A Letter from Us">
      <div className="max-w-2xl mx-auto">
        <FadeIn blur>
          <div className="premium-card relative">
            <div className="absolute top-0 left-8 w-px h-full bg-gold/20 hidden md:block" />
            <div className="space-y-6 font-body text-text-secondary text-base md:text-lg leading-relaxed font-light">
              {paragraphs.map((para, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <p className={i === paragraphs.length - 1 ? "font-accent text-2xl text-gold mt-8" : ""}>
                    {para}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </ChapterWrapper>
  );
}
