/** @type {import('next').NextConfig} */

// STATIC_EXPORT=1 produces a plain "out" folder for Netlify drag-and-drop.
// Without it, the normal server build is used (for Git-based Netlify deploys).
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  ...(isStaticExport && { output: "export" }),
  images: {
    unoptimized: isStaticExport,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // Stable module IDs improve long-term caching of client chunks.
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};

module.exports = nextConfig;
