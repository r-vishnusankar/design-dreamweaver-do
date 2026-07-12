export type Locale = "en" | "ml";

export type LanternWish = {
  id: number;
  initial: string;
  author: string;
  message: string;
  special?: boolean;
};

type TranslationTree = {
  language: {
    prompt: string;
    english: string;
    malayalam: string;
    hint: string;
  };
  opening: {
    quote: string;
    tap: string;
    bismillah: string;
    bismillahTrans: string;
  };
  scroll: {
    hint: string;
    elderHint: string;
    videoError: string;
    videoRetry: string;
    videoLoading: string;
  };
  countdown: {
    label: string;
    title: string;
  };
  parents: {
    label: string;
    title: string;
    brideFamily: string;
    groomFamily: string;
  };
  details: {
    label: string;
    title: string;
    date: string;
    time: string;
    venue: string;
    reception: string;
  };
  lanterns: {
    label: string;
    title: string;
    hint: string;
    demoHint: string;
    wishes: LanternWish[];
  };
  venue: {
    label: string;
    title: string;
    openMaps: string;
    directions: string;
  };
  dua: {
    label: string;
    title: string;
    line: string;
  };
  guestActions: {
    label: string;
    title: string;
    screenshotHint: string;
    addCalendar: string;
    whatsappRsvp: string;
    rsvpMessage: string;
  };
  final: {
    label: string;
    title: string;
    thanks: string;
    sisterLine: string;
    bride: string;
    groom: string;
  };
};

