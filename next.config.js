/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dl.airtable.com",
        port: "",
        pathname: "/.attachments/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/vector-gratis/**",
      },
    ],
  },
});

module.exports = nextConfig;
