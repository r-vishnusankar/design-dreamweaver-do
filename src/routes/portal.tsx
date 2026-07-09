import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "Guest Portal | The Wedding of Arjun & Meera | Vow & Vellum" },
      {
        name: "description",
        content:
          "Your digital guest pass, itinerary, and destination details for the wedding of Arjun & Meera at Amanbagh Sanctuary, Rajasthan.",
      },
      { property: "og:title", content: "Guest Portal | Arjun & Meera" },
      {
        property: "og:description",
        content: "Your digital guest pass, itinerary, and destination details.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portal" },
    ],
    links: [{ rel: "canonical", href: "/portal" }],
  }),
  component: GuestPortal,
});

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC2WAH5lW7J7WWuMON08rB1rTPc80-Ui4Swn5ojQa9YqqMVEFMACtAQ1ZqVMHM5x9dXAXXxFgJmoOOg52qxHfMhcaiLsDh31PzekpEWVv9b50hdEzr1O740jHwWzr2oi4jKRWfOWr61snGskEtP4gZ9DC1JNh83rsUpYY1VSQ9qtgcYLR0VMau4pXlyJcOhW6VXrcGMbQbZsM2ZLo9J8InMP6q2y2KgNpkfJtaMW38ANIz6KQZ5yFUG";
const MAP_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC1V-8gVQ7FrCcqRNoCG24tyK0XJBjp5p0N5HjwZY6Se94ZAXTxsvjNO-VoWB0aXIUUU70F0SbND3A3H7Tp5H3J5cgGbN-cAPwkx5UEwc9O0438-MOkPs2ajO0QYUmRZ-TjMDaAl3BV2E10lVYwUVnYaLGClFvLuPBvkaoZiT7IKZFQNUy0IogNpEyYkqTW5yLukgNJoXYWxzerG4PQfR2loMqEfdPn81SQC7_BBsVNnFo-qttawLfD";

function useCountdown(target: number) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const d = now === null ? 0 : Math.max(0, target - now);
  const days = Math.floor(d / 86400000);
  const hours = Math.floor((d % 86400000) / 3600000);
  const mins = Math.floor((d % 3600000) / 60000);
  const fmt = (n: number) => (now === null ? "—" : String(n).padStart(2, "0"));
  return { days: fmt(days), hours: fmt(hours), mins: fmt(mins) };
}


function QRGrid() {
  const [cells, setCells] = useState<boolean[]>(() => Array(64).fill(false));
  useEffect(() => {
    setCells(Array.from({ length: 64 }, () => Math.random() > 0.6));
  }, []);
  return (
    <div className="w-full h-full opacity-10 absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-2">
      {cells.map((on, i) => (
        <div key={i} className={on ? "bg-primary" : ""} />
      ))}
    </div>
  );
}


