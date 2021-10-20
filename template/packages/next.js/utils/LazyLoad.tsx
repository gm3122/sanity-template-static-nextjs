import { useEffect, useState } from 'react'

interface Props {
  children: JSX.Element
}

function LazyLoad(props: Props): JSX.Element | null {
  const { children } = props

  const [showChild, setShowChild] = useState<boolean>(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  return showChild ? children : null
}

export default LazyLoad
