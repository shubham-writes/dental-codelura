import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // Proxy unmatched routes to your existing dental_mockups deployment
        // Replace this destination URL with the actual vercel.app URL of your old project
        source: "/:path*",
        destination: "https://YOUR-OLD-VERCEL-APP-URL.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
