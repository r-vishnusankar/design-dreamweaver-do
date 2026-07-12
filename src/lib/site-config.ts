import type {
  EventType,
  PortfolioEntry,
  PricingFeature,
  PricingPackage,
} from "@virtual-invite/types";

export const BRAND_NAME = "The Virtual Invite";
export const BRAND_EMAIL = "hello@thevirtualinvite.com";
export const BRAND_TAGLINE = "Beautiful invitations — printed, digital, or both.";

/**
 * Public pricing (Netlify is internal only — never shown to customers)
 * - Essential (₹999): template + countdown + location + shareable link
 * - Signature (₹2,999): custom domain + RSVP + itinerary + template music
 * - Atelier (₹9,999): full RSVP, YouTube live, photo album, custom design/fonts, music by choice
 * - Custom: quote-based for unique requirements
 */
export const pricingPackages: PricingPackage[] = [
  {
    id: "essential",
    name: "Essential",
    priceInr: 999,
    priceLabel: "₹999",
    tagline: "Beautiful template with countdown & location",
    hostingLabel: "shareable-link",
    highlights: [
      "Beautiful curated template",
      "Live countdown to your event",
      "Venue location & map",
      "Names, date & event info",
      "Private shareable link",
      "WhatsApp / social share",
    ],
  },
  {
    id: "signature",
    name: "Signature",
    priceInr: 2999,
    priceLabel: "₹2,999",
    tagline: "Custom domain, RSVP & template music",
    hostingLabel: "custom-domain",
    featured: true,
    highlights: [
      "Everything in Essential",
      "Custom domain (yournames.com)",
      "Basic RSVP (attending Yes/No)",
      "Weekend itinerary section",
      "Background music (from template)",
      "WhatsApp share + QR code",
      "Two rounds of revisions",
    ],
  },
  {
    id: "atelier",
    name: "Atelier",
    priceInr: 9999,
    priceLabel: "₹9,999",
    tagline: "Full guest experience — RSVP, live & album",
    hostingLabel: "custom-domain",
    highlights: [
      "Everything in Signature",
      "Full RSVP (meals, +1, dietary)",
      "YouTube / live stream embed",
      "Photo album gallery",
      "Custom design & custom fonts",
      "Music by your choice",
      "Guest messages & love notes",
      "Priority designer support",
    ],
  },
  {
    id: "custom",
    name: "Custom",
    priceInr: null,
    priceLabel: "Custom",
    tagline: "Bespoke quote for unique celebrations",
    hostingLabel: "bespoke",
    highlights: [
      "Tailored scope for your event",
      "Multi-language or multi-event sites",
      "Paper + digital suite together",
      "Extra pages, integrations & features",
      "Dedicated project timeline",
      "Quote after a short discovery call",
    ],
  },
];

