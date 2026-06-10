import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  }
};

export default nextConfig;
