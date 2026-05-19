import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cortext_ai_agent_website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
