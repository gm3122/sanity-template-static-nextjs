/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ThemeSettings } from 'sanity'
import color from 'color'

import { Theme, ThemeOptions } from '@material-ui/core/styles'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

export const palette = {
  primary: { main: '#5469d4' },
}

export const getTheme = ({ palette }: Theme): ThemeOptions => ({
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: palette.background.paper,
      },
    },
    MuiButton: {
      root: {
        textTransform: 'inherit',
      },
    },
    MuiCssBaseline: {
      '@global': {
        a: {
          '&:hover': { textDecoration: 'none' },
          color: palette.primary.main,
          outline: 0,
          textDecoration: 'none',
        },
        body: {
          color: palette.primary.main,
        },
      },
    },
    MuiDialog: {
      root: {
        backgroundColor: 'none',
      },
    },
    MuiLink: {
      underlineHover: {
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
  },
})

export const getPaletteFromThemeSettings = (themeSettings: ThemeSettings): PaletteOptions => ({
  background: {
    default: themeSettings.backgroundColor.hex,
    paper: color(themeSettings.backdropColor.hex).alpha(themeSettings.backdropColor.alpha).string(),
  },
  primary: { main: themeSettings.primaryColor.hex },
  secondary: { main: themeSettings.secondaryColor.hex },
})
