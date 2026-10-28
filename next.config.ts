import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/call", destination: "https://calendly.com/citationsagency/30min", permanent: false },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.citations.agency" }],
        destination: "https://citations.agency/:path*",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
