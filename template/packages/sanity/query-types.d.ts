/// <reference types="@sanity-codegen/types" />

declare namespace Sanity {
  namespace Queries {
    type SiteSettings = {
      _id: string
      _type: 'siteSettings'
      author?: string
      description?: string
      favicon?: {
        asset: unknown
        crop?: unknown
        hotspot?: unknown
      }
      keywords?: string[]
      logo?: {
        asset: unknown
        crop?: unknown
        hotspot?: unknown
        width?: number
      }
      siteName?: string
      siteUrl?: string
    } | null

    /**
     * A keyed type of all the codegen'ed queries. This type is used for
     * TypeScript meta programming purposes only.
     */
    type QueryMap = {
      SiteSettings: SiteSettings
    }
  }
}
