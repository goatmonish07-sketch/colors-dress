/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> emits an `out/` folder Cloudflare Pages / any static host serves directly.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "loremflickr.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
