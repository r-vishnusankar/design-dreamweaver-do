import { useCountdown } from "./use-countdown";

type CountdownDisplayProps = {
  eventDate: string;
  variant?: "onDark" | "onLight";
  align?: "start" | "center";
};

export function CountdownDisplay({
  eventDate,
  variant = "onDark",
  align = "center",
}: CountdownDisplayProps) {
  const target = new Date(eventDate).getTime();
  const { days, hours, mins, secs } = useCountdown(target);
  const onDark = variant === "onDark";

  return (
    <div
      className={`flex gap-5 md:gap-10 items-end ${align === "center" ? "justify-center" : "justify-start"}`}
    >
      {[
        { value: days, label: "Days" },
        { value: hours, label: "Hours" },
        { value: mins, label: "Mins" },
        { value: secs, label: "Secs" },
      ].map((unit) => (
        <div
          key={unit.label}
          className={`flex flex-col min-w-[2.75rem] ${align === "center" ? "items-center" : "items-start"}`}
        >
          <span
            className={`font-display text-[1.85rem] md:text-[2.4rem] leading-none tabular-nums font-light ${
              onDark ? "text-[#f7f2ea]" : "text-[var(--sig-oxblood)]"
            }`}
          >
            {unit.value}
          </span>
          <span
            className={`mt-2 text-[0.58rem] tracking-[0.28em] uppercase ${
              onDark ? "text-[#f7f2ea]/55" : "text-[var(--sig-ink-soft)]"
            }`}
          >
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
