import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen'

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
}

/**
 * Paramètres du site
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings'

  /**
   * Nom du site — `string`
   *
   *
   */
  siteName?: string

  /**
   * Description — `text`
   *
   * Décrivez votre site web pour les moteurs de recherche et les réseaux sociaux.
   */
  description?: string

  /**
   * Mots clés — `array`
   *
   * Ajoutez des mots-clés pour les moteurs de recherche qui décrivent votre site Web.
   */
  keywords?: Array<SanityKeyed<string>>

  /**
   * Auteur du site — `string`
   *
   *
   */
  author?: string

  /**
   * Favicon — `image`
   *
   *
   */
  favicon?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot

    /**
     * Taille du logo — `number`
     *
     * Taille en pixel
     */
    width?: number
  }

  /**
   * URL du site — `url`
   *
   * L'adresse racine du site, ex: https://www.google.com/
   */
  siteUrl?: string
}

/**
 * Paramètres du thème
 *
 *
 */
export interface ThemeSettings extends SanityDocument {
  _type: 'themeSettings'

  /**
   * Couleur principale — `color`
   *
   *
   */
  primaryColor: Color

  /**
   * Couleur secondaire — `color`
   *
   *
   */
  secondaryColor: Color

  /**
   * Couleur d'arrière-plan — `color`
   *
   *
   */
  backgroundColor: Color

  /**
   * Couleur d'arrière-plan de la boîte de dialogue — `color`
   *
   *
   */
  backdropColor: Color
}

export type Documents = SiteSettings | ThemeSettings

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Color = any
