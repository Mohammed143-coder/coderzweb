/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
 
  images: {
    unoptimized: true,
    domains: ["coderzweb.in", "www.coderzweb.in"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
