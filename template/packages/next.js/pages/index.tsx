import { createContext, useContext } from 'react'
import { GetStaticPropsContext } from 'next'
import type { StaticPropsReturnType } from 'types/page'

import Homepage from '#/Homepage'

export const getStaticProps = async (_context: GetStaticPropsContext) => {
  return {
    props: {} as const,
  }
}

type PageContextProps = StaticPropsReturnType<typeof getStaticProps>

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
