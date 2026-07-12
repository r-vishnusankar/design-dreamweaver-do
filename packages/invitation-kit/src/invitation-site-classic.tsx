import { useMemo, useState } from "react";
import type { InvitationConfig } from "@virtual-invite/types";
import { BasicRsvp } from "./basic-rsvp";
import { downloadCalendarIcs } from "./calendar";
import { CountdownDisplay } from "./countdown-display";
import { MusicToggle } from "./music-toggle";
import { SampleWatermark } from "./sample-watermark";

type InvitationSiteClassicProps = {
  config: InvitationConfig;
  studioUrl?: string;
};

const DEFAULT_HERO =
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=2400&q=85";
const DEFAULT_MAP =
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1800&q=80";

function splitNames(names: string) {
  const parts = names.split("&").map((p) => p.trim());
  return { first: parts[0] ?? names, second: parts[1] ?? "" };
}

function formatLongDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

/** Essential (₹999) editorial wedding invitation — countdown, parents, venue. */
export function InvitationSiteClassic({
  config,
  studioUrl = "https://thevirtualinvite.com",
}: InvitationSiteClassicProps) {
  const heroImage = config.heroImage ?? DEFAULT_HERO;
  const mapImage = config.mapImage ?? DEFAULT_MAP;
  const itinerary = config.itinerary ?? [];
  const { first, second } = splitNames(config.coupleOrHost.names);
  const [copied, setCopied] = useState(false);
  const parents = config.parents;

  const shareUrl =
    typeof window !== "undefined" ? window.location.origin + window.location.pathname : "";
  const shareText =
    config.whatsappShareText ??
    `You're invited to celebrate ${config.coupleOrHost.names}. ${shareUrl || ""}`.trim();

  const whatsappHref = useMemo(() => {
    const phone = config.whatsappNumber?.replace(/\D/g, "");
    const text = encodeURIComponent(shareText);
    if (phone) return `https://wa.me/${phone}?text=${text}`;
    return `https://wa.me/?text=${text}`;
  }, [config.whatsappNumber, shareText]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="sig-page font-body">
      <SampleWatermark />
      <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-10 py-5 pointer-events-none">
        <span className="pointer-events-auto font-display text-[1.05rem] tracking-[0.12em] text-[#f7f2ea]/mix-blend-difference">
          {first.charAt(0)}&{second.charAt(0)}
        </span>
        <div className="pointer-events-auto flex items-center gap-3">
          {config.musicUrl && <MusicToggle src={config.musicUrl} variant="hero" />}
        </div>
      </div>

      <main>
        {/* Hero — centered composition */}
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden text-center">
          <div className="absolute inset-0">
            <div className="sig-hero-media absolute inset-0" style={{ backgroundImage: `url('${heroImage}')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1614] via-[#1a1614]/65 to-[#1a1614]/35" />
          </div>

          <div className="relative z-10 px-5 md:px-10 py-28 w-full max-w-3xl mx-auto flex flex-col items-center">
            <p className="sig-fade-up sig-eyebrow text-[#c4a574]">Together with their families</p>

            {parents && (parents.sideA || parents.sideB) && (
              <div className="sig-fade-up mt-5 space-y-3 max-w-sm">
                {parents.sideA && (
                  <div>
                    {parents.sideA.label && (
                      <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[#f7f2ea]/45 mb-1">
                        {parents.sideA.label}
                      </p>
                    )}
                    <p className="text-[0.88rem] text-[#f7f2ea]/80 font-light leading-snug">
                      {parents.sideA.names}
                    </p>
                  </div>
                )}
                {parents.sideA && parents.sideB && (
                  <p className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c4a574]/70">&</p>
                )}
                {parents.sideB && (
                  <div>
                    {parents.sideB.label && (
                      <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[#f7f2ea]/45 mb-1">
                        {parents.sideB.label}
                      </p>
                    )}
                    <p className="text-[0.88rem] text-[#f7f2ea]/80 font-light leading-snug">
                      {parents.sideB.names}
                    </p>
                  </div>
                )}
              </div>
            )}

            <h1 className="sig-fade-up-delay mt-8 font-display text-[#f7f2ea] leading-[0.92] tracking-[-0.02em]">
              <span className="block text-[clamp(3.2rem,11vw,6.5rem)] font-light italic">{first}</span>
              <span className="block mt-2 text-[clamp(0.85rem,2vw,1.1rem)] tracking-[0.45em] uppercase font-normal text-[#c4a574]/90 not-italic">
                and
              </span>
              <span className="block mt-2 text-[clamp(3.2rem,11vw,6.5rem)] font-light italic">{second}</span>
            </h1>

            <div className="sig-fade-up-delay-2 mt-10 w-full flex flex-col items-center space-y-6">
              <div className="sig-rule" />
              <p className="text-[#f7f2ea]/85 text-[0.95rem] md:text-[1.05rem] font-light tracking-wide leading-relaxed">
                {formatLongDate(config.eventDate)}
                {config.venue ? ` · ${config.venue.name}` : ""}
              </p>
              <CountdownDisplay eventDate={config.eventDate} variant="onDark" align="center" />
            </div>
          </div>
        </section>

        {/* Invitation letter + parents restated */}
        <section className="sig-section">
          <div className="max-w-2xl mx-auto text-center">
            <p className="sig-eyebrow">The invitation</p>
            <div className="sig-rule mt-5 mb-10" />
            {config.quote && (
              <p className="font-display text-[clamp(1.4rem,3.2vw,1.9rem)] italic leading-[1.55] text-[var(--sig-ink)] font-light">
                {config.quote}
              </p>
            )}

            {parents && (
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10 text-left sm:text-center">
                {parents.sideA && (
                  <div>
                    <p className="sig-eyebrow mb-3">{parents.sideA.label ?? "Groom's family"}</p>
                    <p className="font-display text-[1.2rem] font-light text-[var(--sig-ink)] leading-snug">
                      {parents.sideA.names}
                    </p>
                  </div>
                )}
                {parents.sideB && (
                  <div>
                    <p className="sig-eyebrow mb-3">{parents.sideB.label ?? "Bride's family"}</p>
                    <p className="font-display text-[1.2rem] font-light text-[var(--sig-ink)] leading-snug">
                      {parents.sideB.names}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="mt-12 space-y-2">
              <p className="text-[0.95rem] text-[var(--sig-ink)] font-light">
                {formatLongDate(config.eventDate)} · {formatTime(config.eventDate)}
              </p>
              {config.venue && (
                <p className="text-[0.95rem] text-[var(--sig-ink-soft)] font-light">
                  {config.venue.name}, {config.venue.location.replace(/\n/g, ", ")}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => downloadCalendarIcs(config)}
              className="mt-10 inline-flex text-[0.7rem] tracking-[0.28em] uppercase text-[var(--sig-copper)] border-b border-[var(--sig-copper)]/50 pb-1 hover:text-[var(--sig-oxblood)] hover:border-[var(--sig-oxblood)] transition-colors"
            >
              Add to calendar
            </button>
          </div>
        </section>

        {/* Full itinerary */}
        {config.sections.includes("itinerary") && itinerary.length > 0 && (
          <section className="sig-section bg-[var(--sig-stone-deep)]/55">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <p className="sig-eyebrow">The weekend</p>
                <h2 className="font-display text-[clamp(2.2rem,5vw,3.2rem)] font-light mt-4 text-[var(--sig-oxblood)]">
                  Celebrations
                </h2>
                <p className="mt-4 text-[var(--sig-ink-soft)] font-light max-w-md mx-auto leading-relaxed">
                  Every moment of the weekend, so you know where to be — and when.
                </p>
              </div>
              <ol>
                {itinerary.map((event, i) => (
                  <li
                    key={event.title}
                    className="grid grid-cols-1 md:grid-cols-[7.5rem_1fr] gap-2 md:gap-10 py-8 border-t border-[rgba(92,18,40,0.12)] last:border-b"
                  >
                    <p
                      className={`text-[0.72rem] tracking-[0.18em] uppercase pt-1 ${
                        event.accent ? "text-[var(--sig-oxblood)] font-medium" : "text-[var(--sig-ink-soft)]"
                      }`}
                    >
                      {event.date}
                    </p>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-[0.85rem] text-[var(--sig-copper)] tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-[1.45rem] md:text-[1.7rem] font-light text-[var(--sig-ink)]">
                          {event.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-[0.98rem] text-[var(--sig-ink-soft)] leading-relaxed max-w-lg">
                        {event.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* Venue */}
        {config.sections.includes("map") && config.venue && (
          <section className="relative min-h-[85svh] flex items-end overflow-hidden">
            <img src={mapImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1614] via-[#1a1614]/55 to-[#1a1614]/25" />
            <div className="relative z-10 w-full px-5 md:px-12 pb-14 md:pb-20 pt-40 text-center md:text-left">
              <p className="sig-eyebrow text-[#c4a574]">The destination</p>
              <h2 className="font-display text-[clamp(2.4rem,6vw,4rem)] font-light text-[#f7f2ea] mt-3 max-w-xl md:max-w-none leading-[1.05] mx-auto md:mx-0">
                {config.venue.name}
              </h2>
              <p className="mt-4 text-[#f7f2ea]/75 whitespace-pre-line max-w-sm mx-auto md:mx-0 leading-relaxed font-light">
                {config.venue.location}
              </p>
              {config.venue.note && (
                <p className="mt-4 text-[#c4a574]/90 text-[0.88rem] font-light max-w-md mx-auto md:mx-0 leading-relaxed">
                  {config.venue.note}
                </p>
              )}
              {config.venue.mapsUrl && (
                <a
                  href={config.venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 text-[0.7rem] tracking-[0.28em] uppercase text-[#c4a574] border-b border-[#c4a574]/50 pb-1 hover:text-[#f7f2ea] hover:border-[#f7f2ea] transition-colors"
                >
                  Open in Maps
                </a>
              )}
            </div>
          </section>
        )}

        {/* Guest guide — dress, stay, travel */}
        {(config.dressCode || config.stayNote || config.travelNote) && (
          <section className="sig-section">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <p className="sig-eyebrow">For our guests</p>
                <h2 className="font-display text-[clamp(2.2rem,5vw,3rem)] font-light mt-4 text-[var(--sig-oxblood)]">
                  Everything you need
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {config.dressCode && (
                  <div className="text-center md:text-left">
                    <p className="sig-eyebrow mb-4">Dress code</p>
                    <p className="font-display text-[1.25rem] font-light text-[var(--sig-ink)] leading-snug">
                      {config.dressCode}
                    </p>
                  </div>
                )}
                {config.stayNote && (
                  <div className="text-center md:text-left">
                    <p className="sig-eyebrow mb-4">Stay</p>
                    <p className="text-[0.95rem] text-[var(--sig-ink-soft)] font-light leading-relaxed">
                      {config.stayNote}
                    </p>
                  </div>
                )}
                {config.travelNote && (
                  <div className="text-center md:text-left">
                    <p className="sig-eyebrow mb-4">Travel</p>
                    <p className="text-[0.95rem] text-[var(--sig-ink-soft)] font-light leading-relaxed">
                      {config.travelNote}
                    </p>
                  </div>
                )}
              </div>
              {config.contactHosts && (
                <p className="mt-12 text-center text-[0.88rem] text-[var(--sig-ink-soft)] font-light italic">
                  {config.contactHosts}
                </p>
              )}
            </div>
          </section>
        )}

        {/* RSVP */}
        {config.sections.includes("rsvp") && (
          <section className="sig-section bg-[var(--sig-stone-deep)]/40">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-12">
                <p className="sig-eyebrow">Kindly reply</p>
                <h2 className="font-display text-[clamp(2.2rem,5vw,3rem)] font-light mt-4 text-[var(--sig-oxblood)]">
                  Will you join us?
                </h2>
                <p className="mt-4 text-[var(--sig-ink-soft)] font-light">
                  Please respond by 1 October 2026
                </p>
              </div>
              <BasicRsvp coupleNames={config.coupleOrHost.names} />
            </div>
          </section>
        )}

        {/* Share — Signature+ */}
        {(config.whatsappNumber || config.packageTier !== "essential") && (
          <section className="sig-section">
            <div className="max-w-md mx-auto text-center">
              <p className="sig-eyebrow">Pass it on</p>
              <p className="mt-4 font-display text-[1.35rem] font-light text-[var(--sig-ink)] italic">
                Share this invitation with family
              </p>
              <div className="mt-8 space-y-3">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="sig-btn">
                  Share on WhatsApp
                </a>
                <button type="button" onClick={copyLink} className="sig-btn-ghost">
                  {copied ? "Link copied" : "Copy invite link"}
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Closing */}
        <section className="sig-section pt-0 text-center">
          <div className="sig-rule mb-10" />
          <p className="font-display text-[clamp(1.8rem,4vw,2.4rem)] font-light italic text-[var(--sig-oxblood)]">
            We cannot wait to celebrate with you
          </p>
          <p className="mt-6 text-[0.72rem] tracking-[0.28em] uppercase text-[var(--sig-copper)]">
            {config.coupleOrHost.names}
          </p>
          <p className="mt-3 text-[0.9rem] text-[var(--sig-ink-soft)] font-light">
            {formatLongDate(config.eventDate)}
          </p>
        </section>
      </main>

      <footer className="px-5 py-10 text-center border-t border-[rgba(92,18,40,0.08)]">
        <a
          href={studioUrl}
          className="inline-block text-[0.62rem] tracking-[0.3em] uppercase text-[var(--sig-ink-soft)] hover:text-[var(--sig-oxblood)] transition-colors"
        >
          The Virtual Invite
        </a>
      </footer>
    </div>
  );
}
