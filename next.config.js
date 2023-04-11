/** @type {import('next').NextConfig} */
const withSvgr = require('next-svgr');

const nextConfig = withSvgr({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dl.airtable.com',
        pathname: '/.attachments/**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/vector-gratis/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'martech.org',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'media-www.canadiantire.ca',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/*/**',
      },
    ],
  },
});

module.exports = nextConfig;
