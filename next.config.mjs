/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**", // Optionally add a pathname pattern if needed
      },
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        pathname: "/**", // Optionally add a pathname pattern if needed
      },
    ],
  },
};

export default nextConfig;
