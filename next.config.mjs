// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true, // Enable the app directory feature
    },
    reactStrictMode: true, // Optional: enable React strict mode
    swcMinify: true, // Optional: enable SWC minification
  };
  
  export default nextConfig;
  