"use client";

import { WEDDING } from "@/lib/constants";
import { ChapterWrapper, FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function TheirStory() {
  return (
    <ChapterWrapper id="story" chapterNumber={4} chapterTitle="Their Story">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="font-body text-text-secondary text-lg md:text-xl font-light leading-relaxed mb-8">
            Two souls, guided by faith and family, found in each other a home.
            From quiet conversations to shared dreams, their story is one of
            patience, prayer, and profound love.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center gap-6 my-12">
            <div className="text-center">
              <p className="font-accent text-3xl md:text-4xl text-gold">
                {WEDDING.bride.firstName}
              </p>
              <p className="font-body text-xs text-text-muted mt-1 uppercase tracking-widest">
                From Palakkad
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-px h-12 bg-gold/40" />
              <span className="font-body text-xs text-gold my-2">&amp;</span>
              <div className="w-px h-12 bg-gold/40" />
            </div>

            <div className="text-center">
              <p className="font-accent text-3xl md:text-4xl text-gold">
                {WEDDING.groom.firstName}
              </p>
              <p className="font-body text-xs text-text-muted mt-1 uppercase tracking-widest">
                From Thrissur
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="font-heading text-2xl md:text-3xl font-light text-text-primary italic mb-10">
            &ldquo;And among His signs is that He created for you mates from among
            yourselves, that you may dwell in tranquility.&rdquo;
          </p>
          <p className="font-body text-sm text-text-muted mb-10">
            — Qur&apos;an 30:21
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="font-body text-text-secondary text-sm mb-6">
            Celebrate with Arjun &amp; Meera — save the date and join us at Amanbagh
          </p>
          <Button variant="outline" asChild>
            <a
              href={WEDDING.groom.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Visit arjunandmeera.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </FadeIn>
      </div>
    </ChapterWrapper>
  );
}
