import { useNextSanityImage as useImage } from 'next-sanity-image'
import { UseNextSanityImageOptions, UseNextSanityImageProps } from 'next-sanity-image/dist/types'

import { SanityClientLike, SanityImageSource } from '@sanity/image-url/lib/types/types'

export * from 'next-sanity-image'

export function useNextSanityImage(
  sanityClient: SanityClientLike,
  image: SanityImageSource & { alt?: string },
  options?: UseNextSanityImageOptions & {
    enableBlurUp?: true
  },
): Required<UseNextSanityImageProps> & {
  placeholder: 'blur'
}

export function useNextSanityImage(
  sanityClient: SanityClientLike,
  image: SanityImageSource & { alt?: string },
  options?: UseNextSanityImageOptions & {
    enableBlurUp: false
  },
): Omit<UseNextSanityImageProps, 'blurDataURL'> & {
  placeholder: 'empty'
}

export function useNextSanityImage(
  sanityClient: SanityClientLike,
  image: SanityImageSource & { alt?: string },
  options?: any,
): any {
  const imageProps = useImage(sanityClient, image, options)
  return { ...imageProps, ...(image.alt ? { alt: image.alt } : {}) }
}
