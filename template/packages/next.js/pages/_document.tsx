import { Children } from 'react'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import createEmotionCache from 'utils/createEmotionCache'

import createEmotionServer from '@emotion/server/create-instance'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage

    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) =>
          // eslint-disable-next-line react/display-name
          function (props) {
            return <App emotionCache={cache} {...props} />
          },
      })

    const documentProps = await Document.getInitialProps(ctx)

    const emotionStyles = extractCriticalToChunks(documentProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        dangerouslySetInnerHTML={{ __html: style.css }}
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        // eslint-disable-next-line react/no-danger
        key={style.key}
      />
    ))

    return {
      ...documentProps,
      styles: [...Children.toArray(documentProps.styles), ...emotionStyleTags],
    }
  }

  render() {
    return (
      <Html lang="fr">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
