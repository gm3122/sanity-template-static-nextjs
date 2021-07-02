import _ from 'lodash'

import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, Theme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import { getTheme, palette as base_palette } from '~/theme'

export const getMuiTheme = (themeOptions?: ThemeOptions): Theme => {
  const palette = _.cloneDeep(base_palette)
  _.merge(palette, themeOptions?.palette)

  const theme = createMuiTheme({ palette })

  return createMuiTheme({
    ...theme,
    ...getTheme(theme),
  })
}

interface Props {
  children: React.ReactNode
  themeOptions?: ThemeOptions
}

export default function ThemeProvider(props: Props): JSX.Element {
  const { children, themeOptions } = props

  return <MuiThemeProvider theme={getMuiTheme(themeOptions)}>{children}</MuiThemeProvider>
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
