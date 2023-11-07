/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    dangerouslyAllowSVG: true,
    domains: ["codemobiles.com", "pospos.co", "localhost"],
    minimumCacheTTL: 0,
  },
};

module.exports = nextConfig;
