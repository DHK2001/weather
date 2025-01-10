import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  async rewrites() {
    return [
      {
        source: '/api-weather',
        destination: 'https://api.openweathermap.org/data/2.5/forecast',
      },
    ]
  },
};

export default nextConfig;
