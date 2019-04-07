import React from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from './theme'

function ThemeProviderWrapper({ children }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}

export default ThemeProviderWrapper
