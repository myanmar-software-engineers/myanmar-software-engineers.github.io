const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./my-loader.ts",
  },
};

module.exports = withContentlayer(nextConfig);
