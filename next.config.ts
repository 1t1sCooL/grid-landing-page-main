import type { NextConfig } from "next";

/**
 * The production bundle is served by nginx from a sub-path
 * (https://mmalabugin.ru/GridLandingPage/), so basePath is injected at build
 * time. Locally NEXT_PUBLIC_BASE_PATH is empty and the app runs at "/".
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
