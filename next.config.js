/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["media.graphassets.com"],
    // images domain must be defined here when using image component
  },
};

module.exports = nextConfig;
