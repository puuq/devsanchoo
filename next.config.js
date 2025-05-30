/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;

module.exports = {
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'], display: 'swap' } },
    ],
  },
}