function GuestPortal() {
  const target = useMemo(() => new Date("2026-10-25T16:30:00").getTime(), []);
  const { days, hours, mins } = useCountdown(target);

  return (
    <div className="font-body text-on-surface">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 flex justify-between items-center px-5 md:px-16 h-20">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
          <span className="font-display text-2xl md:text-3xl text-primary tracking-tight">
            Vow &amp; Vellum
          </span>
        </div>
        <div className="hidden md:flex gap-8 items-center text-[12px] font-semibold tracking-[0.15em] uppercase">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Studio</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Gallery</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Journey</a>
          <a className="text-primary font-bold" href="#">Portal</a>
        </div>
        <span className="material-symbols-outlined text-primary cursor-pointer">account_circle</span>
      </nav>

      <main className="relative">
        {/* Hero */}
        <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center text-center px-5">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full parallax-bg"
              style={{ backgroundImage: `url('${HERO_IMG}')` }}
            />
            <div className="absolute inset-0 bg-primary/20 backdrop-brightness-75" />
          </div>
          <div className="relative z-10 space-y-6">
            <p className="text-[12px] font-semibold text-surface tracking-[0.3em] uppercase">
              Join Us For The Celebration
            </p>
            <h1 className="font-display italic text-surface text-[40px] leading-[1.1] md:text-[64px] tracking-tight">
              The Wedding of Arjun &amp; Meera
            </h1>
            <div className="flex gap-4 md:gap-8 justify-center mt-12 items-center">
              <div className="flex flex-col">
                <span className="font-display text-[32px] md:text-[40px] gold-shimmer">{days}</span>
                <span className="text-[12px] font-semibold text-surface/80 tracking-[0.15em]">DAYS</span>
              </div>
              <div className="w-px h-12 bg-surface/20" />
              <div className="flex flex-col">
                <span className="font-display text-[32px] md:text-[40px] gold-shimmer">{hours}</span>
                <span className="text-[12px] font-semibold text-surface/80 tracking-[0.15em]">HOURS</span>
              </div>
              <div className="w-px h-12 bg-surface/20" />
              <div className="flex flex-col">
                <span className="font-display text-[32px] md:text-[40px] gold-shimmer">{mins}</span>
                <span className="text-[12px] font-semibold text-surface/80 tracking-[0.15em]">MINS</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <span className="material-symbols-outlined text-surface">expand_more</span>
          </div>
        </section>

        {/* Guest Pass Bento */}
        <section className="py-24 md:py-[120px] max-w-[1280px] mx-auto px-5 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Digital Guest Pass */}
          <div className="md:col-span-5 vellum-card p-12 rounded-xl flex flex-col items-center justify-center space-y-8 shadow-[0px_4px_20px_rgba(31,31,31,0.04)]">
            <div className="text-center space-y-2">
              <h3 className="font-display text-2xl text-primary">Your Guest Pass</h3>
              <p className="text-secondary">A. Sharma &amp; Guest</p>
            </div>
            <div className="p-4 bg-surface border border-outline-variant/50 rounded-lg">
              <div className="w-48 h-48 bg-white flex items-center justify-center relative">
                <QRGrid />
                <span className="material-symbols-outlined filled text-primary text-4xl relative z-10">
                  auto_awesome
                </span>
              </div>
            </div>
            <p className="text-[12px] font-semibold tracking-[0.15em] text-center opacity-60">
              TABLE 12 • SEATING A
            </p>
            <button className="w-full py-4 bg-primary text-on-primary text-[12px] font-semibold tracking-[0.15em] rounded-sm hover:-translate-y-0.5 transition-all duration-300 shadow-lg">
              ADD TO APPLE WALLET
            </button>
          </div>

          {/* Event Details */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="vellum-card p-10 rounded-xl flex-grow shadow-[0px_4px_20px_rgba(31,31,31,0.04)] relative overflow-hidden">
              <h3 className="font-display text-2xl text-primary mb-8">Weekend Itinerary</h3>
              <div className="space-y-8 relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-outline-variant/30" />
                {[
                  {
                    date: "FRI, OCT 24 • 6:00 PM",
                    title: "The Welcome Sangeet",
                    desc: "Evening of music, dance, and cocktails at the Grand Terrace.",
                    accent: false,
                  },
                  {
                    date: "SAT, OCT 25 • 4:30 PM",
                    title: "The Wedding Ceremony",
                    desc: "A sacred exchange of vows under the Banyan Tree Canopy.",
                    accent: true,
                  },
                  {
                    date: "SAT, OCT 25 • 8:00 PM",
                    title: "Dinner & Revelry",
                    desc: "Banquet and dancing in the Celestial Ballroom.",
                    accent: false,
                  },
                ].map((e) => (
                  <div key={e.title} className="flex gap-6 relative">
                    <div
                      className={
                        e.accent
                          ? "w-4 h-4 rounded-full bg-primary z-10 shrink-0 mt-1"
                          : "w-4 h-4 rounded-full bg-tertiary-fixed-dim border-4 border-surface z-10 shrink-0 mt-1"
                      }
                    />
                    <div>
                      <p
                        className={`text-[12px] font-semibold tracking-[0.15em] mb-1 ${
                          e.accent ? "text-on-primary-fixed-variant" : "text-on-tertiary-container"
                        }`}
                      >
                        {e.date}
                      </p>
                      <h4 className="font-display text-[18px] text-on-surface">{e.title}</h4>
                      <p className="text-secondary text-base mt-1">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-surface-container p-8 rounded-xl flex flex-col justify-between cursor-pointer hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-tertiary" style={{ fontSize: 30 }}>
                  restaurant_menu
                </span>
                <div className="mt-4">
                  <p className="font-display text-[18px]">Dietary RSVP</p>
                  <p className="text-secondary text-base">Update your preferences</p>
                </div>
              </div>
              <div className="bg-secondary-container p-8 rounded-xl flex flex-col justify-between cursor-pointer hover:bg-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 30 }}>
                  card_giftcard
                </span>
                <div className="mt-4">
                  <p className="font-display text-[18px]">Registry</p>
                  <p className="text-secondary text-base">Vow &amp; Vellum Curated</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map & Venue */}
        <section className="bg-surface-container-low py-24 md:py-[120px]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-16">
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
              <h2 className="font-display text-[40px] leading-tight text-primary">The Destination</h2>
              <div className="relative py-4">
                <div className="h-px bg-outline-variant/30 w-full" />
                <div className="divider-diamond" />
              </div>
              <p className="text-[18px] leading-relaxed text-secondary">
                The Amanbagh Sanctuary, nestled in the Aravalli Hills of Rajasthan. A place
                where time stands still among ruins of ancient empires.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl aspect-video relative group">
              <div className="absolute inset-0">
                <img
                  alt="Artistic map of Amanbagh Sanctuary Rajasthan"
                  className="w-full h-full object-cover"
                  src={MAP_IMG}
                />
              </div>
              <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-96 vellum-card p-8 rounded-lg shadow-2xl space-y-4 transition-transform duration-500 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <div>
                    <h4 className="font-display text-[20px] text-primary">Amanbagh Sanctuary</h4>
                    <p className="text-secondary">
                      Ajabgarh Village, Alwar,
                      <br />
                      Rajasthan 301027, India
                    </p>
                  </div>
                </div>
                <button className="w-full py-3 border border-primary text-primary text-[12px] font-semibold tracking-[0.15em] hover:bg-primary hover:text-on-primary transition-colors">
                  GET DIRECTIONS
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Message from Couple */}
        <section className="py-24 md:py-[120px] text-center px-5">
          <div className="max-w-xl mx-auto space-y-10">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: 48 }}>
              format_quote
            </span>
            <p className="font-display italic text-2xl text-on-surface-variant leading-relaxed">
              "Our journey together has been a tapestry of shared moments and dreams. We cannot
              wait to begin this new chapter surrounded by the people who mean the most to us."
            </p>
            <div className="space-y-2">
              <p className="text-[12px] font-semibold tracking-[0.15em] text-primary">
                WITH ALL OUR LOVE,
              </p>
              <p className="font-display text-[32px]">Arjun &amp; Meera</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-primary text-on-primary px-5 md:px-16 py-16 flex flex-col md:flex-row justify-between items-center gap-12 mt-24 md:mt-[120px]">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="font-display text-[32px] text-on-primary-container">Vow &amp; Vellum</h2>
          <p className="text-on-primary/80">© 2026 Vow &amp; Vellum. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-[12px] font-semibold tracking-[0.15em] uppercase">
          <a className="text-on-primary/80 hover:text-tertiary-fixed-dim transition-colors" href="#">The Experience</a>
          <a className="text-on-primary/80 hover:text-tertiary-fixed-dim transition-colors" href="#">Artistry</a>
          <a className="text-on-primary/80 hover:text-tertiary-fixed-dim transition-colors" href="#">Inquiry</a>
          <a className="text-on-primary/80 hover:text-tertiary-fixed-dim transition-colors" href="#">Privacy</a>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full border border-on-primary/20 flex items-center justify-center hover:border-on-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>share</span>
          </div>
          <div className="w-10 h-10 rounded-full border border-on-primary/20 flex items-center justify-center hover:border-on-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>mail</span>
          </div>
        </div>
      </footer>

      {/* Mobile Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center py-4 px-2 bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 z-50 rounded-t-xl shadow-[0px_4px_20px_rgba(31,31,31,0.04)]">
        {[
          { icon: "auto_awesome", label: "Studio", active: false },
          { icon: "auto_stories", label: "Gallery", active: false },
          { icon: "timeline", label: "Journey", active: false },
          { icon: "celebration", label: "Portal", active: true },
          { icon: "home", label: "Home", active: false },
        ].map((n) => (
          <div
            key={n.label}
            className={
              n.active
                ? "flex flex-col items-center justify-center text-primary scale-105 font-bold"
                : "flex flex-col items-center justify-center text-secondary opacity-60"
            }
          >
            <span className={`material-symbols-outlined ${n.active ? "filled" : ""}`}>{n.icon}</span>
            <span className="text-[10px] font-semibold tracking-[0.15em] mt-1">{n.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
