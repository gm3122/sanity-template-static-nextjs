import { DefaultSeo as NextDefaultSeo } from 'next-seo'
import { SanityImage, urlFor } from 'sanity'

type MetaItem = { content: string; name: string }

interface SEOProps {
  author?: string
  description?: string
  favicon?: SanityImage
  keywords?: string[]
  meta?: MetaItem[]
  siteName?: string
  title?: string
}

function notEmpty<TValue>(value: TValue | null | undefined | false | ''): value is TValue {
  return value !== null && value !== undefined && value !== false && value !== ''
}

const getIconUrl = (favicon: SanityImage, size: number) => urlFor(favicon).width(size).height(size).format('png').url()!

function DefaultSeo(props: SEOProps): JSX.Element {
  const { siteName, title, author, description, favicon, keywords = [], meta = [] } = props

  return (
    <NextDefaultSeo
      {...(title || siteName ? { title: title || siteName } : {})}
      {...(siteName ? { titleTemplate: title ? `%s - ${siteName}` : siteName } : {})}
      additionalLinkTags={[
        {
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
          rel: 'stylesheet',
        },
        favicon && {
          href: getIconUrl(favicon, 32),
          rel: 'icon',
          type: 'image/png',
        },
        favicon && {
          href: getIconUrl(favicon, 76),
          rel: 'apple-touch-icon',
          sizes: '76x76',
          type: 'image/png',
        },
        process.env.NODE_ENV !== 'development' && {
          href: '/manifest.json',
          rel: 'manifest',
        },
      ].filter(notEmpty)}
      additionalMetaTags={[
        author && {
          content: author,
          property: 'author',
        },
        keywords.length > 0 && {
          content: keywords.join(`, `),
          name: 'keywords',
        },
        ...meta,
      ].filter(notEmpty)}
      description={description}
    />
  )
}

export default DefaultSeo
