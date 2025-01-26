import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  env: {
      NEXT_TELEMETRY_DISABLED: '1',
    },
  typescript: {
    ignoreBuildErrors: true,
  }

};

export default nextConfig;
