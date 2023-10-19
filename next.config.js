const { withContentlayer } = require("next-contentlayer");
const withPwa = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...withPwa({
    dest: "public",
    register: true,
    skipWaiting: true,
  }),
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./my-loader.ts",
  },
};

module.exports = withContentlayer(nextConfig);
