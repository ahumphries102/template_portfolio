// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.all-free-download.com",
      },
    ],
  },
}
module.exports = nextConfig