/** Full feature matrix by category — drives comparison table (fixed tiers only). */
export const pricingFeatures: PricingFeature[] = [
  // Design
  {
    id: "template",
    label: "Beautiful curated template",
    category: "Design",
    essential: true,
    signature: true,
    atelier: "Custom design",
  },
  {
    id: "custom-design",
    label: "Fully custom design (not a template)",
    category: "Design",
    essential: false,
    signature: false,
    atelier: true,
  },
  {
    id: "custom-fonts",
    label: "Custom typography & fonts",
    category: "Design",
    essential: false,
    signature: false,
    atelier: true,
  },
  {
    id: "brand-colors",
    label: "Your event colours applied",
    category: "Design",
    essential: "partial",
    signature: true,
    atelier: true,
  },
  // Core pages
  {
    id: "countdown",
    label: "Live countdown",
    category: "Core pages",
    essential: true,
    signature: true,
    atelier: true,
  },
  {
    id: "location",
    label: "Venue location & map",
    category: "Core pages",
    essential: true,
    signature: true,
    atelier: true,
  },
  {
    id: "event-info",
    label: "Names, date & event details",
    category: "Core pages",
    essential: true,
    signature: true,
    atelier: true,
  },
  {
    id: "itinerary",
    label: "Weekend / event itinerary",
    category: "Core pages",
    essential: false,
    signature: true,
    atelier: true,
  },
  {
    id: "story",
    label: "Our story / about section",
    category: "Core pages",
    essential: false,
    signature: true,
    atelier: true,
  },
  // RSVP & guests
  {
    id: "rsvp-basic",
    label: "RSVP — attending Yes / No",
    category: "RSVP & guests",
    essential: false,
    signature: true,
    atelier: true,
  },
  {
    id: "rsvp-full",
    label: "Full RSVP form (name, +1, meals, dietary)",
    category: "RSVP & guests",
    essential: false,
    signature: false,
    atelier: true,
  },
  {
    id: "guest-plus-one",
    label: "Plus-one / guest name fields",
    category: "RSVP & guests",
    essential: false,
    signature: false,
    atelier: true,
  },
  {
    id: "meal-selection",
    label: "Meal selection for guest & +1",
    category: "RSVP & guests",
    essential: false,
    signature: false,
    atelier: true,
  },
  {
    id: "rsvp-export",
    label: "RSVP responses export (Excel / sheet)",
    category: "RSVP & guests",
    essential: false,
    signature: "partial",
    atelier: true,
  },
  {
    id: "guest-messages",
    label: "Guest messages / love notes wall",
    category: "RSVP & guests",
    essential: false,
    signature: false,
    atelier: true,
  },
  // Media & live
  {
    id: "photo-album",
    label: "Photo album gallery",
    category: "Media & live",
    essential: false,
    signature: false,
    atelier: true,
  },
  {
    id: "youtube-live",
    label: "YouTube / live stream embed",
    category: "Media & live",
    essential: false,
    signature: false,
    atelier: true,
  },
  {
    id: "music",
    label: "Background music",
    category: "Media & live",
    essential: false,
    signature: "From template",
    atelier: "By your choice",
  },
  {
    id: "video-message",
    label: "Welcome video from hosts",
    category: "Media & live",
    essential: false,
    signature: false,
    atelier: true,
  },
  // Hosting & share (no Netlify in customer-facing copy)
  {
    id: "shareable-link",
    label: "Private shareable link",
    category: "Hosting & share",
    essential: true,
    signature: true,
    atelier: true,
  },
  {
    id: "custom-domain",
    label: "Custom domain (yournames.com)",
    category: "Hosting & share",
    essential: false,
    signature: true,
    atelier: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp / social share",
    category: "Hosting & share",
    essential: true,
    signature: true,
    atelier: true,
  },
  {
    id: "qr-code",
    label: "QR code for print invites",
    category: "Hosting & share",
    essential: false,
    signature: true,
    atelier: true,
  },
  // Support
  {
    id: "revisions",
    label: "Design revisions",
    category: "Support",
    essential: "1 round",
    signature: "2 rounds",
    atelier: "Unlimited",
  },
  {
    id: "priority",
    label: "Priority designer support",
    category: "Support",
    essential: false,
    signature: false,
    atelier: true,
  },
];
/** Core services / occasion types offered by the studio. */
export const services: {
  type: EventType;
  title: string;
  description: string;
  icon: string;
  image: string;
}[] = [
  {
    type: "wedding",
    title: "Wedding Invitations",
    description: "A full digital home for your wedding — story, RSVP, itinerary, and keepsake.",
    icon: "favorite",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
  },
  {
    type: "save-the-date",
    title: "Save the Date Websites",
    description: "Announce the date early with a beautiful, shareable link your guests will love.",
    icon: "event",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "baby-shower",
    title: "Baby Shower Invitations",
    description: "Warm, personal sites for showers — details, registry, and RSVP in one place.",
    icon: "child_care",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "birthday",
    title: "Birthday Invitations",
    description: "Milestone birthdays with countdown, gallery, and effortless guest replies.",
    icon: "cake",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "engagement",
    title: "Engagement Invitations",
    description: "Celebrate the beginning — intimate digital invites for your engagement party.",
    icon: "diamond",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "housewarming",
    title: "Housewarming Invitations",
    description: "Welcome guests to your new home with maps, timing, and a personal note.",
    icon: "home",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "anniversary",
    title: "Anniversary Websites",
    description: "Honour years together with a story-led site for your anniversary celebration.",
    icon: "celebration",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "other",
    title: "Personalized Event Websites",
    description: "Any occasion, custom-built — naming ceremonies, graduations, and more.",
    icon: "auto_awesome",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  },
];

/** Published invitation sites shown on the studio portfolio + phone switcher.
 * Set VITE_SAMPLE_* to public HTTPS URLs after sample apps are deployed.
 * Leave unset in production so the UI shows imagery instead of broken localhost iframes.
 */
function sampleUrl(envValue: string | undefined) {
  const value = envValue?.trim();
  if (!value) return "";
  if (value.includes("localhost") || value.includes("127.0.0.1")) {
    // Only keep localhost when the studio itself is being developed locally (Vite define).
    if (import.meta.env.DEV) return value;
    return "";
  }
  return value;
}

export const portfolio: PortfolioEntry[] = [
  {
    slug: "arjun-meera",
    title: "Arjun & Meera",
    eventType: "wedding",
    tag: "Essential · ₹999",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    previewUrl: sampleUrl(import.meta.env.VITE_SAMPLE_INVITE_URL) || (import.meta.env.DEV ? "http://localhost:5174" : ""),
    featured: true,
  },
  {
    slug: "arjun-meera-signature",
    title: "Arjun & Meera",
    eventType: "wedding",
    tag: "Signature · ₹2,999 · Video",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    previewUrl: sampleUrl(import.meta.env.VITE_SAMPLE_INVITE_URL_SIG) || (import.meta.env.DEV ? "http://localhost:3000" : ""),
    featured: false,
  },
  {
    slug: "rohan-diya",
    title: "Rohan & Diya",
    eventType: "wedding",
    tag: "Essential · ₹999",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80",
    previewUrl: sampleUrl(import.meta.env.VITE_SAMPLE_INVITE_URL_B) || (import.meta.env.DEV ? "http://localhost:5175" : ""),
    featured: false,
  },
];
