const { withContentCollections } = require("@content-collections/next");
const createNextIntlPlugin = require("next-intl/plugin");
const path = require("path");

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    loader: "custom",
    loaderFile: "./my-loader.ts",
  },
};

module.exports = withContentCollections(withNextIntl(nextConfig));
