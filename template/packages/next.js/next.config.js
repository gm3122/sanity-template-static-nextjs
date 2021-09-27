// @ts-check

const withTM = require('next-transpile-modules')(['sanity'])

/**
 * @type {Partial<import('next/dist/server/config').NextConfig>}
 **/
const nextConfig = {
  distDir: '../../.next',
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
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
}

module.exports = withTM(nextConfig)
