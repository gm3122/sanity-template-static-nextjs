import React, { createContext, useContext, useState } from 'react'

interface Data {
  category?: string
}

type GlobalContextProps = {
  data: Data
  setData: React.Dispatch<React.SetStateAction<Data>>
}

export const GlobalContext = createContext<GlobalContextProps>(undefined!)

type GlobalProviderProps = {
  children: React.ReactNode
}

export default function GlobalProvider(props: GlobalProviderProps) {
  const [data, setData] = useState<Data>({})

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export const useData = () => {
  return useContext(GlobalContext)
}

export const withGlobalProvider = <P,>(Component: React.ComponentType) =>
  // eslint-disable-next-line react/display-name
  function (props: P) {
    return (
      <GlobalProvider>
        <Component {...props} />
      </GlobalProvider>
    )
  }
