import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // desabilita otimização para sites estáticos
  },
};

export default nextConfig;
