/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  crossOrigin: "anonymous",
  images: {
    domains: [
      "cdn.infinitybots.xyz",
    ],
  },
};
module.exports = nextConfig;
