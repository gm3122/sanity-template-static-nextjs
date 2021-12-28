/* eslint-disable sort-keys-fix/sort-keys-fix */

import { getSiteSettings, getThemeSettings, SanityImage, urlFor } from 'sanity'
import fs from 'fs-extra'
import path from 'path'

const getIconUrl = (favicon: SanityImage, size: number) => urlFor(favicon).width(size).height(size).format('png').url()!

;(async function () {
  const { favicon, siteName } = await getSiteSettings()
  const { backgroundColor, primaryColor } = await getThemeSettings()

  if (!siteName) throw Error('Missing siteName for manifest.json')
  if (!favicon) throw Error('Missing favicon for manifest.json')
  if (!backgroundColor) throw Error('Missing backgroundColor for manifest.json')
  if (!primaryColor) throw Error('Missing primaryColor for manifest.json')

  const manifest = {
    name: siteName,
    short_name: siteName,
    icons: [
      {
        src: getIconUrl(favicon, 192),
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: getIconUrl(favicon, 384),
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: getIconUrl(favicon, 512),
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: primaryColor.hex,
    background_color: backgroundColor.hex,
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
  }

  const publicDir = path.join(__dirname, '../public')
  fs.outputFileSync(path.join(publicDir, 'manifest.json'), JSON.stringify(manifest))
})()
