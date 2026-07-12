import type { InvitationConfig } from "@virtual-invite/types";
import { formatEventDateLong, formatEventTimeRange } from "./calendar";
import { RingCountdown } from "./ring-countdown";
import { SampleWatermark } from "./sample-watermark";
import { VisitActions, WeddingCard } from "./wedding-card";

type InvitationSiteProps = {
  config: InvitationConfig;
  studioUrl?: string;
};

function StarDivider() {
  return (
    <div className="star-div" aria-hidden>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".7">
        <path d="M12 1l2.5 6.1L20 4.9l-2.2 5.6L24 12l-6.2 1.5L20 19.1l-5.5-2.2L12 23l-2.5-6.1L4 19.1l2.2-5.6L0 12l6.2-1.5L4 4.9l5.5 2.2z" />
      </svg>
    </div>
  );
}

function splitCouple(names: string) {
  const parts = names.split("&").map((p) => p.trim());
  return { first: parts[0] ?? names, second: parts[1] ?? "" };
}

export function InvitationSite({ config, studioUrl = "https://thevirtualinvite.com" }: InvitationSiteProps) {
  const { first, second } = splitCouple(config.coupleOrHost.names);
  const storyMoments =
    config.itinerary?.map((e) => ({ title: e.title, body: e.description })) ??
    [
      { title: "A Prayer", body: "Long before their paths crossed, two families were asking for the same thing." },
      { title: "Meeting", body: "The first hello — brief, gentle, and somehow unforgettable." },
      { title: "Forever", body: "And now — a beginning we would love for you to witness." },
    ];

  const whatsappHref = config.whatsappNumber
    ? `https://wa.me/${config.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
        config.whatsappShareText ?? `RSVP for ${config.coupleOrHost.names}`,
      )}`
    : undefined;

  return (
    <div className="invite-page font-body">
      <SampleWatermark />
      <div className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-5 py-4 pointer-events-none">
        <span className="font-script text-[1.4rem] text-[var(--gold)] pointer-events-auto">
          {first.charAt(0)} &amp; {second.charAt(0)}
        </span>
        <a
          href={studioUrl}
          className="pointer-events-auto text-[0.6rem] font-medium tracking-[0.26em] uppercase px-4 py-2 rounded-full border border-[var(--champagne)] bg-[rgba(250,247,240,0.85)] text-[var(--ink-soft)] backdrop-blur-sm hover:text-[var(--gold)] hover:border-[var(--gold-soft)] transition-colors"
        >
          Studio
        </a>
      </div>

      {/* Hero */}
      <section className="min-h-[100svh] flex flex-col items-center justify-center text-center px-5 pt-24 pb-16">
        <div className="w-[min(220px,55vw)] aspect-[3/4] rounded-sm border border-[var(--champagne)] bg-[var(--warm-white)] p-2 shadow-[0_24px_60px_-30px_rgba(64,56,42,0.3)] mb-8 overflow-hidden">
          {config.heroImage ? (
            <img src={config.heroImage} alt="" className="w-full h-full object-cover rounded-[1px]" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[0.55rem] tracking-[0.28em] uppercase text-[var(--ink-soft)] bg-gradient-to-br from-[var(--sand)] to-[var(--champagne)]">
              Portrait
            </div>
          )}
        </div>
        <p className="eyebrow">Join us for the celebration</p>
        <h1 className="font-script text-[clamp(2.8rem,10vw,4.5rem)] text-[var(--ink)] leading-none">{first}</h1>
        <p className="mt-2 font-display text-[1.1rem] tracking-[0.2em] uppercase text-[var(--gold)]">
          &amp; {second}
        </p>

        {config.parents && (
          <div className="mt-8 max-w-sm space-y-3">
            {config.parents.sideB && (
              <div>
                <p className="text-[0.58rem] tracking-[0.24em] uppercase text-[var(--ink-soft)]">
                  {config.parents.sideB.label ?? "Daughter of"}
                </p>
                <p className="font-display text-[1rem] text-[var(--ink-mid)] mt-1">{config.parents.sideB.names}</p>
              </div>
            )}
            {config.parents.sideA && (
              <div>
                <p className="text-[0.58rem] tracking-[0.24em] uppercase text-[var(--ink-soft)]">
                  {config.parents.sideA.label ?? "Son of"}
                </p>
                <p className="font-display text-[1rem] text-[var(--ink-mid)] mt-1">{config.parents.sideA.names}</p>
              </div>
            )}
          </div>
        )}

        <p className="mt-6 max-w-md font-display italic text-[1.1rem] text-[var(--ink-mid)] leading-[1.85]">
          {config.quote ??
            "With hearts full of gratitude, we joyfully invite you to share in the blessings of our celebration."}
        </p>
        <div className="mt-10">
          <RingCountdown eventDate={config.eventDate} />
          <p className="mt-6 font-display italic text-[1.05rem] text-[var(--ink-soft)]">
            {formatEventDateLong(config.eventDate)}
            {config.venue ? ` · ${config.venue.name}` : ""}
          </p>
        </div>
      </section>

      <StarDivider />

      {/* Story */}
      <section className="ch">
        <div className="ch-head">
          <span className="eyebrow">Their Story</span>
          <h2>Written Long Before They Met</h2>
        </div>
        <div className="timeline">
          {storyMoments.map((m) => (
            <div key={m.title} className="moment">
              <span className="node" />
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <StarDivider />

      {/* Celebration details */}
      <section className="ch">
        <div className="ch-head">
          <span className="eyebrow">The Celebration</span>
          <h2>{config.coupleOrHost.displayTitle}</h2>
        </div>
        <div className="details-grid max-w-3xl mx-auto">
          <div className="d-cell">
            <div className="lbl">Day</div>
            <div className="val">
              {new Date(config.eventDate).toLocaleDateString("en-IN", { weekday: "long" })}
            </div>
            <div className="sub">A blessed gathering</div>
          </div>
          <div className="d-cell">
            <div className="lbl">Date</div>
            <div className="val">
              {new Date(config.eventDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <div className="sub">Save the date</div>
          </div>
          <div className="d-cell">
            <div className="lbl">Time</div>
            <div className="val">{formatEventTimeRange(config.eventDate, config.eventEndDate)}</div>
            <div className="sub">Indian Standard Time</div>
          </div>
          <div className="d-cell">
            <div className="lbl">Attire</div>
            <div className="val">{config.dressCode ?? "Elegant Traditional"}</div>
            <div className="sub">Soft, festive tones welcome</div>
          </div>
        </div>
      </section>

      {/* Venue */}
      {config.venue && (
        <>
          <StarDivider />
          <section className="ch">
            <div className="ch-head">
              <span className="eyebrow">The Venue</span>
              <h2>{config.venue.name}</h2>
            </div>
            <div className="invite-card-surface max-w-lg mx-auto p-6 md:p-8">
              <div className="h-[180px] rounded overflow-hidden border border-[var(--champagne)] mb-5 relative pointer-events-none select-none">
                <img
                  src={
                    config.mapImage ??
                    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                  }
                  alt=""
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute top-3 left-3 rounded-md bg-[var(--warm-white)]/95 px-3 py-1.5 text-[0.65rem] font-medium text-[var(--ink)] shadow-sm">
                  Open in Maps
                </div>
              </div>
              <div className="text-center pointer-events-none select-none">
                <p className="font-display text-[1.5rem] text-[var(--ink)]">{config.venue.name}</p>
                <p className="mt-1 text-[0.9rem] text-[var(--ink-soft)] whitespace-pre-line">{config.venue.location}</p>
                {config.venue.note && (
                  <p className="mt-3 text-[0.84rem] text-[var(--ink-soft)] italic">{config.venue.note}</p>
                )}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Finale — wedding card + actions fit one viewport */}
      <StarDivider />
      <section className="invite-finale" id="save-the-card">
        <div className="invite-finale-head">
          <span className="eyebrow !mb-2">With Gratitude</span>
          <h2>We really hope you can be there with us.</h2>
        </div>

        <WeddingCard config={config} />
        <VisitActions config={config} whatsappHref={whatsappHref} />

        <div className="invite-finale-close">
          <div className="star-div !py-2" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".7">
              <path d="M12 1l2.5 6.1L20 4.9l-2.2 5.6L24 12l-6.2 1.5L20 19.1l-5.5-2.2L12 23l-2.5-6.1L4 19.1l2.2-5.6L0 12l6.2-1.5L4 4.9l5.5 2.2z" />
            </svg>
          </div>
          <p>Thank you — for coming, for praying, for being part of this.</p>
          <p className="invite-finale-sign">With love, {first}</p>
        </div>
      </section>

      <footer className="pb-6 pt-1 text-center text-[0.55rem] tracking-[0.3em] uppercase text-[var(--ink-soft)] opacity-55">
        The Virtual Invite
      </footer>
    </div>
  );
}

export { RingCountdown } from "./ring-countdown";
export { downloadCalendarIcs, buildCalendarIcs } from "./calendar";
export { VisitCard } from "./visit-card";
export { VenueShowcase } from "./venue-showcase";
export { WeddingCard, VisitActions } from "./wedding-card";
export { CountdownDisplay } from "./countdown-display";
export { ItineraryTimeline } from "./itinerary-timeline";
export { QRGrid } from "./qr-grid";
export { useCountdown } from "./use-countdown";
