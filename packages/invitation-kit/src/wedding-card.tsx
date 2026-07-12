import type { InvitationConfig } from "@virtual-invite/types";
import { downloadCalendarIcs, formatEventDateLong, formatEventTimeRange } from "./calendar";

type WeddingCardProps = {
  config: InvitationConfig;
  /** Optional host / closing signature line */
  signedBy?: string;
};

function splitCouple(names: string) {
  const parts = names.split("&").map((p) => p.trim());
  return { brideOrFirst: parts[0] ?? names, groomOrSecond: parts[1] ?? "" };
}

/**
 * Screenshot-ready paper wedding card — designed to look like a printed invite.
 * Keep actions (calendar / RSVP) outside this node so screenshots stay clean.
 */
export function WeddingCard({ config }: WeddingCardProps) {
  const { brideOrFirst, groomOrSecond } = splitCouple(config.coupleOrHost.names);
  const venueLine = config.venue
    ? `${config.venue.name}, ${config.venue.location.replace(/\n/g, ", ")}`
    : "Venue to be announced";

  return (
    <article className="wedding-card" id="wedding-card">
      <div className="wedding-card-inner">
        <p className="wedding-card-eyebrow">Wedding Invitation</p>

        <div className="wedding-card-ornament" aria-hidden>
          <span />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l1.8 5.4L19 9.2l-5.2 1.8L12 16.4l-1.8-5.4L5 9.2l5.2-1.8L12 2z" />
          </svg>
          <span />
        </div>

        {config.parents?.sideB && (
          <div className="wedding-card-parents">
            <p className="wedding-card-parents-label">{config.parents.sideB.label ?? "Request the honour of your presence"}</p>
            <p className="wedding-card-parents-names">{config.parents.sideB.names}</p>
          </div>
        )}

        {!config.parents?.sideB && config.quote && (
          <p className="wedding-card-invite-line">{config.quote}</p>
        )}

        <div className="wedding-card-names">
          <div>
            <p className="wedding-card-name script">{brideOrFirst}</p>
            <p className="wedding-card-role">The Bride</p>
          </div>
          <p className="wedding-card-amp">&amp;</p>
          <div>
            <p className="wedding-card-name script">{groomOrSecond}</p>
            <p className="wedding-card-role">The Groom</p>
          </div>
        </div>

        {config.parents?.sideA && (
          <div className="wedding-card-parents wedding-card-parents-secondary">
            <p className="wedding-card-parents-label">{config.parents.sideA.label ?? "Son of"}</p>
            <p className="wedding-card-parents-names">{config.parents.sideA.names}</p>
          </div>
        )}

        <div className="wedding-card-ornament" aria-hidden>
          <span />
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l1.8 5.4L19 9.2l-5.2 1.8L12 16.4l-1.8-5.4L5 9.2l5.2-1.8L12 2z" />
          </svg>
          <span />
        </div>

        <div className="wedding-card-details">
          <p className="wedding-card-date">{formatEventDateLong(config.eventDate)}</p>
          <p className="wedding-card-time">{formatEventTimeRange(config.eventDate, config.eventEndDate)}</p>
          <p className="wedding-card-venue">{venueLine}</p>
          {config.dressCode && <p className="wedding-card-note">{config.dressCode}</p>}
        </div>

        <p className="wedding-card-hint">Screenshot this card to save or share</p>
      </div>
    </article>
  );
}

type VisitActionsProps = {
  config: InvitationConfig;
  whatsappHref?: string;
};

export function VisitActions({ config, whatsappHref }: VisitActionsProps) {
  return (
    <div className="visit-actions">
      <button type="button" onClick={() => downloadCalendarIcs(config)} className="btn-gold w-full">
        Add to calendar
      </button>
      {whatsappHref ? (
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost-active w-full">
          WhatsApp RSVP
        </a>
      ) : (
        <button type="button" disabled className="btn-ghost w-full">
          WhatsApp RSVP
        </button>
      )}
    </div>
  );
}
