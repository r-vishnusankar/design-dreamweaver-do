export const WEDDING = {
  bride: {
    name: "Meera Malhotra",
    firstName: "Meera",
  },
  groom: {
    name: "Arjun Sharma",
    firstName: "Arjun",
    siteUrl: "https://arjunandmeera.com",
  },
  event: {
    title: "The Wedding",
    date: "Sunday, 25 October 2026",
    dateShort: "25 October 2026",
    islamicDate: "",
    day: "Sunday",
    dayNumber: "25",
    month: "October",
    year: "2026",
    time: "4:30 PM onwards",
    timezone: "Indian Standard Time (IST)",
    dressCode: "Festive ethnic · jewel tones & soft golds welcome",
  },
  venue: {
    name: "Amanbagh",
    address: "Ajabgarh Village, Alwar",
    fullAddress: "Amanbagh, Ajabgarh Village, Alwar, Rajasthan 301027",
    mapsUrl: "https://maps.google.com/?q=Amanbagh+Alwar+Rajasthan",
    parking: "Valet parking at the main gate",
    landmarks: "Alwar, Rajasthan",
  },
  brideFamily: {
    father: "Mr. Vikram Malhotra",
    mother: "Mrs. Priya Malhotra",
    house: "Malhotra Residence",
    address: ["New Delhi"],
  },
  groomFamily: {
    father: "Mr. Rajesh Sharma",
    mother: "Mrs. Anjali Sharma",
    house: "Sharma Residence",
    address: ["Jaipur"],
  },
  countdownTarget: new Date("2026-10-25T16:30:00+05:30"),
} as const;

export const LOVE_JOURNEY = [
  { icon: "🌿", title: "A Prayer", description: "Long before their paths crossed, two families were asking for the same thing." },
  { icon: "✨", title: "Hope", description: "A quiet faith that the right person would arrive at the right moment." },
  { icon: "💫", title: "Meeting", description: "The first hello — brief, gentle, and somehow unforgettable." },
  { icon: "🤝", title: "Trust", description: "Words turned into hours. Hours turned into certainty." },
  { icon: "🌸", title: "Love", description: "The kind that grows quietly — until one day you realise it is a tree." },
  { icon: "💍", title: "Promise", description: "A vow witnessed by those who matter most." },
  { icon: "∞", title: "Forever", description: "A story that has only just begun." },
] as const;

/** @deprecated Use LOVE_JOURNEY — kept for legacy chapter components */
export const JOURNEY_STEPS = LOVE_JOURNEY;

export const OPENING_QUOTE = "A beautiful journey begins with a single touch.";
export const TAP_TO_OPEN = "Tap to Open";

export const LANTERN_WISHES = [
  { id: 1, message: "May your union be filled with laughter, patience, and endless joy.", author: "With love" },
  { id: 2, message: "Two hearts, one beautiful journey. Wishing you a lifetime of happiness.", author: "Blessings" },
  { id: 3, message: "May your home be filled with peace, warmth, and fragrant memories.", author: "From our hearts" },
  { id: 4, message: "A love written under Rajasthan skies — may it shine brighter every day.", author: "Warm wishes" },
  { id: 5, message: "Today we celebrate not just a wedding, but the beginning of forever.", author: "With joy" },
  { id: 6, message: "With open doors and grateful hearts — we cannot wait to celebrate with you.", author: "The families" },
] as const;

/** Signature package cinematic video — Arjun.mp4 */
export const CANVA_VIDEO = {
  src: "/video/wedding-invitation.mp4",
  /** LCP poster shown via next/image until the video is ready. Place file in public/video/. */
  poster: "/video/wedding-invitation-poster.jpg",
  /** Scroll-scrub starts here (skips the opening of the file). */
  startSec: 0.3,
  durationSec: 15,
  width: 1080,
  height: 1920,
} as const;

export const LETTER_FROM_SAFNA = `My dearest family and friends,

As I write this, my heart is full — full of gratitude, full of joy, and full of the quiet blessings that have brought us to this moment.

This invitation is not merely an announcement. It is a piece of our hearts, extended to each of you who have shaped our journey with your love and your presence.

On the 25th of October, two families will become one. And we cannot imagine celebrating this union without you beside us.

With all our love,
Meera & Arjun`;

export const CHAPTERS = [
  { id: "welcome", number: 1, title: "Welcome" },
  { id: "letter", number: 2, title: "A Letter from Us" },
  { id: "journey", number: 3, title: "Their Journey" },
  { id: "story", number: 4, title: "Their Story" },
  { id: "details", number: 5, title: "Wedding Details" },
  { id: "venue", number: 6, title: "Venue" },
  { id: "family", number: 7, title: "Family" },
  { id: "gallery", number: 8, title: "Gallery" },
  { id: "countdown", number: 9, title: "Countdown" },
  { id: "blessings", number: 10, title: "Blessings" },
  { id: "thanks", number: 11, title: "Thank You" },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    alt: "Wedding rings",
    caption: "A sacred promise",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Elegant wedding moment",
    caption: "Moments of grace",
  },
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    alt: "Destination venue",
    caption: "Amanbagh awaits",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    alt: "Celebration of love",
    caption: "Together forever",
  },
  {
    src: "https://images.unsplash.com/photo-1465495970607-00522e7078ea?w=800&q=80",
    alt: "Traditional celebration",
    caption: "Blessed traditions",
  },
] as const;

export const HIDDEN_DUA =
  "May every road that brings you to us be safe.";

export const HIDDEN_DUA_TRANSLATION =
  "We will be waiting — with open doors and grateful hearts.";

/** Package label for this sample experience */
export const PACKAGE_TIER = "signature" as const;
export const PACKAGE_LABEL = "Signature · ₹2,999";
