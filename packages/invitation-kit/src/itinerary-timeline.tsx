import type { ItineraryEvent } from "@virtual-invite/types";

type ItineraryTimelineProps = {
  events: ItineraryEvent[];
};

export function ItineraryTimeline({ events }: ItineraryTimelineProps) {
  return (
    <div className="space-y-8 relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-outline-variant/30" />
      {events.map((event) => (
        <div key={event.title} className="flex gap-6 relative">
          <div
            className={
              event.accent
                ? "w-4 h-4 rounded-full bg-primary z-10 shrink-0 mt-1"
                : "w-4 h-4 rounded-full bg-tertiary-fixed-dim border-4 border-surface z-10 shrink-0 mt-1"
            }
          />
          <div>
            <p
              className={`text-[12px] font-semibold tracking-[0.15em] mb-1 ${
                event.accent ? "text-on-primary-fixed-variant" : "text-on-tertiary-container"
              }`}
            >
              {event.date}
            </p>
            <h4 className="font-display text-[18px] text-on-surface">{event.title}</h4>
            <p className="text-secondary text-base mt-1">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
