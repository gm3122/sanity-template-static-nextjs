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
 * Color
 *
 *
 */
export interface Color extends SanityDocument {
  _type: 'color'

  /**
   * hex — `string`
   *
   *
   */
  hex: string

  /**
   * alpha — `number`
   *
   *
   */
  alpha: number

  /**
   * hsl — `object`
   *
   *
   */
  hslaColor: {
    _type: 'hslaColor'
    /**
     * h — `number`
     *
     *
     */
    h: number

    /**
     * s — `number`
     *
     *
     */
    s: number

    /**
     * l — `number`
     *
     *
     */
    l: number

    /**
     * a — `number`
     *
     *
     */
    a: number
  }

  /**
   * hsva — `object`
   *
   *
   */
  hsvaColor: {
    _type: 'hsvaColor'
    /**
     * h — `number`
     *
     *
     */
    h: number

    /**
     * s — `number`
     *
     *
     */
    s: number

    /**
     * v — `number`
     *
     *
     */
    v: number

    /**
     * a — `number`
     *
     *
     */
    a: number
  }

  /**
   * rgba — `object`
   *
   *
   */
  rgbaColor: {
    _type: 'rgbaColor'
    /**
     * r — `number`
     *
     *
     */
    r: number

    /**
     * g — `number`
     *
     *
     */
    g: number

    /**
     * b — `number`
     *
     *
     */
    b: number

    /**
     * a — `number`
     *
     *
     */
    a: number
  }
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

export type Documents = Color | SiteSettings | ThemeSettings
