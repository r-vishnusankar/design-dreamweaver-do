import type { InvitationConfig } from "@virtual-invite/types";

/** Essential ₹999 sample — ivory cinematic layout, Rohan & Diya */
export const invitationConfig: InvitationConfig = {
  slug: "rohan-diya",
  eventType: "wedding",
  packageTier: "essential",
  coupleOrHost: {
    names: "Rohan & Diya",
    displayTitle: "The Wedding of Rohan & Diya",
  },
  parents: {
    sideB: {
      label: "Daughter of",
      names: "Mr. Suresh Nair & Mrs. Lakshmi Nair",
    },
    sideA: {
      label: "Son of",
      names: "Mr. Anil Menon & Mrs. Kavitha Menon",
    },
  },
  eventDate: "2026-12-12T11:00:00+05:30",
  eventEndDate: "2026-12-12T16:00:00+05:30",
  venue: {
    name: "Le Meridien Kochi",
    location: "Maradu, Kochi, Kerala",
    note: "Valet parking available at the lobby entrance",
    mapEmbedQuery: "Le Meridien Kochi Maradu",
    mapsUrl: "https://maps.google.com/?q=Le+Meridien+Kochi",
  },
  dressCode: "Festive traditional · soft pastels welcome",
  theme: {
    primary: "#b08c42",
    surface: "#faf7f0",
    fonts: {
      display: "Cormorant Garamond",
      body: "Inter",
    },
  },
  hosting: {
    netlifySiteName: "tvi-rohan-diya",
  },
  sections: ["hero", "story", "map", "footer"],
  heroImage:
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=900&q=80",
  mapImage:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
  guestPassLabel: "Honoured Guest",
  quote:
    "With joy in our hearts, we invite you to celebrate the wedding of Rohan & Diya — surrounded by family, friends, and blessings.",
};
