import _ from 'lodash'

import CssBaseline from '@material-ui/core/CssBaseline'
import { createTheme, Theme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

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

  return <MuiThemeProvider theme={getTheme(themeOptions)}>{children}</MuiThemeProvider>
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
