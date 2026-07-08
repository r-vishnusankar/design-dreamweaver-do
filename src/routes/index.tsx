import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vow & Vellum — Digital wedding invitations, hand-crafted" },
      {
        name: "description",
        content:
          "A luxury digital home for your wedding. Editorial invitations, RSVP, story, gallery and countdown — crafted by our atelier around your love story.",
      },
      { property: "og:title", content: "Vow & Vellum — Digital wedding atelier" },
      {
        property: "og:description",
        content: "One beautiful link that tells your story, welcomes your guests, and lives on as a keepsake.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
  component: Landing,
});

const HERO =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80";
const ENVELOPE =
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80";
const RSVP =
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=80";
const STORY =
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80";
const GALLERY =
  "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1400&q=80";
const COLLECTION_1 =
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80";
const COLLECTION_2 =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80";
const COLLECTION_3 =
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80";
const COLLECTION_4 =
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80";

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > threshold);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [threshold]);
  return scrolled;
}

function Nav() {
  const scrolled = useScrolled(20);
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/85 backdrop-blur-xl border-b border-outline-variant/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1360px] mx-auto flex justify-between items-center px-5 md:px-12 h-20">
        <Link to="/" className="font-display text-[22px] md:text-[26px] text-primary tracking-tight">
          Vow <span className="text-on-tertiary-container">&amp;</span> Vellum
        </Link>
        <div className="hidden md:flex gap-10 items-center text-[11px] font-semibold tracking-[0.2em] uppercase text-on-surface-variant">
          <a className="hover:text-primary transition-colors" href="#atelier">The Atelier</a>
          <a className="hover:text-primary transition-colors" href="#collections">Collections</a>
          <a className="hover:text-primary transition-colors" href="#journey">Journey</a>
          <a className="hover:text-primary transition-colors" href="#pricing">Pricing</a>
        </div>
        <Link
          to="/portal"
          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-5 py-2.5 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors"
        >
          Preview
        </Link>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/60" />
      </div>
      <div className="relative z-10 max-w-[1360px] mx-auto w-full px-5 md:px-12 pt-32 pb-24">
        <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-surface/80 mb-8">
          <span className="inline-block w-8 h-px bg-tertiary-fixed-dim align-middle mr-3" />
          The Digital Wedding Atelier
        </p>
        <h1 className="font-display text-surface leading-[1.02] tracking-tight text-[44px] sm:text-[68px] md:text-[92px] lg:text-[112px] max-w-[14ch]">
          Your wedding,
          <br />
          <span className="italic text-tertiary-fixed-dim">beautifully</span> told.
        </h1>
        <p className="mt-10 max-w-xl text-surface/85 text-[17px] leading-relaxed font-light">
          A hand-crafted digital home for the most important day of your life —
          editorial invitations, effortless RSVP, and a keepsake that lives on
          long after the last dance.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 px-8 py-4 bg-surface text-primary text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-tertiary-fixed-dim transition-colors"
          >
            Begin your invitation
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
          </a>
          <div className="text-surface/80">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase">4.9 · loved by 2,000+ couples</p>
            <p className="text-[13px] text-surface/60 mt-1 font-light italic">From €175 · no commitment until payment</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-surface/70 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="material-symbols-outlined animate-bounce" style={{ fontSize: 20 }}>expand_more</span>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="py-32 md:py-48 px-5 md:px-12 bg-surface">
      <div className="max-w-[1000px] mx-auto text-center">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-10">
          — Our philosophy —
        </p>
        <h2 className="font-display text-primary text-[32px] sm:text-[44px] md:text-[56px] leading-[1.15] tracking-tight">
          Not an invitation.
          <br />
          <span className="italic text-on-surface-variant">A digital home for your wedding.</span>
        </h2>
        <p className="mt-10 text-[17px] md:text-[19px] leading-[1.7] text-on-surface-variant max-w-2xl mx-auto font-light">
          Every couple has a story worth telling with care. Vow &amp; Vellum is a small
          atelier of designers and writers who compose one exquisite site around yours —
          the first impression, the story, the schedule, the memory. Not a template.
          A keepsake.
        </p>
      </div>
    </section>
  );
}

