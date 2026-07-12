import { createFileRoute, Link } from "@tanstack/react-router";
import { openSampleInPhone } from "@/components/phone-preview";
import { BRAND_NAME, portfolio } from "@/lib/site-config";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: `Portfolio | ${BRAND_NAME}` },
      {
        name: "description",
        content: "Browse invitation looks from The Virtual Invite — preview in the phone on our site.",
      },
    ],
  }),
  component: PortalPage,
});

function PortalPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body px-5 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-on-tertiary-container mb-4">
          Portfolio
        </p>
        <h1 className="font-display text-primary text-[36px] md:text-[48px] leading-tight tracking-tight">
          Sample invitations
        </h1>
        <p className="mt-4 text-on-surface-variant font-light leading-relaxed max-w-xl">
          Preview each look in the phone on our site. Full sample links are shared privately after
          you inquire — not published for public download.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {portfolio.map((sample) => (
            <button
              key={sample.slug}
              type="button"
              onClick={() => openSampleInPhone(sample.slug)}
              className="group block text-left"
            >
              <div className="aspect-[3/4] overflow-hidden bg-surface-container">
                <img
                  src={sample.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-4">
                <h2 className="font-display text-primary text-[22px]">{sample.title}</h2>
                <p className="mt-1 text-[12px] font-semibold tracking-[0.2em] uppercase text-on-surface-variant">
                  {sample.tag}
                </p>
                <p className="mt-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
                  See in phone →
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="/#experience"
            className="inline-flex px-8 py-4 bg-primary text-on-primary text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-primary/90 transition-colors"
          >
            Open phone preview
          </a>
          <Link
            to="/inquiry"
            className="inline-flex px-8 py-4 border border-outline-variant text-primary text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-surface-container transition-colors"
          >
            Start an inquiry
          </Link>
        </div>
      </div>
    </div>
  );
}
