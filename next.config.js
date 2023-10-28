const { withContentlayer } = require("next-contentlayer");
const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    loader: "custom",
    loaderFile: "./my-loader.ts",
  },
};

module.exports = withContentlayer(nextConfig);
