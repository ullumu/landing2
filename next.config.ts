import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // aktifkan static export
  // basePath: "/landing2", // ganti sesuai nama repo
  images: { unoptimized: true },
};

export default nextConfig;
