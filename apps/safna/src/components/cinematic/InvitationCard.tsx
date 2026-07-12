"use client";

import { WEDDING } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface InvitationCardProps {
  revealStage?: 0 | 1 | 2 | 3;
  compact?: boolean;
  className?: string;
}

export function InvitationCard({ revealStage = 3, compact = false, className }: InvitationCardProps) {
  return (
    <div
      className={cn(
        "text-center px-6 py-8 md:px-10 md:py-12",
        compact ? "text-sm" : "",
        className
      )}
    >
      <p className="font-body text-xs uppercase tracking-[0.35em] text-gold mb-4">
        {WEDDING.event.title}
      </p>

      {revealStage >= 1 && (
        <p className="font-accent text-3xl md:text-4xl text-gold mb-2">{WEDDING.bride.firstName}</p>
      )}

      {revealStage >= 2 && (
        <>
          <p className="font-body text-text-muted text-sm my-2">&amp;</p>
          <p className="font-accent text-2xl md:text-3xl text-gold-muted mb-4">
            {WEDDING.groom.firstName}
          </p>
          <p className="font-heading text-lg text-text-primary">{WEDDING.event.date}</p>
          <p className="font-body text-sm text-text-muted mt-1">{WEDDING.event.islamicDate}</p>
        </>
      )}

      {revealStage >= 3 && (
        <>
          <div className="w-16 h-px bg-gold/50 mx-auto my-6" />
          <p className="font-heading text-base text-text-secondary leading-relaxed">
            {WEDDING.venue.name}
          </p>
          <p className="font-body text-sm text-text-muted mt-1">{WEDDING.venue.address}</p>
          <p className="font-body text-sm text-text-secondary mt-4">{WEDDING.event.time}</p>
        </>
      )}
    </div>
  );
}
