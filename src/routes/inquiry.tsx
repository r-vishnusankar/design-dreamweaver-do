import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import type { PackageTier } from "@virtual-invite/types";
import { BrandMark } from "@/components/brand-mark";
import { BRAND_EMAIL, BRAND_NAME, pricingPackages, services } from "@/lib/site-config";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: `Inquiry | ${BRAND_NAME}` },
      {
        name: "description",
        content: "Request a custom digital invitation website for your celebration.",
      },
    ],
  }),
  component: InquiryPage,
});

const EVENT_TYPES = services.map((s) => ({ value: s.type, label: s.title }));
const PACKAGE_OPTIONS = pricingPackages.map((p) => ({
  value: p.id,
  label: `${p.name} — ${p.priceLabel} · ${p.tagline}`,
}));

/** Formspree endpoint from env, e.g. https://formspree.io/f/xxxxxx or just xxxxxx */
function formspreeEndpoint() {
  const raw = (import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined)?.trim();
  if (!raw) return "";
  if (raw.startsWith("http")) return raw;
  return `https://formspree.io/f/${raw}`;
}

type Status = "idle" | "submitting" | "success" | "error";

function InquiryPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const endpoint = formspreeEndpoint();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const eventType = String(form.get("eventType") ?? "wedding");
    const packageTier = String(form.get("packageTier") ?? "essential") as PackageTier;
    const message = String(form.get("message") ?? "");
    const pkg = pricingPackages.find((p) => p.id === packageTier);

    if (!endpoint) {
      // Fallback if Formspree is not configured yet
      const subject = encodeURIComponent(
        `${BRAND_NAME} inquiry — ${eventType} · ${pkg?.name ?? packageTier}`,
      );
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nEvent: ${eventType}\nPackage: ${pkg?.name ?? packageTier} (${pkg?.priceLabel ?? ""})\n\n${message}`,
      );
      window.location.href = `mailto:${BRAND_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      name,
      email,
      phone,
      eventType,
      package: pkg?.name ?? packageTier,
      packagePrice: pkg?.priceLabel ?? "",
      message,
      _subject: `${BRAND_NAME} inquiry — ${eventType} · ${pkg?.name ?? packageTier}`,
      _replyto: email,
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string; errors?: unknown } | null;
        throw new Error(data?.error || "Could not send your inquiry. Please try again.");
      }

      formEl.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please email us instead.");
    }
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body px-5 py-24 md:py-32">
      <div className="max-w-xl mx-auto">
        <Link to="/" className="inline-flex mb-10 hover:opacity-90 transition-opacity">
          <BrandMark />
        </Link>
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-4">
          Begin
        </p>
        <h1 className="font-display text-primary text-[36px] md:text-[48px] leading-tight tracking-tight">
          Start your invitation
        </h1>
        <p className="mt-4 text-on-surface-variant font-light leading-relaxed">
          Tell us about your celebration. Choose Essential (₹999), Signature (₹2,999), Atelier
          (₹9,999), or request a custom quote.
        </p>

        {status === "success" ? (
          <div className="mt-10 p-6 bg-surface-container text-on-surface-variant space-y-3">
            <p className="font-display text-primary text-[22px]">Thank you</p>
            <p className="font-light leading-relaxed">
              Your inquiry is on its way. We reply within one working day.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary border-b border-primary/40 pb-0.5"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone (optional)" name="phone" type="tel" />
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-on-tertiary-container mb-2">
                Occasion
              </label>
              <select
                name="eventType"
                className="w-full border border-outline-variant bg-surface px-4 py-3 text-sm"
                defaultValue="wedding"
              >
                {EVENT_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-on-tertiary-container mb-2">
                Package
              </label>
              <select
                name="packageTier"
                className="w-full border border-outline-variant bg-surface px-4 py-3 text-sm"
                defaultValue="signature"
              >
                {PACKAGE_OPTIONS.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-on-tertiary-container mb-2">
                Tell us about your event
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full border border-outline-variant bg-surface px-4 py-3 text-sm resize-y"
                placeholder="Date, location, design inspiration, preferred domain…"
              />
            </div>

            {/* Honeypot for bots */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            {status === "error" && (
              <p className="text-sm text-red-800 bg-red-50 border border-red-200 px-4 py-3">
                {errorMessage} Or email{" "}
                <a href={`mailto:${BRAND_EMAIL}`} className="underline">
                  {BRAND_EMAIL}
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 bg-primary text-on-primary text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send inquiry"}
            </button>
          </form>
        )}

        <p className="mt-8 text-sm text-on-surface-variant font-light">
          Or email us directly at{" "}
          <a href={`mailto:${BRAND_EMAIL}`} className="text-primary hover:underline">
            {BRAND_EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-on-tertiary-container mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-outline-variant bg-surface px-4 py-3 text-sm"
      />
    </div>
  );
}
