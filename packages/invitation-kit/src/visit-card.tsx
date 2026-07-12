import type { InvitationConfig } from "@virtual-invite/types";
import { downloadCalendarIcs, formatEventDateLong, formatEventTimeRange } from "./calendar";

type VisitCardProps = {
  config: InvitationConfig;
};

/** Live calendar download + visit details. Location looks active but is not a link. */
export function VisitCard({ config }: VisitCardProps) {
  const venueLine = config.venue
    ? `${config.venue.name}, ${config.venue.location.replace(/\n/g, ", ")}`
    : "Venue to be announced";

  return (
    <section className="py-20 md:py-28 px-5 md:px-16 bg-surface">
      <div className="max-w-lg mx-auto text-center space-y-8">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container">
            With gratitude
          </p>
          <p className="font-display italic text-on-surface-variant text-[17px]">
            We really hope you can be there with us.
          </p>
          <div className="relative py-4">
            <div className="h-px bg-outline-variant/40 w-full" />
            <div className="divider-diamond" />
          </div>
          <h2 className="font-display text-primary text-[40px] md:text-[48px] leading-tight">
            {config.coupleOrHost.names}
          </h2>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 text-left space-y-5 shadow-[0px_4px_24px_rgba(31,31,31,0.06)]">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-on-tertiary-container text-center">
            For your visit
          </p>
          <div className="text-center space-y-2">
            <p className="font-display text-primary text-[22px]">{config.coupleOrHost.names}</p>
            <p className="text-on-surface text-[15px]">{formatEventDateLong(config.eventDate)}</p>
            <p className="text-on-surface-variant text-[14px] font-light">
              {formatEventTimeRange(config.eventDate, config.eventEndDate)}
            </p>
          </div>

          {/* Looks active — not clickable */}
          <div
            className="flex items-start gap-3 justify-center pt-2 pointer-events-none select-none"
            aria-disabled="true"
          >
            <span className="material-symbols-outlined text-on-tertiary-container mt-0.5" style={{ fontSize: 20 }}>
              location_on
            </span>
            <p className="text-[14px] text-primary font-medium leading-relaxed max-w-sm text-left underline decoration-on-tertiary-container/40 underline-offset-4">
              {venueLine}
            </p>
          </div>

          <p className="text-center text-[13px] text-on-surface-variant font-light italic pt-2">
            Screenshot this card, save the date, or send us a quick RSVP.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <button
            type="button"
            onClick={() => downloadCalendarIcs(config)}
            className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full bg-on-tertiary-container text-primary text-[12px] font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity shadow-md"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
              calendar_month
            </span>
            Add to calendar
          </button>

          {/* Looks like WhatsApp RSVP — demo only, not linked */}
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full border-2 border-on-tertiary-container text-on-tertiary-container text-[12px] font-semibold tracking-[0.2em] uppercase opacity-90 cursor-default pointer-events-none"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
              chat
            </span>
            WhatsApp RSVP
          </button>
        </div>
      </div>
    </section>
  );
}
