import { sanityClient as client } from '../lib/sanity.server'
import { SiteSettings, ThemeSettings } from '../types/schema-types'

export const getSiteSettings = (): Promise<Omit<SiteSettings, 'favicon'> & { favicon: string }> =>
  client.fetch('*[_id == "siteSettings"][0]{..., "favicon":favicon.asset->url}')
export const getThemeSettings = (): Promise<ThemeSettings> => client.fetch('*[_id == "themeSettings"][0]')
