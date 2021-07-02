// @ts-check

const withTM = require('next-transpile-modules')(['sanity'])

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
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
  experimental: {}, // needed for ts-check
  future: {}, // needed for ts-check
}

module.exports = withTM(nextConfig)
