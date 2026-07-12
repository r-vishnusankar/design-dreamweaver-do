"use client";

import { JOURNEY_STEPS } from "@/lib/constants";
import { ChapterWrapper, FadeIn } from "@/components/ui/motion";

export function HerJourney() {
  return (
    <ChapterWrapper
      id="journey"
      chapterNumber={3}
      chapterTitle="Her Journey"
      className="bg-champagne/20"
    >
      <p className="chapter-subtitle text-center mx-auto mb-16">
        An emotional path — not marked by dates, but by moments that mattered
      </p>

      <div className="max-w-lg mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />

        <div className="space-y-12 md:space-y-16">
          {JOURNEY_STEPS.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div
                className={`flex items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:justify-between`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} text-center`}>
                  <h3 className="font-heading text-2xl text-text-primary">{step.title}</h3>
                  <p className="font-body text-sm text-text-muted mt-2">{step.description}</p>
                </div>

                <div className="relative z-10 w-14 h-14 rounded-full bg-warm-white border border-gold/30 flex items-center justify-center text-xl shadow-sm flex-shrink-0">
                  {step.icon}
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </ChapterWrapper>
  );
}
