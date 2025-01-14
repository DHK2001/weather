import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  async rewrites() {
    return [
      {
        source: '/openweathermap-forecast',
        destination: 'https://api.openweathermap.org/data/2.5/forecast',
      },
      {
        source: '/openweathermap-weather',
        destination: 'https://api.openweathermap.org/data/2.5/weather',
      },
    ]
  },
  images: {
    domains: ['openweathermap.org'],
  },
};

export default nextConfig;
