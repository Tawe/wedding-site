import React from 'react'
import { Reset } from 'styled-reset'
import { css, createGlobalStyle } from 'styled-components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Home from './components/pages/home'

const GlobalStyles = createGlobalStyle`
  body {
    @font-face {
      font-family: breg;
      src: url(./fonts/breg.otf);
    }

    @font-face {
      font-family: mBold;
      src: url(./fonts/mBold.otf);
  }
  @font-face {
      font-family: mit;
      src: url(./fonts/mit.otf);
  }
}

`

const client = new ApolloClient({
  uri: process.env.REACT_APP_DB,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Reset />
      <GlobalStyles />
      <Home />
    </ApolloProvider>
  )
}

export default App
