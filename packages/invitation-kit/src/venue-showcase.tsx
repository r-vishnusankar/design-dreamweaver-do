import type { InvitationConfig } from "@virtual-invite/types";

type VenueShowcaseProps = {
  config: InvitationConfig;
  mapImage?: string;
};

/**
 * Venue block that looks fully interactive (map, address, CTA buttons)
 * but map links and buttons are intentionally not clickable (demo / preview safe).
 */
export function VenueShowcase({ config, mapImage }: VenueShowcaseProps) {
  if (!config.venue) return null;

  const { name, location, note } = config.venue;

  return (
    <section className="bg-surface-container-low py-20 md:py-[100px] px-5 md:px-16">
      <div className="max-w-xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container">
            The venue
          </p>
          <h2 className="font-display text-primary text-[36px] md:text-[44px] leading-tight">See you here</h2>
        </div>

        {/* Map looks live — not interactive */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-outline-variant/30 relative pointer-events-none select-none">
          <div className="aspect-[16/10] bg-surface-container relative">
            <img
              src={
                mapImage ??
                `https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80`
              }
              alt=""
              className="w-full h-full object-cover"
              draggable={false}
            />
            {/* Fake map chrome */}
            <div className="absolute top-3 left-3 rounded-md bg-surface/95 px-3 py-1.5 text-[11px] font-semibold text-on-surface shadow-sm flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 14 }}>
                open_in_new
              </span>
              Open in Maps
            </div>
            <div className="absolute bottom-3 left-3 rounded-md bg-surface/95 px-2.5 py-1.5 shadow-sm">
              <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: 18 }}>
                layers
              </span>
            </div>
            {/* Pin */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
              <span className="material-symbols-outlined filled text-primary drop-shadow-lg" style={{ fontSize: 42 }}>
                location_on
              </span>
            </div>
          </div>
        </div>

        {/* Address card — active look, not a link */}
        <div
          className="glass-card rounded-2xl p-6 md:p-8 shadow-md pointer-events-none select-none"
          aria-disabled="true"
        >
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-[#4285F4] shrink-0" style={{ fontSize: 28 }}>
              location_on
            </span>
            <div>
              <h3 className="font-display text-primary text-[22px] leading-tight">{name}</h3>
              <p className="mt-2 text-on-surface-variant text-[14px] leading-relaxed whitespace-pre-line">
                {location}
              </p>
              {note && (
                <p className="mt-3 text-[13px] text-on-surface-variant/80 font-light italic">{note}</p>
              )}
            </div>
          </div>
        </div>

        {/* Buttons look active — not clickable */}
        <div className="flex flex-col gap-3 pointer-events-none select-none" aria-hidden="true">
          <div className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-surface border border-outline-variant text-on-surface text-[12px] font-semibold tracking-[0.15em] uppercase shadow-sm">
            Open in Google Maps
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
              open_in_new
            </span>
          </div>
          <div className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-on-tertiary-container text-primary text-[12px] font-semibold tracking-[0.15em] uppercase shadow-sm">
            Get directions
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
              near_me
            </span>
          </div>
        </div>

        <p className="text-center text-[11px] text-on-surface-variant/60 font-light tracking-wide">
          Preview — map actions are shown for design only
        </p>
      </div>
    </section>
  );
}
