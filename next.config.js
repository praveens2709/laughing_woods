/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  
    // Security Headers
    async headers() {
      return [
        {
          source: "/:path*",
          headers: [
            {
              key: "Strict-Transport-Security",
              value: "max-age=63072000; includeSubDomains; preload", // Forces HTTPS
            },
            {
              key: "X-Content-Type-Options",
              value: "nosniff", // Prevents MIME type sniffing
            },
            {
              key: "X-Frame-Options",
              value: "DENY", // Prevents clickjacking
            },
            {
              key: "X-XSS-Protection",
              value: "1; mode=block", // Enables XSS filtering
            },
            {
              key: "Content-Security-Policy",
              value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; object-src 'none'; frame-ancestors 'none';", // Blocks XSS
            },
            {
              key: "Referrer-Policy",
              value: "no-referrer-when-downgrade", // Limits referrer info
            },
            {
              key: "Permissions-Policy",
              value: "geolocation=(), microphone=(), camera=()", // Disables access to sensitive APIs
            },
          ],
        },
      ];
    },
  
    // Image Optimization
    images: {
      domains: ["your-image-host.com"], // Add allowed image domains
      formats: ["image/webp"], // Use WebP for better performance
    },
  
    // Minification (enabled by default in Next.js 13+)
    compiler: {
      removeConsole: process.env.NODE_ENV === "production", // Remove console.logs in production
    },
  };
  
  module.exports = nextConfig;
  