import { createFileRoute, Link } from "@tanstack/react-router";
import { BRAND_NAME, portfolio } from "@/lib/site-config";

function isPublicHttps(url: string | undefined) {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: `Live samples | ${BRAND_NAME}` },
      {
        name: "description",
        content: "Browse sample invitation looks from The Virtual Invite.",
      },
    ],
  }),
  component: PortalPage,
});

function PortalPage() {
  const live = portfolio.filter((p) => isPublicHttps(p.previewUrl));

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
          {live.length
            ? "Open a live sample below — each one is a real guest experience."
            : "Live sample sites will appear here once they are published. Meanwhile, inquire to see packages and request a private preview."}
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {portfolio.map((sample) => {
            const href = isPublicHttps(sample.previewUrl) ? sample.previewUrl : null;
            const body = (
              <>
                <div className="aspect-[3/4] overflow-hidden bg-surface-container">
                  <img src={sample.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="pt-4">
                  <h2 className="font-display text-primary text-[22px]">{sample.title}</h2>
                  <p className="mt-1 text-[12px] font-semibold tracking-[0.2em] uppercase text-on-surface-variant">
                    {sample.tag}
                  </p>
                </div>
              </>
            );

            return href ? (
              <a key={sample.slug} href={href} target="_blank" rel="noopener noreferrer" className="group block">
                {body}
              </a>
            ) : (
              <div key={sample.slug} className="block">
                {body}
              </div>
            );
          })}
        </div>

        <Link
          to="/inquiry"
          className="mt-12 inline-flex px-8 py-4 bg-primary text-on-primary text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-primary/90 transition-colors"
        >
          Start an inquiry
        </Link>
      </div>
    </div>
  );
}
