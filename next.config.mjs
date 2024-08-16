// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true, // Enable the app directory feature
    },
    reactStrictMode: true,
    swcMinify: true,
  };
  
  export default nextConfig;
  