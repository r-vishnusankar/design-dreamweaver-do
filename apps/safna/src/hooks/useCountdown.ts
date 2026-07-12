"use client";

import { useEffect, useState } from "react";
import { WEDDING } from "@/lib/constants";
import { formatCountdownValue } from "@/lib/utils";

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = WEDDING.countdownTarget.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return {
    days: formatCountdownValue(timeLeft.days),
    hours: formatCountdownValue(timeLeft.hours),
    minutes: formatCountdownValue(timeLeft.minutes),
    seconds: formatCountdownValue(timeLeft.seconds),
  };
}
