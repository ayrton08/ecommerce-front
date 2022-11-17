/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
