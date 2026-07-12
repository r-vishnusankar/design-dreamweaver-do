"use client";

import { WEDDING } from "@/lib/constants";
import { ScrollScene } from "@/components/motion/FadeReveal";
import { InfoCard, Calendar, Clock, MapPin, Sparkles } from "@/components/cards/InfoCard";

export default function Scene11Reception() {
  return (
    <ScrollScene id="reception" sceneNumber={11} title="Reception Details" className="bg-sage-muted/10">
      <p className="font-body text-text-secondary text-center max-w-xl mx-auto mb-16 font-light">
        Everything you need for this blessed celebration
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        <InfoCard icon={Calendar} label="Date" primary={WEDDING.event.date} secondary={WEDDING.event.islamicDate} />
        <InfoCard icon={Clock} label="Time" primary={WEDDING.event.time} secondary={WEDDING.event.timezone} delay={0.1} />
        <InfoCard icon={MapPin} label="Venue" primary={WEDDING.venue.name} secondary={WEDDING.venue.address} delay={0.2} />
        <InfoCard icon={Sparkles} label="Occasion" primary={WEDDING.event.title} secondary="Family warmly welcomed" delay={0.3} />
      </div>

      <p className="font-body text-sm text-text-muted text-center mt-12">
        Dress code: {WEDDING.event.dressCode}
      </p>
    </ScrollScene>
  );
}
