export type PackageTier = "essential" | "signature" | "atelier" | "custom";

export type EventType =
  | "wedding"
  | "save-the-date"
  | "baby-shower"
  | "birthday"
  | "engagement"
  | "housewarming"
  | "anniversary"
  | "other";

export type InvitationSection =
  | "envelope"
  | "hero"
  | "story"
  | "gallery"
  | "itinerary"
  | "rsvp"
  | "map"
  | "footer"
  | "photo-album";

export type ItineraryEvent = {
  date: string;
  title: string;
  description: string;
  accent?: boolean;
};

export type InvitationConfig = {
  slug: string;
  eventType: EventType;
  packageTier: PackageTier;
  coupleOrHost: {
    names: string;
    displayTitle: string;
  };
  /** Parents / hosts shown on the invitation */
  parents?: {
    sideA?: { label?: string; names: string };
    sideB?: { label?: string; names: string };
  };
  /** Optional dress code, stay & travel notes for a complete guest guide */
  dressCode?: string;
  stayNote?: string;
  travelNote?: string;
  contactHosts?: string;
  eventDate: string;
  /** Optional end time for calendar invites (ISO). Defaults to +4 hours from eventDate. */
  eventEndDate?: string;
  venue?: {
    name: string;
    location: string;
    mapsUrl?: string;
    /** Shown under address — e.g. parking note */
    note?: string;
    /** Optional embed/preview map image or static map URL */
    mapEmbedQuery?: string;
  };
  theme: {
    primary: string;
    surface: string;
    fonts?: {
      display: string;
      body: string;
    };
  };
  hosting: {
    /** Internal deploy site name — never shown to customers */
    netlifySiteName: string;
    customDomain?: string;
  };
  sections: InvitationSection[];
  heroImage?: string;
  mapImage?: string;
  itinerary?: ItineraryEvent[];
  quote?: string;
  guestPassLabel?: string;
  /** Signature+: template or custom background track (URL) */
  musicUrl?: string;
  /** WhatsApp share / RSVP number (digits with country code, no +) */
  whatsappNumber?: string;
  /** Prefilled WhatsApp message for share */
  whatsappShareText?: string;
};

export type PortfolioEntry = {
  slug: string;
  title: string;
  eventType: EventType;
  tag: string;
  image: string;
  previewUrl: string;
  featured?: boolean;
};

export type FeatureAvailability = boolean | "partial" | string;

export type PricingFeature = {
  id: string;
  label: string;
  category: string;
  essential: FeatureAvailability;
  signature: FeatureAvailability;
  atelier: FeatureAvailability;
};

export type PricingPackage = {
  id: PackageTier;
  name: string;
  priceInr: number | null;
  priceLabel: string;
  tagline: string;
  /** Public-facing hosting — never mention Netlify to customers */
  hostingLabel: "shareable-link" | "custom-domain" | "bespoke";
  highlights: string[];
  featured?: boolean;
};

export type InquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  eventType: EventType;
  eventDate?: string;
  packageTier: PackageTier;
  message: string;
};
