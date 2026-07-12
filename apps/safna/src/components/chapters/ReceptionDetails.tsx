"use client";

import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { WEDDING } from "@/lib/constants";
import { ChapterWrapper, FadeIn } from "@/components/ui/motion";

const details = [
  {
    icon: Calendar,
    label: "Date",
    primary: WEDDING.event.date,
    secondary: WEDDING.event.islamicDate,
  },
  {
    icon: Clock,
    label: "Time",
    primary: WEDDING.event.time,
    secondary: WEDDING.event.timezone,
  },
  {
    icon: MapPin,
    label: "Venue",
    primary: WEDDING.venue.name,
    secondary: WEDDING.venue.address,
  },
  {
    icon: Sparkles,
    label: "Occasion",
    primary: WEDDING.event.title,
    secondary: "Family & loved ones warmly welcomed",
  },
];

export function ReceptionDetails() {
  return (
    <ChapterWrapper
      id="details"
      chapterNumber={5}
      chapterTitle="Reception Details"
      className="bg-sage-muted/10"
    >
      <p className="chapter-subtitle text-center mx-auto mb-16">
        Everything you need to know for this blessed celebration
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {details.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.1}>
            <div className="premium-card h-full group hover:border-gold/30 transition-colors duration-500">
              <item.icon className="w-5 h-5 text-gold mb-4" strokeWidth={1.5} />
              <p className="font-body text-xs uppercase tracking-[0.2em] text-text-muted mb-3">
                {item.label}
              </p>
              <p className="font-heading text-xl text-text-primary">{item.primary}</p>
              <p className="font-body text-sm text-text-secondary mt-2">{item.secondary}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5} className="mt-12 text-center">
        <p className="font-body text-sm text-text-muted">
          Dress code: {WEDDING.event.dressCode}
        </p>
      </FadeIn>
    </ChapterWrapper>
  );
}
