"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WEDDING } from "@/lib/constants";
import { formatCountdownValue } from "@/lib/utils";
import { ChapterWrapper, FadeIn } from "@/components/ui/motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function CircularCountdown({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 md:w-28 md:h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-sand"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="283"
            strokeDashoffset="70"
            className="text-gold/60"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            key={value}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl md:text-4xl font-light text-text-primary"
          >
            {value}
          </motion.span>
        </div>
      </div>
      <p className="font-body text-xs uppercase tracking-[0.2em] text-text-muted mt-3">
        {label}
      </p>
    </div>
  );
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculate = () => {
      const now = new Date();
      const diff = WEDDING.countdownTarget.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ChapterWrapper
      id="countdown"
      chapterNumber={9}
      chapterTitle="Countdown"
      className="bg-sage-muted/10"
    >
      <FadeIn>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-gold text-center mb-4">
          Insha Allah
        </p>
        <p className="font-heading text-xl text-text-secondary text-center mb-16 font-light">
          The blessed day draws near
        </p>
      </FadeIn>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        <CircularCountdown value={formatCountdownValue(timeLeft.days)} label="Days" />
        <CircularCountdown value={formatCountdownValue(timeLeft.hours)} label="Hours" />
        <CircularCountdown value={formatCountdownValue(timeLeft.minutes)} label="Minutes" />
        <CircularCountdown value={formatCountdownValue(timeLeft.seconds)} label="Seconds" />
      </div>
    </ChapterWrapper>
  );
}
