import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { PackageTier } from "@virtual-invite/types";
import { BRAND_EMAIL, BRAND_NAME, pricingPackages, services } from "@/lib/site-config";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: `Inquiry | ${BRAND_NAME}` },
      {
        name: "description",
        content: "Request a custom paper or digital invitation website for your celebration.",
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

function InquiryPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const eventType = String(form.get("eventType") ?? "wedding");
    const packageTier = String(form.get("packageTier") ?? "essential") as PackageTier;
    const message = String(form.get("message") ?? "");
    const pkg = pricingPackages.find((p) => p.id === packageTier);

    const subject = encodeURIComponent(
      `${BRAND_NAME} inquiry — ${eventType} · ${pkg?.name ?? packageTier}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEvent: ${eventType}\nPackage: ${pkg?.name ?? packageTier} (${pkg?.priceLabel ?? ""})\n\n${message}`,
    );
    window.location.href = `mailto:${BRAND_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body px-5 py-24 md:py-32">
      <div className="max-w-xl mx-auto">
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

        {submitted ? (
          <p className="mt-10 p-6 bg-surface-container text-on-surface-variant">
            Your email client should open with your inquiry. We reply within one working day.
          </p>
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
            <button
              type="submit"
              className="w-full py-4 bg-primary text-on-primary text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-primary/90 transition-colors"
            >
              Send inquiry
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
