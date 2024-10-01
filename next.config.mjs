/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default withVideos(nextConfig);
