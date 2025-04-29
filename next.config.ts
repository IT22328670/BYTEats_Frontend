import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable more detailed logging if needed
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  images: {
    domains: ["res.cloudinary.com"], // Simple configuration
    // OR for newer Next.js versions (recommended):
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

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
      {
      source: '/api/reviews:path*',
      destination: 'http://localhost:5002/api/reviews:path*',
      },

      // Add payment API rewrite rules
      {
        source: '/api/payment/:path*',
        destination: 'http://localhost:5003/api/payment/:path*',
      },
      // Add specific rewrites for create-payment-intent
      {
        source: '/api/create-payment-intent',
        destination: 'http://localhost:5003/api/payment/add',
      },
      // Multiple ways to handle verify-payment - with query param
      {
        source: '/api/verify-payment',
        destination: 'http://localhost:5003/api/payment/verify/:payment_intent',
        has: [
          {
            type: 'query',
            key: 'payment_intent',
            value: '(?<payment_intent>.*)',
          },
        ],
      },
      // With path param
      {
        source: '/api/verify-payment/:paymentIntent',
        destination: 'http://localhost:5003/api/payment/verify/:paymentIntent',
      }
    ];
  },
};

export default nextConfig;