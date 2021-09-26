import _ from 'lodash'

import CssBaseline from '@mui/material/CssBaseline'
import {
  createTheme,
  StyledEngineProvider,
  Theme,
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'

import { getThemeOptions, palette as base_palette } from '~/theme'

export const getTheme = (themeOptions?: ThemeOptions): Theme => {
  const palette = _.cloneDeep(base_palette)
  _.merge(palette, themeOptions?.palette)

  const theme = createTheme({ palette })

  return createTheme({
    ...theme,
    ...getThemeOptions(theme),
  })
}

interface Props {
  children: React.ReactNode
  themeOptions?: ThemeOptions
}

export default function ThemeProvider(props: Props): JSX.Element {
  const { children, themeOptions } = props

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={getTheme(themeOptions)}>{children}</MuiThemeProvider>
    </StyledEngineProvider>
  )
}

export function RootThemeProvider(props: Props): JSX.Element {
  const { children, themeOptions } = props

  return (
    <ThemeProvider themeOptions={themeOptions}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
