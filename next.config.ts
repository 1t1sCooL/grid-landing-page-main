import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  output: "export",
  images: {
    unoptimized: true,
  },
  // The `deploy` branch pins basePath to "/GridLandingPage" for the nginx
  // sub-path build. On `main` the export stays at the root, for Vercel.
};

export default nextConfig;