export const translations: Record<Locale, TranslationTree> = {
  en: {
    language: {
      prompt: "How would you like to read this?",
      english: "English",
      malayalam: "Malayalam",
      hint: "You can switch anytime from the top corner",
    },
    opening: {
      quote: "Some stories begin when you open them.",
      tap: "Open the invitation",
      bismillah: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
      bismillahTrans: "Bismillahir Rahmani Rahim",
    },
    scroll: {
      hint: "Keep scrolling — there's more",
      elderHint: "Swipe up slowly to see the invitation",
      videoError: "The invitation video could not load. Check your connection and try again.",
      videoRetry: "Tap to retry",
      videoLoading: "Loading invitation…",
    },
    countdown: {
      label: "Not long now",
      title: "The day is getting closer",
    },
    parents: {
      label: "With our parents' prayers",
      title: "Two families, one celebration",
      brideFamily: "Bride's family",
      groomFamily: "Groom's family",
    },
    details: {
      label: "When & where",
      title: "Join us here",
      date: "Date",
      time: "Time",
      venue: "Venue",
      reception: "Reception",
    },
    lanterns: {
      label: "Lantern wishes",
      title: "Words we hold close",
      hint: "Touch a lantern — there's a little wish inside",
      demoHint: "Try one ↑",
      wishes: [
        {
          id: 1,
          initial: "M",
          author: "Meera",
          message: "May our journey be filled with laughter, patience, and endless joy.",
        },
        {
          id: 2,
          initial: "A",
          author: "Arjun",
          message: "Two hearts, one path — grateful you're part of our story.",
        },
        {
          id: 3,
          initial: "♥",
          author: "Family",
          message: "May your home be filled with peace, laughter, and love answered.",
        },
        {
          id: 4,
          initial: "V",
          author: "Vikram & Priya",
          message: "Our daughter's happiness is our prayer come true.",
        },
        {
          id: 5,
          initial: "R",
          author: "Rajesh & Anjali",
          message: "Welcome to our family — with open arms and grateful hearts.",
        },
        {
          id: 6,
          initial: "♥",
          author: "With love",
          special: true,
          message:
            "Under Rajasthan skies, two families become one. We cannot wait to celebrate with you.",
        },
      ],
    },
    venue: {
      label: "The venue",
      title: "See you here",
      openMaps: "Open in Google Maps",
      directions: "Get directions",
    },
    dua: {
      label: "A quiet wish",
      title: "May this beginning be filled with light.",
      line: "May every road that brings you to us be safe.",
    },
    guestActions: {
      label: "For your visit",
      title: "Keep these details with you",
      screenshotHint: "Screenshot this card, save the date, or send us a quick RSVP.",
      addCalendar: "Add to Calendar",
      whatsappRsvp: "WhatsApp RSVP",
      rsvpMessage:
        "Hello, I will attend Arjun & Meera's wedding on 25 October at Amanbagh, Alwar.",
    },
    final: {
      label: "With gratitude",
      title: "We really hope you can be there with us.",
      thanks: "Thank you — for coming, for celebrating, for being part of this.",
      sisterLine: "With love, Meera & Arjun",
      bride: "The Bride",
      groom: "The Groom",
    },
  },
  ml: {
    language: {
      prompt: "ഏത് ഭാഷയിൽ വായിക്കണം?",
      english: "English",
      malayalam: "മലയാളം",
      hint: "മുകളിൽ corner-ൽ എപ്പോഴും മാറ്റാം",
    },
    opening: {
      quote: "ചില കഥകൾ തുറക്കുമ്പോൾ തുടങ്ങുന്നു.",
      tap: "ആഹ്വാനം തുറക്കാൻ തൊടൂ",
      bismillah: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
      bismillahTrans: "Bismillahir Rahmani Rahim",
    },
    scroll: {
      hint: "താഴേക്ക് scroll ചെയ്ത് നോക്കൂ — ഇനിയും ഉണ്ട്",
      elderHint: "Invitation കാണാൻ പതുക്കെ മുകളിലേക്ക് swipe ചെയ്യൂ",
      videoError: "Invitation വീഡിയോ ലോഡ് ചെയ്യാൻ കഴിഞ്ഞില്ല. കണക്ഷൻ പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കൂ.",
      videoRetry: "വീണ്ടും ശ്രമിക്കാൻ ടാപ്പ് ചെയ്യൂ",
      videoLoading: "Invitation ലോഡ് ചെയ്യുന്നു…",
    },
    countdown: {
      label: "ഇനി കാത്തിരിക്കേണ്ട ദിവസങ്ങൾ",
      title: "വിവാഹത്തിന് ഇനി ഇത്ര മാത്രം",
    },
    parents: {
      label: "മാതാപിതാക്കളുടെ പ്രാർത്ഥനയോടെ",
      title: "രണ്ട് കുടുംബങ്ങൾ, ഒരു സൽക്കാരം",
      brideFamily: "വധുവിന്റെ കുടുംബം",
      groomFamily: "വരന്റെ കുടുംബം",
    },
    details: {
      label: "എപ്പോൾ · എവിടെ",
      title: "ഇവിടെ കാണാം",
      date: "ദിവസം",
      time: "സമയം",
      venue: "സ്ഥലം",
      reception: "സൽക്കാരം",
    },
    lanterns: {
      label: "വിളക്ക് wishes",
      title: "മനസ്സിൽ വെച്ച വാക്കുകൾ",
      hint: "Lantern ഒന്ന് touch cheythu nokku — wish kaanam",
      demoHint: "ഒന്ന് try ചെയ്തു നോക്കൂ ↑",
      wishes: [
        {
          id: 1,
          initial: "M",
          author: "Meera",
          message: "Nammude journey-inu santhosham, sabr, sneham nalkatte.",
        },
        {
          id: 2,
          initial: "A",
          author: "Arjun",
          message: "Randu hrudayam, oru path — ningal ee kathayude bhagam aanu.",
        },
        {
          id: 3,
          initial: "♥",
          author: "Kudumbam",
          message: "Veedu niranju amaiti, hasi, sneham aakatte.",
        },
        {
          id: 4,
          initial: "V",
          author: "Vikram & Priya",
          message: "Nammude moluthayude santhosham — nammude prarthana.",
        },
        {
          id: 5,
          initial: "R",
          author: "Rajesh & Anjali",
          message: "Nammude kudumbathilekku snehamayi — swagatham.",
        },
        {
          id: 6,
          initial: "♥",
          author: "With love",
          special: true,
          message:
            "Rajasthan aakashathin keezhil randu kudumbangal onnakunnu. Ningalode koode aaghosham cheyyan kathirikkunnu.",
        },
      ],
    },
    venue: {
      label: "സ്ഥലം",
      title: "ഇവിടെ കാണാം",
      openMaps: "Maps-ൽ തുറക്കൂ",
      directions: "വഴി കാണാം",
    },
    dua: {
      label: "ഒരു ചെറിയ ആശംസ",
      title: "ഈ തുടക്കം പ്രകാശം നിറഞ്ഞതാകട്ടെ.",
      line: "നിങ്ങളെ ഞങ്ങളിലേക്ക് കൊണ്ടുവരുന്ന എല്ലാ വഴികളും സുരക്ഷിതമാകട്ടെ.",
    },
    guestActions: {
      label: "വരുമ്പോൾ ഉപകാരപ്പെടാൻ",
      title: "ഈ details കൈയിൽ വെക്കൂ",
      screenshotHint: "ഈ card screenshot എടുക്കാം, calendar-ൽ save ചെയ്യാം, അല്ലെങ്കിൽ WhatsApp RSVP അയക്കാം.",
      addCalendar: "Calendar-ൽ save ചെയ്യൂ",
      whatsappRsvp: "WhatsApp RSVP",
      rsvpMessage:
        "Hello, Arjun & Meera wedding-il njan varum. 25 October, Amanbagh, Alwar.",
    },
    final: {
      label: "നന്ദി",
      title: "ഞങ്ങളുടെ ഈ സന്തോഷ ദിവസം നിങ്ങളോടൊപ്പം ആഘോഷിക്കാൻ ആഗ്രഹിക്കുന്നു.",
      thanks: "വന്നതിനും, aaghoshichathinum, snehichathinum nanni.",
      sisterLine: "With love, Meera & Arjun",
      bride: "വധു",
      groom: "വരൻ",
    },
  },
};
