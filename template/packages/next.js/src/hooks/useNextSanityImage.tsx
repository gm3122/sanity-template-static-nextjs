import { ImageProps } from 'next/image'
import type { UseNextSanityImageBuilder } from 'next-sanity-image'
import { useNextSanityImage as useImage } from 'next-sanity-image'
import { UseNextSanityImageOptions, UseNextSanityImageProps } from 'next-sanity-image/dist/types'
import { SanityImage } from 'sanity'
import { removeEmpty } from 'utils/object'

import { SanityClientLike } from '@sanity/image-url/lib/types/types'

export * from 'next-sanity-image'

const defaultImageBuilder: UseNextSanityImageBuilder = (imageUrlBuilder, options) => {
  return imageUrlBuilder
    .width(options.width || Math.min(options.originalImageDimensions.width, 1920))
    .quality(options.quality || 75)
    .fit('clip')
}

export function useNextSanityImage<L extends ImageProps['layout']>(
  sanityClient: SanityClientLike,
  image: SanityImage & { alt?: string },
  options?: UseNextSanityImageOptions & {
    enableBlurUp?: true
    layout?: L
  },
): Required<UseNextSanityImageProps> & {
  layout?: L
  objectPosition?: string
  placeholder: 'blur'
}

export function useNextSanityImage<L extends ImageProps['layout']>(
  sanityClient: SanityClientLike,
  image: SanityImage & { alt?: string },
  options?: UseNextSanityImageOptions & {
    enableBlurUp: false
    layout?: L
  },
): Omit<UseNextSanityImageProps, 'blurDataURL'> & {
  layout?: L
  objectPosition?: string
  placeholder: 'empty'
}

export function useNextSanityImage<L extends ImageProps['layout']>(
  sanityClient: SanityClientLike,
  image: SanityImage & { alt?: string },
  options: UseNextSanityImageOptions & {
    enableBlurUp?: boolean
    layout?: L
  } = {},
): any {
  const imageBuilder = options.imageBuilder || defaultImageBuilder
  const {
    height: originalHeight,
    width: originalWidth,
    ...imageProps
  } = useImage(sanityClient, image, {
    ...options,
    imageBuilder,
  })
  const objectPosition = image.hotspot && `${image.hotspot?.x * 100}% ${image.hotspot?.y * 100}%`

  const height = image.crop ? (1 - image.crop.top - image.crop.bottom) * originalHeight : originalHeight
  const width = image.crop ? (1 - image.crop.right - image.crop.left) * originalWidth : originalWidth

  return {
    ...imageProps,
    ...(options?.layout !== 'fill' ? { height, width } : {}),
    ...removeEmpty({ alt: image.alt, layout: options.layout, objectPosition }),
    draggable: false,
    onMouseDown: (e: MouseEvent) => {
      e.preventDefault()
    }, // firefox
  }
}
