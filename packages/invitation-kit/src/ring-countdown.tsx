import { useEffect, useState } from "react";

type RingCountdownProps = {
  eventDate: string;
};

const CIRC = 2 * Math.PI * 46;

export function RingCountdown({ eventDate }: RingCountdownProps) {
  const [parts, setParts] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date(eventDate).getTime();
    const tick = () => {
      const ms = Math.max(0, target - Date.now());
      setParts({
        d: Math.floor(ms / 864e5),
        h: Math.floor(ms / 36e5) % 24,
        m: Math.floor(ms / 6e4) % 60,
        s: Math.floor(ms / 1e3) % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [eventDate]);

  const rings = [
    { value: parts.d, label: "Days", frac: Math.min(1, parts.d / 365) },
    { value: parts.h, label: "Hours", frac: parts.h / 24 },
    { value: parts.m, label: "Mins", frac: parts.m / 60 },
    { value: parts.s, label: "Secs", frac: parts.s / 60 },
  ];

  return (
    <div className="rings">
      {rings.map((r) => (
        <div key={r.label} className="ring">
          <svg viewBox="0 0 100 100">
            <circle className="tr" cx="50" cy="50" r="46" strokeDasharray={CIRC} />
            <circle
              className="pr"
              cx="50"
              cy="50"
              r="46"
              strokeDasharray={CIRC}
              strokeDashoffset={CIRC * (1 - r.frac)}
            />
          </svg>
          <div className="num">{r.label === "Days" ? r.value : String(r.value).padStart(2, "0")}</div>
          <div className="unt">{r.label}</div>
        </div>
      ))}
    </div>
  );
}
