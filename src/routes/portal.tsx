import { createFileRoute, redirect } from "@tanstack/react-router";
import { portfolio } from "@/lib/site-config";

export const Route = createFileRoute("/portal")({
  beforeLoad: () => {
    const sample = portfolio.find((p) => p.featured) ?? portfolio[0];
    if (sample?.previewUrl.startsWith("http")) {
      throw redirect({ href: sample.previewUrl });
    }
  },
  component: PortalFallback,
});

function PortalFallback() {
  const sample = portfolio.find((p) => p.featured) ?? portfolio[0];
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-5 text-center">
      <div className="max-w-md space-y-4">
        <h1 className="font-display text-3xl text-primary">Live sample</h1>
        <p className="text-on-surface-variant font-light">
          Run the sample invitation locally:{" "}
          <code className="text-sm bg-surface-container px-2 py-1">npm run dev:invitation</code>
        </p>
        {sample && (
          <a
            href={sample.previewUrl}
            className="inline-block mt-4 px-6 py-3 bg-primary text-on-primary text-[11px] font-semibold tracking-[0.2em] uppercase"
          >
            Open {sample.title}
          </a>
        )}
      </div>
    </div>
  );
}
