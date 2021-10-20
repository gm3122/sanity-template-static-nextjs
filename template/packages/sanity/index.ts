import client from './sanity-client'
import { SiteSettings, ThemeSettings } from './schema-types'

export const getSiteSettings = (): Promise<Omit<SiteSettings, 'favicon'> & { favicon: string }> =>
  client.fetch('*[_id == "siteSettings"][0]{..., "favicon":favicon.asset->url}')
export const getThemeSettings = (): Promise<ThemeSettings> => client.fetch('*[_id == "themeSettings"][0]')

export { client }

export * from './schema-types'
export type { SanityImage } from './types/image'
