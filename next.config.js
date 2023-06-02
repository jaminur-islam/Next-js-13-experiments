/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
     images: {
    domains: ['images.dog.ceo'],
  },
}

module.exports = nextConfig
