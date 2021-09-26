import { ThemeSettings } from 'sanity'
import color from 'color'

import { PaletteOptions, Theme, ThemeOptions } from '@mui/material/styles'

export const palette = {
  primary: { main: '#5469d4' },
}

export const getThemeOptions = ({ palette }: Theme): ThemeOptions => ({
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.paper,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
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
      styleOverrides: {
        root: {
          backgroundColor: 'none',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        underlineHover: {
          '&:hover': {
            textDecoration: 'none',
          },
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
