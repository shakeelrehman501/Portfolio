import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
   images: {
    unoptimized: true,    // 👈 disable Image Optimization
  },
};

export default nextConfig;
