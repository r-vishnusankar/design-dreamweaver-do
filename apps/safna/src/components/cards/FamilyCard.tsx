"use client";

import { FadeReveal } from "@/components/motion/FadeReveal";
import { cn } from "@/lib/utils";

export function FamilyCard({
  title,
  father,
  mother,
  house,
  address,
  align = "left",
  delay = 0,
}: {
  title: string;
  father: string;
  mother: string;
  house: string;
  address: string[];
  align?: "left" | "right";
  delay?: number;
}) {
  return (
    <FadeReveal delay={delay} direction={align === "left" ? "left" : "right"}>
      <div className={cn("premium-card h-full", align === "right" ? "md:text-right" : "md:text-left", "text-center")}>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-6">{title}</p>
        <p className="font-heading text-2xl text-text-primary">{father}</p>
        <p className="font-heading text-2xl text-text-primary">&amp;</p>
        <p className="font-heading text-2xl text-text-primary mb-6">{mother}</p>
        <div className={cn("w-16 h-px bg-gold/50 mb-6", align === "right" ? "md:ml-auto" : "md:mr-auto", "mx-auto")} />
        <p className="font-body text-text-secondary text-sm leading-relaxed">
          {house}
          <br />
          {address.join(", ")}
        </p>
      </div>
    </FadeReveal>
  );
}
