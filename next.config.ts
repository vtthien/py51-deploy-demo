import type { NextConfig } from "next";

// PY51: bo cacheComponents/partialPrefetching (project khong dung "use cache").
// Khi bat cacheComponents, trang loi o PY51.40 tra HTTP 200 thay vi 500
// (static shell cua layout da gui truoc khi loi xay ra) -> khong loc duoc theo 500 tren Vercel Logs.
const nextConfig: NextConfig = {
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
