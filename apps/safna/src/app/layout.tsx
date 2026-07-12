import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Inter, Playfair_Display } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // Netlify exposes the site URL as the URL env var at build time.
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  title: "Arjun & Meera — Wedding Invitation",
  description:
    "A Signature cinematic wedding invitation for Arjun Sharma & Meera Malhotra. Sunday, 25 October 2026 · Amanbagh, Alwar, Rajasthan.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Arjun & Meera — Wedding Invitation",
    description: "An interactive video invitation — open and scroll. 25 October 2026.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arjun & Meera — 25 October 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun & Meera — Wedding Invitation",
    description: "An interactive video invitation — open and scroll. 25 October 2026.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${greatVibes.variable} ${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
