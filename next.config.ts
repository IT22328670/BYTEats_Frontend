import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/restaurant/:path*',
        destination: 'http://localhost:5000/api/restaurant/:path*',
      },
      {
        source: '/api/cart/:path*',
        destination: 'http://localhost:5002/api/cart/:path*',
      },
      {
        source: '/api/delivery/:path*',
        destination: 'http://localhost:5000/api/delivery/:path*',
      },
      {
        source: '/api/auth/:path*',
        destination: 'http://localhost:5000/api/auth/:path*',
      },
      {
        source: '/api/user/:path*',
        destination: 'http://localhost:5000/api/user/:path*',
      },
    ];
  },
};

export default nextConfig;
