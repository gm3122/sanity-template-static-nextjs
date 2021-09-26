import { forwardRef } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import type { UrlObject } from 'url'

import MuiLink from '@mui/material/Link'
import type { TypographyProps } from '@mui/material/Typography'

declare type Url = string | UrlObject
interface NextComposedProps {
  as?: Url
  className?: string
  href: Url
  prefetch?: boolean
  scroll?: boolean
}

const NextComposed = forwardRef(function NextComposed(props: NextComposedProps, ref: any) {
  const { as, href, scroll, ...other } = props

  return (
    <NextLink as={as} href={href} scroll={scroll}>
      <a ref={ref} {...other} />
    </NextLink>
  )
})

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
interface LinkProps {
  activeClassName?: string
  as?: Url
  children: React.ReactNode
  className?: string
  color?: TypographyProps['color']
  href: Url
  innerRef?: any
  naked?: boolean
  onClick?: () => void
  prefetch?: boolean
  scroll?: boolean
}

function Link(props: LinkProps) {
  const { activeClassName = 'active', className: classNameProps, href, innerRef, naked, ...other } = props

  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  })

  if (naked) {
    return <NextComposed className={className} href={href} ref={innerRef} {...other} />
  }

  return <MuiLink className={className} component={NextComposed} href={pathname || '/'} ref={innerRef} {...other} />
}

// eslint-disable-next-line react/display-name
export default forwardRef((props: LinkProps, ref) => <Link {...props} innerRef={ref} />)
