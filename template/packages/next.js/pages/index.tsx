import { createContext, useContext } from 'react'
import { AppContext } from 'next/app'
import type { StaticPropsReturnType } from 'types/page'

import Homepage from '#/Homepage'

export const getStaticProps = async (_context: AppContext) => {
  return {
    props: {},
  }
}

type PageContextProps = StaticPropsReturnType<typeof getStaticProps>['props']

const PageContext = createContext<PageContextProps>(undefined!)

function Page(props: PageContextProps) {
  return (
    <PageContext.Provider value={props}>
      <Homepage />
    </PageContext.Provider>
  )
}

export default Page

export const usePageProps = (): PageContextProps => useContext(PageContext)
