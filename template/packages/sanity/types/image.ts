import type { SanityImageAsset, SanityImageCrop, SanityImageHotspot, SanityReference } from 'sanity'

export type SanityImage = {
  _type: 'image'
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}
