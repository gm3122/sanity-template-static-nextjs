interface Props {
  children: React.ReactNode
  condition: boolean
  wrapper: (children: React.ReactNode) => JSX.Element
}

function ConditionalWrapper(props: Props) {
  const { children, condition, wrapper } = props
  return condition ? wrapper(children) : <>{children}</>
}

export default ConditionalWrapper
