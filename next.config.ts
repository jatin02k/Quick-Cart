import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.nike.com",
      },
      {
        protocol: "https",
        hostname: "hewtlxgmvzhtcjzsfqnt.supabase.co",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // ✅ Increase limit (set to what you need)
    },
    
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
