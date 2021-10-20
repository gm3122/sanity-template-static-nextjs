import { ThemeSettings } from 'sanity'

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
          textDecoration: 'none',
        },
        body: {
          color: palette.primary.main,
          fontFamily: 'proxima-nova, Arial, sans-serif',
        },
        img: {
          userSelect: 'none',
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
        root: {
          '&:hover': {
            color: palette.secondary.main,
          },
        },
      },
    },
  },
})

export const getPaletteFromThemeSettings = (themeSettings: ThemeSettings): PaletteOptions => ({
  primary: { main: themeSettings.primaryColor.hex },
  secondary: { main: themeSettings.secondaryColor.hex },
})
