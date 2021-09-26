import { groq, sanity } from './client'

export async function someFunction() {
  const siteSettings = await sanity.query(
    'SiteSettings',
    // groq`*[_id == "siteSettings"][0]{ ..., "favicon":favicon.asset->url }`,
    groq`*[_type == "siteSettings"][0]`,
  )

  return siteSettings
}
