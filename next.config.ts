import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix: "/resume/", // 替换为你的 GitHub 仓库名称
  images: {
    unoptimized: true, // 如果你使用了图片，GitHub Pages 上的图片优化会导致一些问题
  },
};

export default nextConfig;
