import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment, useEffect, useState } from "react";
import type { FeatureAvailability } from "@virtual-invite/types";
import { PhonePreview } from "@/components/phone-preview";
import {
  BRAND_EMAIL,
  BRAND_NAME,
  BRAND_TAGLINE,
  portfolio,
  pricingFeatures,
  pricingPackages,
  services,
} from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Virtual Invite — Premium paper & digital invitations" },
      {
        name: "description",
        content:
          "Custom invitation websites and printed stationery for weddings, save-the-dates, baby showers, and celebrations — crafted in India, shared worldwide.",
      },
      { property: "og:title", content: "The Virtual Invite — Paper & digital invitations" },
      {
        property: "og:description",
        content: "Beautiful invitations — printed, digital, or both. One studio for every occasion.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

const HERO =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80";

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
          {BRAND_NAME}
        </Link>
        <div className="hidden md:flex gap-10 items-center text-[11px] font-semibold tracking-[0.2em] uppercase text-on-surface-variant">
          <a className="hover:text-primary transition-colors" href="#services">Services</a>
          <a className="hover:text-primary transition-colors" href="#experience">Try it</a>
          <a className="hover:text-primary transition-colors" href="#collections">Portfolio</a>
          <a className="hover:text-primary transition-colors" href="#journey">Process</a>
          <a className="hover:text-primary transition-colors" href="#pricing">Pricing</a>
        </div>
        <Link
          to="/inquiry"
          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-5 py-2.5 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors"
        >
          Inquiry
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
          The Digital Invitation Studio
        </p>
        <h1 className="font-display text-surface leading-[1.02] tracking-tight text-[44px] sm:text-[68px] md:text-[92px] lg:text-[112px] max-w-[14ch]">
          Your celebration,
          <br />
          <span className="italic text-tertiary-fixed-dim">beautifully</span> shared.
        </h1>
        <p className="mt-10 max-w-xl text-surface/85 text-[17px] leading-relaxed font-light">
          {BRAND_TAGLINE} Custom paper stationery and digital invitation websites for weddings,
          save-the-dates, baby showers, birthdays, and every milestone — crafted in India,
          shared worldwide.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link
            to="/inquiry"
            className="inline-flex items-center gap-3 px-8 py-4 bg-surface text-primary text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-tertiary-fixed-dim transition-colors"
          >
            Start your invitation
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
          </Link>
          <div className="text-surface/80">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase">4.9 · loved by 2,000+ couples</p>
            <p className="text-[13px] text-surface/60 mt-1 font-light italic">From ₹999 · three packages to choose from</p>
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
          Not a template.
          <br />
          <span className="italic text-on-surface-variant">A bespoke invitation experience.</span>
        </h2>
        <p className="mt-10 text-[17px] md:text-[19px] leading-[1.7] text-on-surface-variant max-w-2xl mx-auto font-light">
          Every celebration deserves a thoughtful first impression. {BRAND_NAME} designs matching
          paper and digital invitations — the printed keepsake in hand, the beautiful link to share.
          Weddings, baby showers, milestones: one studio, crafted around your story.
        </p>
      </div>
    </section>
  );
}

