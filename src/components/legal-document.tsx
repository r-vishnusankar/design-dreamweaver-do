import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand-mark";
import { BRAND_EMAIL } from "@/lib/site-config";

export function LegalDocument({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      <header className="border-b border-outline-variant/40 px-5 md:px-12 py-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <BrandMark />
          </Link>
          <Link
            to="/"
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors"
          >
            Back home
          </Link>
        </div>
      </header>

      <article className="px-5 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-4">
            {eyebrow}
          </p>
          <h1 className="font-display text-primary text-[36px] md:text-[48px] leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-sm text-on-surface-variant font-light">
            Last updated: {updated}
          </p>

          <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-on-surface-variant font-light [&_h2]:font-display [&_h2]:text-primary [&_h2]:text-[22px] [&_h2]:md:text-[26px] [&_h2]:tracking-tight [&_h2]:mb-3 [&_h2]:font-normal [&_h3]:text-on-surface [&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:tracking-wide [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:mb-3 [&_a]:text-primary [&_a]:underline-offset-2 hover:[&_a]:underline [&_strong]:text-on-surface [&_strong]:font-medium">
            {children}
          </div>

          <p className="mt-16 pt-8 border-t border-outline-variant/40 text-sm text-on-surface-variant font-light">
            Questions about this document? Email{" "}
            <a href={`mailto:${BRAND_EMAIL}`} className="text-primary hover:underline">
              {BRAND_EMAIL}
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
