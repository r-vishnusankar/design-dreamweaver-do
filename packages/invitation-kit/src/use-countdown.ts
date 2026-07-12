import { useEffect, useState } from "react";

export function useCountdown(target: number) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remaining = now === null ? 0 : Math.max(0, target - now);
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const mins = Math.floor((remaining % 3600000) / 60000);
  const secs = Math.floor((remaining % 60000) / 1000);
  const fmt = (n: number) => (now === null ? "—" : String(n).padStart(2, "0"));

  return {
    days: fmt(days),
    hours: fmt(hours),
    mins: fmt(mins),
    secs: fmt(secs),
  };
}
