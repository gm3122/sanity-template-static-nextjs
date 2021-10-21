import { getSiteSettings } from 'sanity'
import fs from 'fs'
import path from 'path'

const staticPages: string[] = []

const getRobotsTxt = (baseUrl: string) => `User-agent: *
Allow: /
Disallow: /admin/

Sitemap: ${path.join(baseUrl || '', 'sitemap.xml')}
`

const trimWhitespaces = (xml: string): string => xml.replace(/>\s+</gm, '><')

const getSitemapXml = (baseUrl: string) =>
  trimWhitespaces(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((url) => {
      return `
        <url>
          <loc>${new URL(url, baseUrl).href}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
      `
    })
    .join('')}
</urlset>
`)

;(async function () {
  const { siteUrl } = await getSiteSettings()

  const baseUrl = process.env.NODE_ENV === 'production' ? siteUrl : 'http://localhost:3000'

  if (!baseUrl) {
    console.error('Please complete the field "siteUrl" in sanity document "siteSettings"')
    process.exit()
  }

  const publicDir = path.join(__dirname, '../public')
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir)

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), getRobotsTxt(baseUrl))

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), getSitemapXml(baseUrl))
})()
