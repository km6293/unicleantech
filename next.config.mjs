/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default withVideos(nextConfig);
