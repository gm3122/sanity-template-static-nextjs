import { ThemeOptions } from '@material-ui/core/styles'

import Compose from 'C/Compose'

import DialogProvider from './DialogProvider'
import GlobalProvider from './GlobalProvider'
import { RootThemeProvider as ThemeProvider } from './ThemeProvider'

interface Props {
  children: React.ReactNode
  themeOptions?: ThemeOptions
}

export default function Providers({ children, themeOptions }: Props) {
  return (
    <ThemeProvider themeOptions={themeOptions}>
      <Compose components={[GlobalProvider, DialogProvider]}>{children}</Compose>
    </ThemeProvider>
  )
}
