import Helmet from 'react-helmet'

type MetaItem = { content: string; name: string }

interface SEOProps {
  author?: string
  description?: string
  favicon?: string
  keywords?: string[]
  lang?: string
  meta?: MetaItem[]
  siteName?: string
  title?: string
}

function notEmpty<TValue>(value: TValue | null | undefined | false): value is TValue {
  return value !== null && value !== undefined && value !== false
}

// See https://opengraphprotocol.org/

function SEO(props: SEOProps): JSX.Element {
  const { lang, siteName, title, author, description, favicon, keywords = [], meta = [] } = props

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={[{ href: favicon, rel: 'icon' }]}
      meta={[
        {
          content: siteName,
          property: 'og:site_name',
        },
        {
          content: author,
          name: 'author',
        },
        {
          content: description,
          name: 'description',
        },
        keywords.length > 0 && {
          content: keywords.join(`, `),
          name: 'keywords',
        },
        ...meta,
      ].filter(notEmpty)}
      title={title || siteName}
      titleTemplate={title ? `%s | ${siteName}` : siteName}
    />
  )
}

export default SEO
