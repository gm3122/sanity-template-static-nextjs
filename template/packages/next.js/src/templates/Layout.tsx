interface Props {
  children: JSX.Element
}

function Layout(props: Props): JSX.Element {
  const { children } = props

  return <div>{children}</div>
}

export default Layout
