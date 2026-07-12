"use client";

import { LOVE_JOURNEY, WEDDING } from "@/lib/constants";
import { ScrollScene, FadeReveal } from "@/components/motion/FadeReveal";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Scene09LoveJourney() {
  return (
    <ScrollScene id="journey" sceneNumber={9} title="Love Journey" className="bg-champagne/20">
      <p className="font-body text-text-secondary text-center max-w-xl mx-auto mb-16 font-light">
        An emotional path — not marked by dates, but by moments that mattered
      </p>

      <div className="max-w-lg mx-auto relative w-full">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />
        <div className="space-y-12">
          {LOVE_JOURNEY.map((step, i) => (
            <FadeReveal key={step.title} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`flex items-center gap-6 flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 text-center ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="font-heading text-2xl text-text-primary">{step.title}</h3>
                  <p className="font-body text-sm text-text-muted mt-2">{step.description}</p>
                </div>
                <div className="w-14 h-14 rounded-full bg-warm-white border border-gold/30 flex items-center justify-center text-xl shadow-sm z-10">
                  {step.icon}
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            </FadeReveal>
          ))}
        </div>
      </div>

      <FadeReveal delay={0.5} className="mt-16 text-center">
        <p className="font-body text-sm text-text-muted mb-4">Share this invitation with family</p>
        <Button variant="outline" asChild>
          <a href={WEDDING.groom.siteUrl} target="_blank" rel="noopener noreferrer">
            Visit arjunandmeera.com <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </FadeReveal>
    </ScrollScene>
  );
}
