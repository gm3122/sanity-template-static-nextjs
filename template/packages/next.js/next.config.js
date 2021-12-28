// @ts-check

const withTM = require('next-transpile-modules')(['sanity'])
const withPWA = require('next-pwa')

/**
 * @type {import('./types/partial').PartialReturnPromise<import('next/dist/server/config').NextConfig>}
 **/
const nextConfig = {
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/admin/:path*',
          destination:
            process.env.NODE_ENV === 'development' ? 'http://localhost:3333/admin/:path*' : '/admin/index.html',
        },
      ],
    }
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
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
}

module.exports = withPWA(withTM(nextConfig))