function FeatureBento() {
  return (
    <section id="services" className="pb-32 md:pb-48 px-5 md:px-12 bg-surface">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-16 gap-8 flex-wrap">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-4">
              Our services
            </p>
            <h3 className="font-display text-primary text-[32px] md:text-[48px] leading-[1.1] tracking-tight max-w-2xl">
              Every occasion,
              <br />
              <span className="italic">beautifully invited.</span>
            </h3>
          </div>
          <p className="text-on-surface-variant max-w-sm text-[15px] leading-relaxed font-light">
            Paper stationery and custom digital invitation websites for life&apos;s
            milestones — crafted in India, shared worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, i) => {
            const isFeatured = i === 0;
            return (
              <Link
                key={service.type}
                to="/inquiry"
                className={`group relative flex flex-col overflow-hidden transition-colors ${
                  isFeatured
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[360px] lg:min-h-full bg-primary text-on-primary"
                    : i % 3 === 1
                      ? "bg-secondary-container hover:bg-secondary-fixed min-h-[280px]"
                      : "bg-surface-container hover:bg-surface-container-high min-h-[280px]"
                }`}
              >
                {isFeatured ? (
                  <>
                    <img
                      src={service.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/35" />
                    <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10">
                      <span
                        className="material-symbols-outlined text-tertiary-fixed-dim"
                        style={{ fontSize: 40 }}
                      >
                        {service.icon}
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-2 text-tertiary-fixed-dim">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <h4 className="font-display leading-tight text-[28px] md:text-[34px]">
                          {service.title}
                        </h4>
                        <p className="mt-3 text-[14px] leading-relaxed font-light text-on-primary/75 max-w-md">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative h-36 md:h-40 overflow-hidden shrink-0">
                      <img
                        src={service.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: 28 }}
                      >
                        {service.icon}
                      </span>
                      <div className="mt-6">
                        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-2 text-on-tertiary-container">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <h4 className="font-display leading-tight text-[22px] text-primary">
                          {service.title}
                        </h4>
                        <p className="mt-3 text-[14px] leading-relaxed font-light text-on-surface-variant">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </Link>
            );
          })}
        </div>

        <div className="mt-16 pt-10 border-t border-outline-variant/40">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-6">
            Included with every digital invitation
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-on-surface-variant text-[14px] font-light">
            {[
              "Countdown & location",
              "Beautiful templates",
              "Private shareable link",
              "Custom domain options",
              "RSVP (Signature+)",
              "Photo album (Atelier)",
              "YouTube live (Atelier)",
              "Music (Signature+)",
              "WhatsApp share",
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
  return (
    <section id="collections" className="py-32 md:py-48 px-5 md:px-12 bg-surface-container-low">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-4">
              Portfolio
            </p>
            <h3 className="font-display text-primary text-[32px] md:text-[52px] leading-[1.1] tracking-tight max-w-2xl">
              Live invitation
              <br />
              <span className="italic">websites.</span>
            </h3>
          </div>
          <Link
            to="/portal"
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-primary hover:text-on-tertiary-container transition-colors"
          >
            View live sample
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>north_east</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolio.map((it, i) => {
            const live = it.previewUrl.startsWith("https://");
            const className = "group cursor-pointer";
            const body = (
              <>
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
                <img src={it.image} alt="" className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-[0.25em] uppercase text-surface bg-primary/60 backdrop-blur px-3 py-1.5">
                  N°0{i + 1}
                </span>
              </div>
              <div className="pt-5">
                <h4 className="font-display text-primary text-[22px] leading-tight">{it.title}</h4>
                <p className="text-on-surface-variant text-[12px] font-semibold tracking-[0.2em] uppercase mt-2">{it.tag}</p>
              </div>
              </>
            );
            return live ? (
              <a key={it.slug} href={it.previewUrl} target="_blank" rel="noopener noreferrer" className={className}>
                {body}
              </a>
            ) : (
              <Link key={it.slug} to="/inquiry" className={className}>
                {body}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LiveExperience() {
  return (
    <section id="experience" className="py-32 md:py-48 px-5 md:px-12 bg-surface overflow-hidden">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative">
            <div
              className="absolute -inset-10 rounded-full opacity-40 blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(228,194,129,0.45) 0%, rgba(78,12,33,0.12) 50%, transparent 70%)",
              }}
            />
            <PhonePreview className="relative z-10" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-4">
            Try the experience
          </p>
          <h3 className="font-display text-primary text-[32px] md:text-[52px] leading-[1.1] tracking-tight max-w-lg">
            Scroll it like
            <br />
            <span className="italic">your guests will.</span>
          </h3>
          <p className="mt-6 text-on-surface-variant text-[16px] leading-relaxed font-light max-w-md">
            Switch between live templates in the phone — two Essential looks and one Signature video
            invite. Scroll inside to feel the guest experience.
          </p>

          <ul className="mt-10 space-y-4">
            {[
              { icon: "swap_horiz", text: "Switch templates with the arrows above the phone" },
              { icon: "touch_app", text: "Scroll inside the screen — it is a real live site" },
              { icon: "timer", text: "See the countdown tick in real time" },
              { icon: "location_on", text: "Venue, calendar & story — just like guests will see" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary shrink-0 mt-0.5" style={{ fontSize: 22 }}>
                  {item.icon}
                </span>
                <span className="text-[15px] font-light leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>

              <div className="mt-12 flex flex-wrap items-center gap-5">
            {portfolio.map((p) => (
              <a
                key={p.slug}
                href={p.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-primary hover:text-on-tertiary-container transition-colors"
              >
                {p.title}
                <span className="text-[9px] tracking-[0.12em] text-on-surface-variant font-medium normal-case">
                  ({p.tag.split("·")[0]?.trim()})
                </span>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                  open_in_new
                </span>
              </a>
            ))}
            <Link
              to="/inquiry"
              className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary hover:text-on-tertiary-container transition-colors"
            >
              Start yours →
            </Link>
          </div>
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

function FeatureCell({ value }: { value: FeatureAvailability }) {
  if (value === true) {
    return (
      <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
        check
      </span>
    );
  }
  if (value === false) {
    return <span className="text-outline-variant/60">—</span>;
  }
  if (value === "partial") {
    return <span className="text-[12px] text-on-tertiary-container font-medium">Limited</span>;
  }
  return <span className="text-[12px] text-on-surface-variant font-light">{value}</span>;
}

function Pricing() {
  const fixedPackages = pricingPackages.filter((p) => p.id !== "custom");
  const customPackage = pricingPackages.find((p) => p.id === "custom");
  const categories = [...new Set(pricingFeatures.map((f) => f.category))];
  const tiers: Array<"essential" | "signature" | "atelier"> = [
    "essential",
    "signature",
    "atelier",
  ];

  return (
    <section id="pricing" className="relative py-32 md:py-48 px-5 md:px-12 bg-surface-container-low overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-4">
            Packages
          </p>
          <h3 className="font-display text-primary text-[36px] md:text-[56px] leading-[1.05] tracking-tight">
            Three ways to
            <br />
            <span className="italic">invite beautifully.</span>
          </h3>
          <p className="mt-6 text-on-surface-variant text-[15px] font-light leading-relaxed">
            From countdown &amp; location, to custom domain &amp; music, to a full guest experience
            with live stream and photo album — plus custom quotes when you need more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {fixedPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`vellum-card p-8 md:p-10 rounded-sm flex flex-col ${
                pkg.featured
                  ? "shadow-2xl border-2 border-primary/25 relative"
                  : "shadow-[0px_4px_20px_rgba(31,31,31,0.04)]"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-[0.2em] uppercase bg-primary text-on-primary px-4 py-1">
                  Popular
                </span>
              )}
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container">
                {pkg.name}
              </p>
              <p className="mt-2 text-on-surface-variant text-sm font-light">{pkg.tagline}</p>
              <div className="flex items-baseline gap-2 mt-6">
                <span className="font-display text-primary text-[44px] md:text-[48px] leading-none">
                  {pkg.priceLabel}
                </span>
                <span className="text-on-surface-variant text-[12px] font-light">once</span>
              </div>
              <ul className="mt-8 space-y-3 text-[14px] text-on-surface-variant font-light flex-grow">
                {pkg.highlights.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary shrink-0 mt-0.5" style={{ fontSize: 18 }}>
                      check
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/inquiry"
                className={`mt-10 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors ${
                  pkg.featured
                    ? "bg-primary text-on-primary hover:bg-primary/90"
                    : "border border-primary text-primary hover:bg-primary hover:text-on-primary"
                }`}
              >
                Choose {pkg.name}
              </Link>
            </div>
          ))}
        </div>

        {customPackage && (
          <div className="mt-8 vellum-card p-8 md:p-10 rounded-sm flex flex-col md:flex-row md:items-center gap-8 md:gap-12 border border-outline-variant/40">
            <div className="flex-grow">
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container">
                {customPackage.name}
              </p>
              <h4 className="font-display text-primary text-[28px] md:text-[32px] mt-2 leading-tight">
                Need something unique?
              </h4>
              <p className="mt-2 text-on-surface-variant text-sm font-light max-w-xl">
                {customPackage.tagline}. Multi-language sites, paper + digital suites, extra pages,
                or anything outside the packages — we&apos;ll quote after a short call.
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-on-surface-variant font-light">
                {customPackage.highlights.slice(0, 4).map((f) => (
                  <li key={f} className="inline-flex items-center gap-2">
                    <span className="text-tertiary-fixed-dim">◆</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 text-center md:text-right">
              <p className="font-display text-primary text-[36px] leading-none">{customPackage.priceLabel}</p>
              <p className="text-[12px] text-on-surface-variant font-light mt-1 mb-5">pricing on request</p>
              <Link
                to="/inquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-on-primary text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
              >
                Request a custom quote
              </Link>
            </div>
          </div>
        )}

        {/* Feature comparison by category */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-3">
              Compare
            </p>
            <h4 className="font-display text-primary text-[28px] md:text-[36px] leading-tight">
              What&apos;s included, by category
            </h4>
            <p className="mt-4 md:hidden inline-flex items-center gap-2 text-[12px] text-on-surface-variant font-light">
              <span className="material-symbols-outlined text-on-tertiary-container animate-pulse" style={{ fontSize: 18 }}>
                swipe
              </span>
              Swipe sideways to see Signature &amp; Atelier
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface to-transparent md:hidden" />
            <div className="pointer-events-none absolute right-2 top-1/2 z-10 -translate-y-1/2 md:hidden">
              <span className="material-symbols-outlined text-primary/70" style={{ fontSize: 22 }}>
                chevron_right
              </span>
            </div>
            <div className="overflow-x-auto border border-outline-variant/40 bg-surface overscroll-x-contain touch-pan-x">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-outline-variant/40">
                  <th className="p-4 md:p-5 text-[11px] font-semibold tracking-[0.2em] uppercase text-on-tertiary-container w-[40%]">
                    Feature
                  </th>
                  {fixedPackages.map((pkg) => (
                    <th
                      key={pkg.id}
                      className={`p-4 md:p-5 text-center text-[11px] font-semibold tracking-[0.15em] uppercase ${
                        pkg.featured ? "text-primary bg-primary/[0.03]" : "text-on-surface-variant"
                      }`}
                    >
                      {pkg.name}
                      <span className="block mt-1 font-display text-[18px] tracking-normal normal-case font-normal">
                        {pkg.priceLabel}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <Fragment key={category}>
                    <tr className="bg-surface-container-low">
                      <td
                        colSpan={4}
                        className="px-4 md:px-5 py-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-on-tertiary-container"
                      >
                        {category}
                      </td>
                    </tr>
                    {pricingFeatures
                      .filter((f) => f.category === category)
                      .map((feature) => (
                        <tr
                          key={feature.id}
                          className="border-t border-outline-variant/25 hover:bg-surface-container-low/50"
                        >
                          <td className="p-4 md:p-5 text-[14px] text-on-surface font-light">
                            {feature.label}
                          </td>
                          {tiers.map((tier) => {
                            const pkg = fixedPackages.find((p) => p.id === tier);
                            return (
                              <td
                                key={tier}
                                className={`p-4 md:p-5 text-center ${
                                  pkg?.featured ? "bg-primary/[0.03]" : ""
                                }`}
                              >
                                <FeatureCell value={feature[tier]} />
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
            </div>
          </div>
          <p className="mt-3 md:hidden text-center text-[11px] text-on-surface-variant/80 font-light tracking-wide">
            ← swipe the table to compare all packages →
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
            <h2 className="font-display text-[36px] md:text-[44px] leading-tight">{BRAND_NAME}</h2>
            <p className="mt-4 text-on-primary/70 text-[15px] leading-relaxed font-light max-w-sm">
              Premium paper and digital invitations. Crafted in India, delivered worldwide.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-tertiary-fixed-dim mb-4">Services</p>
            <ul className="space-y-2 text-on-primary/80 text-[14px] font-light">
              <li><a href="#experience" className="hover:text-tertiary-fixed-dim">Try it</a></li>
              <li><a href="#collections" className="hover:text-tertiary-fixed-dim">Portfolio</a></li>
              <li><a href="#journey" className="hover:text-tertiary-fixed-dim">Process</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-tertiary-fixed-dim mb-4">Studio</p>
            <ul className="space-y-2 text-on-primary/80 text-[14px] font-light">
              <li><Link to="/inquiry" className="hover:text-tertiary-fixed-dim">Inquiry</Link></li>
              <li><Link to="/portal" className="hover:text-tertiary-fixed-dim">Live sample</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-tertiary-fixed-dim mb-4">Contact</p>
            <p className="text-on-primary/80 text-[14px] font-light">{BRAND_EMAIL}</p>
            <p className="text-on-primary/60 text-[13px] font-light italic mt-2">Replies within one working day.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-[11px] tracking-[0.2em] uppercase text-on-primary/50 font-semibold">
          <p>© {new Date().getFullYear()} {BRAND_NAME}</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-tertiary-fixed-dim">Privacy</Link>
            <Link to="/terms" className="hover:text-tertiary-fixed-dim">Terms</Link>
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
        <LiveExperience />
        <Collections />
        <Journey />
        <Testimonial />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
