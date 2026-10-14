import type { NextConfig } from "next";

// Static export for GitHub Pages. The deploy workflow sets NEXT_PUBLIC_BASE_PATH
// to the Pages sub-path (e.g. "/ved-vasundhara-website"); locally it is empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
