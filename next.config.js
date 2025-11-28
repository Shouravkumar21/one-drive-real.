/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ⭐ REQUIRED for Next.js 14 static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // ⭐ REQUIRED for export with next/image
    domains: ['localhost', 'your-cdn-domain.com', 'images.nwmls.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
}

module.exports = nextConfig;