function FeatureBento() {
  return (
    <section id="atelier" className="pb-32 md:pb-48 px-5 md:px-12 bg-surface">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-16 gap-8 flex-wrap">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-4">
              What we craft
            </p>
            <h3 className="font-display text-primary text-[32px] md:text-[48px] leading-[1.1] tracking-tight max-w-2xl">
              Every detail, considered.
            </h3>
          </div>
          <p className="text-on-surface-variant max-w-sm text-[15px] leading-relaxed font-light">
            Ten included features, hand-composed. One beautiful link, ready
            to share the moment you say yes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
          {/* Envelope — tall */}
          <div className="md:col-span-3 md:row-span-2 relative overflow-hidden group aspect-[4/5] md:aspect-auto md:min-h-[640px] bg-secondary-container">
            <img src={ENVELOPE} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-tertiary-fixed-dim mb-3">01 — Arrival</p>
              <h4 className="font-display text-surface text-[26px] md:text-[34px] leading-tight">
                Personalised envelope,
                <br />
                <span className="italic">unsealed with a gesture.</span>
              </h4>
              <p className="text-surface/80 mt-4 text-[14px] leading-relaxed font-light max-w-md">
                Your initials, wax-sealed. A tactile opening animation that
                sets the tone before a single word is read.
              </p>
            </div>
          </div>

          {/* RSVP */}
          <div className="md:col-span-3 relative overflow-hidden group aspect-[16/10] bg-surface-container">
            <img src={RSVP} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-[1200ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/70 to-transparent" />
            <div className="relative p-8 md:p-10 h-full flex flex-col justify-end">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-3">02 — Guests</p>
              <h4 className="font-display text-primary text-[24px] md:text-[30px] leading-tight max-w-md">
                RSVP &amp; guest tracking, <span className="italic">quietly effortless.</span>
              </h4>
              <p className="text-on-surface-variant mt-3 text-[14px] leading-relaxed font-light max-w-md">
                A personal panel for every guest. Dietary notes, messages,
                exports — kept out of your way until you need them.
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="md:col-span-3 relative overflow-hidden group aspect-[16/10] bg-primary text-on-primary">
            <img src={STORY} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-[1200ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70" />
            <div className="relative p-8 md:p-10 h-full flex flex-col justify-end">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-tertiary-fixed-dim mb-3">03 — Story</p>
              <h4 className="font-display text-[24px] md:text-[30px] leading-tight max-w-md">
                A love story, <span className="italic">written to be re-read.</span>
              </h4>
              <p className="text-on-primary/80 mt-3 text-[14px] leading-relaxed font-light max-w-md">
                We interview you like an editorial. The result reads like
                a magazine feature — because it should.
              </p>
            </div>
          </div>

          {/* Gallery */}
          <div className="md:col-span-2 bg-secondary-container p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: 32 }}>photo_library</span>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-2">04</p>
              <h4 className="font-display text-primary text-[22px] leading-tight">Gallery</h4>
              <p className="text-on-surface-variant text-[13px] mt-2 font-light">Curated moments in editorial layouts.</p>
            </div>
          </div>

          <div className="md:col-span-2 bg-surface-container p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: 32 }}>schedule</span>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-2">05</p>
              <h4 className="font-display text-primary text-[22px] leading-tight">Countdown &amp; itinerary</h4>
              <p className="text-on-surface-variant text-[13px] mt-2 font-light">Every event, every hour, gracefully laid.</p>
            </div>
          </div>

          <div className="md:col-span-2 bg-primary text-on-primary p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
            <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontSize: 32 }}>location_on</span>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-tertiary-fixed-dim mb-2">06</p>
              <h4 className="font-display text-[22px] leading-tight">Destination &amp; maps</h4>
              <p className="text-on-primary/70 text-[13px] mt-2 font-light">Illustrated venues, one-tap directions.</p>
            </div>
          </div>
        </div>

        {/* Included features rail */}
        <div className="mt-16 pt-10 border-t border-outline-variant/40">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-6">
            All included, every invitation
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-on-surface-variant text-[14px] font-light">
            {[
              "Animated envelope",
              "Photo gallery",
              "Multi-language",
              "Maps & locations",
              "Personalised RSVP",
              "Guest tracking panel",
              "Guest messages",
              "Dietary notes",
              "Export to Excel",
              "Share via WhatsApp",
            ].map((f) => (
              <span key={f} className="inline-flex items-center gap-2">
                <span className="text-tertiary-fixed-dim">◆</span>
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Collections() {
  const items = [
    { img: COLLECTION_1, name: "La Maison Dorée", tag: "Editorial · Gold" },
    { img: COLLECTION_2, name: "Amanbagh", tag: "Destination · Rajasthan" },
    { img: COLLECTION_3, name: "Provence", tag: "Garden · Sun-washed" },
    { img: COLLECTION_4, name: "Nocturne", tag: "Evening · Black tie" },
  ];
  return (
    <section id="collections" className="py-32 md:py-48 px-5 md:px-12 bg-surface-container-low">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-4">
              The collections
            </p>
            <h3 className="font-display text-primary text-[32px] md:text-[52px] leading-[1.1] tracking-tight max-w-2xl">
              Four houses.
              <br />
              <span className="italic">One is yours.</span>
            </h3>
          </div>
          <Link
            to="/portal"
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-primary hover:text-on-tertiary-container transition-colors"
          >
            View a live sample
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>north_east</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((it, i) => (
            <div key={it.name} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
                <img src={it.img} alt="" className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-[0.25em] uppercase text-surface bg-primary/60 backdrop-blur px-3 py-1.5">
                  N°0{i + 1}
                </span>
              </div>
              <div className="pt-5">
                <h4 className="font-display text-primary text-[22px] leading-tight">{it.name}</h4>
                <p className="text-on-surface-variant text-[12px] font-semibold tracking-[0.2em] uppercase mt-2">{it.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    {
      n: "I",
      title: "Imagine",
      body: "A private call. We listen — venues, palette, culture, the tone you want your guests to feel.",
    },
    {
      n: "II",
      title: "Compose",
      body: "Our atelier writes and designs your site. Editorial photography, custom typography, considered motion.",
    },
    {
      n: "III",
      title: "Refine",
      body: "Two rounds of revisions with your dedicated designer. Every word, every fade, exactly right.",
    },
    {
      n: "IV",
      title: "Share",
      body: "One beautiful link. Send it by WhatsApp, email or QR. Track RSVPs in a calm, private panel.",
    },
    {
      n: "V",
      title: "Remember",
      body: "After the day, your site remains — a living keepsake, with photos and messages preserved.",
    },
  ];
  return (
    <section id="journey" className="py-32 md:py-48 px-5 md:px-12 bg-primary text-on-primary">
      <div className="max-w-[1360px] mx-auto">
        <div className="max-w-2xl mb-20">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-tertiary-fixed-dim mb-4">
            The journey
          </p>
          <h3 className="font-display text-[32px] md:text-[52px] leading-[1.1] tracking-tight">
            Five acts,
            <br />
            <span className="italic text-tertiary-fixed-dim">from yes to keepsake.</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-tertiary-fixed-dim/40 pt-6">
              <p className="font-display italic text-tertiary-fixed-dim text-[28px] mb-4">{s.n}</p>
              <h4 className="font-display text-[22px] mb-3">{s.title}</h4>
              <p className="text-on-primary/70 text-[14px] leading-relaxed font-light">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-32 md:py-48 px-5 md:px-12 bg-surface">
      <div className="max-w-[900px] mx-auto text-center">
        <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontSize: 42 }}>
          format_quote
        </span>
        <p className="mt-8 font-display italic text-primary text-[26px] md:text-[38px] leading-[1.3]">
          "Our guests opened the link and gasped. It didn't feel like an
          invitation — it felt like the wedding had already begun."
        </p>
        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="w-12 h-px bg-tertiary-fixed-dim" />
          <p className="font-display text-primary text-[20px] mt-3">Priya &amp; Rohan</p>
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-surface-variant">
            Udaipur · March 2026
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative py-32 md:py-48 px-5 md:px-12 bg-surface-container-low overflow-hidden">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-4">
            Begin
          </p>
          <h3 className="font-display text-primary text-[36px] md:text-[56px] leading-[1.05] tracking-tight">
            One price.
            <br />
            <span className="italic">Everything included.</span>
          </h3>
          <p className="mt-6 text-on-surface-variant text-[16px] leading-relaxed font-light max-w-md">
            No add-ons, no upsells. A dedicated designer, unlimited guests,
            and your site preserved for a lifetime.
          </p>
        </div>
        <div className="vellum-card p-10 md:p-12 rounded-sm shadow-2xl">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container">
            The Atelier Invitation
          </p>
          <div className="flex items-baseline gap-3 mt-4">
            <span className="font-display text-primary text-[64px] leading-none">€175</span>
            <span className="text-on-surface-variant text-[13px] font-light">once, forever</span>
          </div>
          <div className="mt-8 space-y-3 text-[14px] text-on-surface-variant font-light">
            {[
              "Dedicated atelier designer",
              "Two rounds of revisions",
              "Unlimited guests & languages",
              "Lifetime hosting & keepsake",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>check</span>
                {f}
              </div>
            ))}
          </div>
          <a
            href="#"
            className="mt-10 w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-on-primary text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-primary/90 transition-colors"
          >
            Create my invitation
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
          </a>
          <p className="mt-4 text-[12px] text-on-surface-variant/70 text-center font-light italic">
            No commitment until payment
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-on-primary px-5 md:px-12 pt-24 pb-10">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-tertiary-fixed-dim/20">
          <div className="md:col-span-5">
            <h2 className="font-display text-[36px] md:text-[44px] leading-tight">
              Vow <span className="italic text-tertiary-fixed-dim">&amp;</span> Vellum
            </h2>
            <p className="mt-4 text-on-primary/70 text-[15px] leading-relaxed font-light max-w-sm">
              A digital wedding atelier. Composed in Paris &amp; Udaipur,
              delivered worldwide.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-tertiary-fixed-dim mb-4">Atelier</p>
            <ul className="space-y-2 text-on-primary/80 text-[14px] font-light">
              <li><a href="#atelier" className="hover:text-tertiary-fixed-dim">Craft</a></li>
              <li><a href="#collections" className="hover:text-tertiary-fixed-dim">Collections</a></li>
              <li><a href="#journey" className="hover:text-tertiary-fixed-dim">Journey</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-tertiary-fixed-dim mb-4">Studio</p>
            <ul className="space-y-2 text-on-primary/80 text-[14px] font-light">
              <li><a href="#" className="hover:text-tertiary-fixed-dim">Inquiry</a></li>
              <li><a href="#" className="hover:text-tertiary-fixed-dim">Journal</a></li>
              <li><Link to="/portal" className="hover:text-tertiary-fixed-dim">Live sample</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-tertiary-fixed-dim mb-4">Correspondence</p>
            <p className="text-on-primary/80 text-[14px] font-light">atelier@vowandvellum.com</p>
            <p className="text-on-primary/60 text-[13px] font-light italic mt-2">Replies within one working day.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-[11px] tracking-[0.2em] uppercase text-on-primary/50 font-semibold">
          <p>© 2026 Vow &amp; Vellum</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-tertiary-fixed-dim">Privacy</a>
            <a href="#" className="hover:text-tertiary-fixed-dim">Terms</a>
            <a href="#" className="hover:text-tertiary-fixed-dim">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="bg-surface text-on-surface font-body">
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <FeatureBento />
        <Collections />
        <Journey />
        <Testimonial />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
