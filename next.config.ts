import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://192.168.1.16"],
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;