import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
  // Completely disable dev indicators (the Turbopack button)
  devIndicators: {
    buildActivity: false,
  },
  // Enable static export if needed for Firebase Hosting
  // output: 'export',
};

export default nextConfig;
