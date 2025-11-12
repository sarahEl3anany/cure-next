import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|jsx|tsx)$/] }, // Ensure it only applies to JS/TS files
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
