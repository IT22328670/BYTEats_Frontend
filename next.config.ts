import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/cart/:path*',
        destination: 'http://localhost:5002/api/cart/:path*',
      },
    ];
  },
};

export default nextConfig;
