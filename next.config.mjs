/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/interactive-waves',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig