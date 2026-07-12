import type { InvitationConfig } from "@virtual-invite/types";

export const invitationConfig: InvitationConfig = {
  slug: "__SLUG__",
  eventType: "wedding",
  packageTier: "essential",
  coupleOrHost: {
    names: "__NAMES__",
    displayTitle: "__DISPLAY_TITLE__",
  },
  eventDate: "__EVENT_DATE__",
  venue: {
    name: "Pankaja Auditorium",
    location: "Pankaja Auditorium, Mudappallur,\nPalakkad, Kerala",
    note: "Ample parking available on premises",
    mapEmbedQuery: "Pankaja Auditorium, Mudappallur, Palakkad, Kerala",
  },
  theme: {
    primary: "#4e0c21",
    surface: "#fcf9f8",
  },
  hosting: {
    netlifySiteName: "tvi-__SLUG__",
  },
  sections: ["hero", "itinerary", "map", "story", "footer"],
  heroImage:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80",
  mapImage:
    "https://images.unsplash.com/photo-1469854523086-cc02afe5c88f?auto=format&fit=crop&w=1600&q=80",
  guestPassLabel: "Guest",
  quote: "We cannot wait to celebrate with the people who mean the most to us.",
  itinerary: [
    {
      date: "DAY ONE • 6:00 PM",
      title: "Welcome Celebration",
      description: "An evening to gather, toast, and begin the festivities.",
    },
    {
      date: "DAY TWO • 4:30 PM",
      title: "Main Ceremony",
      description: "The heart of the celebration.",
      accent: true,
    },
  ],
};
