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
        source: '/api/deliveryPerson/:path*',
        destination: 'http://localhost:5000/api/deliveryPerson/:path*',
      },
      {
        source: '/api/auth/:path*',
        destination: 'http://localhost:5000/api/auth/:path*',
      },
      {
        source: '/api/user/:path*',
        destination: 'http://localhost:5000/api/user/:path*',
      },
      {
        source: '/api/order/:path*',
        destination: 'http://localhost:5000/api/order/:path*',
      },
    ];
  },
};

export default nextConfig;
