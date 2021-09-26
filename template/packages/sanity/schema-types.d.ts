/// <reference types="@sanity-codegen/types" />

declare namespace Sanity {
  namespace Schema {
    /**
     * Paramètres du site
     */
    interface SiteSettings extends Sanity.Document {
      _type: 'siteSettings'

      /**
       * Nom du site - `String`
       */
      siteName?: string

      /**
       * Description - `Text`
Décrivez votre site web pour les moteurs de recherche et les réseaux sociaux.
       */
      description?: string

      /**
       * Mots clés - `Array`
Ajoutez des mots-clés pour les moteurs de recherche qui décrivent votre site Web.
       */
      keywords?: Array<Sanity.Keyed<string>>

      /**
       * Auteur du site - `String`
       */
      author?: string

      /**
       * Favicon - `Image`
       */
      favicon?: {
        asset: Sanity.Asset
        crop?: Sanity.ImageCrop
        hotspot?: Sanity.ImageHotspot
      }

      /**
       * Logo - `Image`
       */
      logo?: {
        asset: Sanity.Asset
        crop?: Sanity.ImageCrop
        hotspot?: Sanity.ImageHotspot

        /**
       * Taille du logo - `Number`
Taille en pixel
       */
        width?: number
      }

      /**
       * URL du site - `Url`
L'adresse racine du site, ex: https://www.google.com/
       */
      siteUrl?: string
    }

    /**
     * Paramètres du thème
     */
    interface ThemeSettings extends Sanity.Document {
      _type: 'themeSettings'

      /**
       * Couleur principale - `RegistryReference`
       */
      primaryColor: Color

      /**
       * Couleur secondaire - `RegistryReference`
       */
      secondaryColor: Color

      /**
       * Couleur d'arrière-plan - `RegistryReference`
       */
      backgroundColor: Color

      /**
       * Couleur d'arrière-plan de la boîte de dialogue - `RegistryReference`
       */
      backdropColor: Color
    }

    type Document = SiteSettings | ThemeSettings
  }
}
