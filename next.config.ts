import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "api.microlink.io" // Microlink Image Preview
    ],
    localPatterns: [
      {
        pathname: "/assets/images/**",
        search: ""
      }
    ]
  },

  eslint: {
    ignoreDuringBuilds: true
  },
  // output: "export",
  // assetPrefix: "https://www.adhaghani.com"
};

export default nextConfig;
