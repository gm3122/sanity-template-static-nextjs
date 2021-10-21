// @ts-check

const withTM = require('next-transpile-modules')(['sanity'])

/**
 * @type {import('type-fest').PartialDeep<import('next/dist/server/config').NextConfig>}
 **/
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination:
          process.env.NODE_ENV === 'development' ? 'http://localhost:3333/admin/:path*' : '/admin/index.html',
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV !== 'development',
  },
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV !== 'development',
  },
  images: {
    domains: ['cdn.sanity.io'],
    loader: 'custom',
  },
}

module.exports = withTM(nextConfig)
