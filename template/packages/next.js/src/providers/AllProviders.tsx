import { ThemeOptions, StyledEngineProvider } from '@mui/material/styles'

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
    <StyledEngineProvider injectFirst>
      <ThemeProvider themeOptions={themeOptions}>
        <Compose components={[GlobalProvider, DialogProvider]}>{children}</Compose>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
