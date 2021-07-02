import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import App, { AppContext, AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { getSiteSettings, getThemeSettings } from 'sanity'
import SEO from 'core/SEO'
import type { StaticPropsReturnType } from 'types/page'

import CssBaseline from '@material-ui/core/CssBaseline'

import AllProviders from '~/providers/AllProviders'
import Layout from '~/templates/Layout'
import { getPaletteFromThemeSettings } from '~/theme'

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  const siteSettings = await getSiteSettings()
  const themeSettings = await getThemeSettings()

  return {
    ...appProps,
    siteSettings,
    themeSettings,
  }
}

type ExtraAppProps = Omit<StaticPropsReturnType<typeof MyApp.getInitialProps>, 'pageProps'>

const PageContext = createContext<ExtraAppProps>(undefined!)
const HistoryContext = createContext<string[]>(undefined!)

function MyApp(props: AppProps & ExtraAppProps) {
  const { Component, pageProps, siteSettings, themeSettings, ...extra } = props
  const [history, setHistory] = useState<string[]>([])
  const { asPath } = useRouter()

  useEffect(() => {
    if (asPath !== history[history.length - 1]) setHistory((history) => [...history, asPath])
  }, [asPath, history])

  return (
    <HistoryContext.Provider value={history}>
      <SEO lang="fr" {...siteSettings} />
      <AllProviders
        themeOptions={{
          palette: getPaletteFromThemeSettings(themeSettings),
        }}
      >
        <CssBaseline />
        <PageContext.Provider value={{ siteSettings, themeSettings, ...extra }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PageContext.Provider>
      </AllProviders>
    </HistoryContext.Provider>
  )
}

export default MyApp

export const useAppProps = (): ExtraAppProps => useContext(PageContext)

export const useHistory = () => {
  const history = useContext(HistoryContext)
  const getPrev = useCallback(() => history[history.length - 2] || '/', [history])

  return { getPrev, history }
}
