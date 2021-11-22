import {
  createCurrentUserHook,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity'

import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import config from './config'

export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
})

export const useCurrentUser = createCurrentUserHook(config)
