import type { InvitationConfig } from "@virtual-invite/types";

export const invitationConfig: InvitationConfig = {
  slug: "arjun-meera",
  eventType: "wedding",
  packageTier: "essential",
  coupleOrHost: {
    names: "Arjun & Meera",
    displayTitle: "The Wedding of Arjun & Meera",
  },
  parents: {
    sideA: {
      label: "Son of",
      names: "Mr. Rajesh Sharma & Mrs. Anjali Sharma",
    },
    sideB: {
      label: "Daughter of",
      names: "Mr. Vikram Malhotra & Mrs. Priya Malhotra",
    },
  },
  eventDate: "2026-10-25T16:30:00",
  eventEndDate: "2026-10-25T23:00:00",
  venue: {
    name: "Amanbagh",
    location: "Ajabgarh Village, Alwar\nRajasthan 301027, India",
    note: "Valet parking at the main gate",
    mapsUrl: "https://maps.google.com/?q=Amanbagh+Alwar+Rajasthan",
  },
  theme: {
    primary: "#5c1228",
    surface: "#ebe6df",
    fonts: {
      display: "Fraunces",
      body: "Outfit",
    },
  },
  hosting: {
    netlifySiteName: "tvi-arjun-meera",
  },
  sections: ["hero", "story", "map", "footer"],
  heroImage:
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=2400&q=85",
  mapImage:
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1800&q=80",
  quote:
    "With joy in our hearts, we invite you to witness the beginning of our forever — under Rajasthan skies, surrounded by the people who shaped us.",
};
