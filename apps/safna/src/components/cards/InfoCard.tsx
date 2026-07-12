"use client";

import { Calendar, Clock, MapPin, Sparkles, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeReveal } from "@/components/motion/FadeReveal";

export function InfoCard({
  icon: Icon,
  label,
  primary,
  secondary,
  delay = 0,
}: {
  icon: LucideIcon;
  label: string;
  primary: string;
  secondary?: string;
  delay?: number;
}) {
  return (
    <FadeReveal delay={delay}>
      <div
        className={cn(
          "premium-card h-full transition-all duration-500",
          "hover:-translate-y-0.5 hover:shadow-lifted hover:border-gold/30"
        )}
      >
        <Icon className="w-5 h-5 text-gold mb-4" strokeWidth={1.5} />
        <p className="font-body text-xs uppercase tracking-[0.2em] text-text-muted mb-3">{label}</p>
        <p className="font-heading text-xl text-text-primary">{primary}</p>
        {secondary && <p className="font-body text-sm text-text-secondary mt-2">{secondary}</p>}
      </div>
    </FadeReveal>
  );
}

export { Calendar, Clock, MapPin, Sparkles };
