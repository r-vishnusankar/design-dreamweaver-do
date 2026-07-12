import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { portfolio } from "@/lib/site-config";

type PhonePreviewProps = {
  className?: string;
};

function isLocalHostname(hostname: string) {
  return hostname === "localhost" || hostname === "127.0.0.1";
}

/** True when the URL can safely load in the phone iframe on this host. */
function canEmbedPreview(url: string | undefined, studioIsLocal: boolean) {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    if (isLocalHostname(parsed.hostname)) return studioIsLocal;
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function PhonePreview({ className = "" }: PhonePreviewProps) {
  const samples = portfolio.length ? portfolio : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const sample = samples[activeIndex] ?? samples[0];
  const studioIsLocal =
    mounted &&
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

  const localFallback =
    sample?.slug === "arjun-meera-signature"
      ? "http://localhost:3000"
      : sample?.slug === "rohan-diya" || sample?.slug === "safna-jithin"
        ? "http://localhost:5175"
        : "http://localhost:5174";

  const configured = sample?.previewUrl?.trim() || "";
  const previewUrl = studioIsLocal
    ? configured && !isLocalHostname(new URL(configured, "http://localhost").hostname)
      ? // Prefer local ports while developing the studio
        localFallback
      : configured || localFallback
    : configured;

  const embeddable = mounted && canEmbedPreview(previewUrl, studioIsLocal);
  const url =
    embeddable && previewUrl
      ? previewUrl.includes("?")
        ? `${previewUrl}&embed=phone`
        : `${previewUrl}?embed=phone`
      : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
    setShowHint(true);
  }, [activeIndex, url]);

  useEffect(() => {
    if (!mounted || !embeddable || loaded || failed) return;
    const t = setTimeout(() => setFailed(true), 12000);
    return () => clearTimeout(t);
  }, [mounted, embeddable, loaded, failed, url]);

  useEffect(() => {
    if (!loaded) return;
    const t = setTimeout(() => setShowHint(false), 4500);
    return () => clearTimeout(t);
  }, [loaded]);

  function switchTemplate(dir: -1 | 1) {
    if (samples.length < 2) return;
    setActiveIndex((i) => (i + dir + samples.length) % samples.length);
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {samples.length > 1 && (
        <div className="mb-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => switchTemplate(-1)}
            className="w-9 h-9 rounded-full border border-outline-variant/50 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
            aria-label="Previous template"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
              chevron_left
            </span>
          </button>

          <div className="flex flex-col items-center min-w-[160px]">
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-on-tertiary-container">
              Template {activeIndex + 1} of {samples.length}
            </p>
            <p className="font-display text-primary text-[18px] mt-1">{sample?.title}</p>
            <p className="text-[11px] text-on-surface-variant font-light mt-0.5">{sample?.tag}</p>
          </div>

          <button
            type="button"
            onClick={() => switchTemplate(1)}
            className="w-9 h-9 rounded-full border border-outline-variant/50 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
            aria-label="Next template"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
              chevron_right
            </span>
          </button>
        </div>
      )}

      {samples.length > 1 && (
        <div className="flex gap-2 mb-5">
          {samples.map((s, i) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Show ${s.title}`}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-outline-variant hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      )}

      <div className="phone-frame relative mx-auto select-none">
        <div className="phone-btn phone-btn-silent" aria-hidden />
        <div className="phone-btn phone-btn-vol-up" aria-hidden />
        <div className="phone-btn phone-btn-vol-down" aria-hidden />
        <div className="phone-btn phone-btn-power" aria-hidden />

        <div className="phone-bezel">
          <div className="phone-notch" aria-hidden>
            <span className="phone-notch-camera" />
          </div>

          <div className="phone-screen relative">
            {embeddable && !loaded && !failed && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-surface gap-3">
                <span className="material-symbols-outlined text-primary animate-pulse" style={{ fontSize: 28 }}>
                  smartphone
                </span>
                <p className="text-[11px] tracking-[0.2em] uppercase text-on-surface-variant font-semibold">
                  Loading preview…
                </p>
              </div>
            )}

            {embeddable && failed && !loaded && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-surface gap-3 px-6 text-center">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 28 }}>
                  wifi_off
                </span>
                <p className="text-[12px] text-on-surface-variant font-light leading-relaxed">
                  Preview couldn&apos;t load right now.
                </p>
                <Link
                  to="/inquiry"
                  className="mt-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary border-b border-primary/40 pb-0.5"
                >
                  Start an inquiry
                </Link>
              </div>
            )}

            {!embeddable && sample && (
              <div className="absolute inset-0 z-10">
                <img
                  src={sample.image}
                  alt={`${sample.title} invitation preview`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-on-primary">
                  <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-tertiary-fixed-dim">
                    {sample.tag}
                  </p>
                  <p className="font-display text-[22px] leading-tight mt-1">{sample.title}</p>
                  <Link
                    to="/inquiry"
                    className="mt-3 inline-block text-[10px] font-semibold tracking-[0.2em] uppercase border-b border-on-primary/40 pb-0.5"
                  >
                    Request this look
                  </Link>
                </div>
              </div>
            )}

            {showHint && loaded && embeddable && (
              <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 pointer-events-none animate-bounce">
                <div className="flex flex-col items-center gap-1 rounded-full bg-primary/85 px-4 py-2 text-on-primary backdrop-blur">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll inside</span>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                    expand_more
                  </span>
                </div>
              </div>
            )}

            {embeddable && url && (
              <iframe
                key={`${sample?.slug ?? "preview"}-${url}`}
                title={sample ? `${sample.title} — mobile preview` : "Invitation preview"}
                src={url}
                className="phone-iframe"
                onLoad={() => {
                  setLoaded(true);
                  setFailed(false);
                }}
                allow="autoplay; clipboard-write"
              />
            )}
          </div>

          <div className="phone-home-bar" aria-hidden />
        </div>
      </div>

      <p className="mt-6 text-center text-[12px] text-on-surface-variant font-light max-w-[280px]">
        Switch packages above — Essential ₹999 (two looks) or Signature ₹2,999.
      </p>
      <Link
        to="/inquiry"
        className="mt-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-on-tertiary-container hover:text-primary transition-colors"
      >
        Inquire about this package
      </Link>
    </div>
  );
}
