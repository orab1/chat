import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1897ff',
    },
    secondary: {
      main: '#eea47f',
    },
    background:'linear-gradient(180deg, rgba(216,249,255,1) 0%, rgba(0,212,255,1) 60%, rgba(26,173,255,1) 100%)'
  },
})

export const CustomThemeProvider = ({ children }) =>
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
