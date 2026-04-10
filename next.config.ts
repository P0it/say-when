import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "@apps-in-toss/web-framework": "./src/lib/web-framework-stub.ts",
    },
  },
};

export default nextConfig;
