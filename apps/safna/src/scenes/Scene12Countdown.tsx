"use client";

import { ScrollScene } from "@/components/motion/FadeReveal";
import { CountdownRing } from "@/components/motion/CountdownRing";
import { useCountdown } from "@/hooks/useCountdown";

export default function Scene12Countdown() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <ScrollScene id="countdown" sceneNumber={12} title="Countdown" className="bg-champagne/20">
      <p className="font-body text-xs uppercase tracking-[0.3em] text-gold text-center mb-2">Insha Allah</p>
      <p className="font-heading text-xl text-text-secondary text-center mb-16 font-light">
        The blessed day draws near
      </p>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        <CountdownRing value={days} label="Days" />
        <CountdownRing value={hours} label="Hours" />
        <CountdownRing value={minutes} label="Minutes" />
        <CountdownRing value={seconds} label="Seconds" />
      </div>
    </ScrollScene>
  );
}
