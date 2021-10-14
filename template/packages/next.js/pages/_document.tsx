import { Children } from 'react'
import type { DocumentContext } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { Helmet, HelmetData } from 'react-helmet'
import createEmotionCache from 'utils/createEmotionCache'

import createEmotionServer from '@emotion/server/create-instance'

class MyDocument extends Document<{ helmet: HelmetData }> {
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
      helmet: Helmet.renderStatic(),
      styles: [...Children.toArray(documentProps.styles), ...emotionStyleTags],
    }
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map((el) => this.props.helmet[el as keyof HelmetData].toComponent())
  }

  render() {
    return (
      <Html {...this.helmetHtmlAttrComponents}>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
          {this.helmetHeadComponents}
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
