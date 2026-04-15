import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  trailingSlash: true,
  // Required for static export — disables Next.js image optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
