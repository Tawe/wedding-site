import React, { useState } from 'react'
import { Reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Home from './components/pages/home'

const GlobalStyles = createGlobalStyle`
  body {
    overflow:${props => props.menuOpen && 'hidden'};
    transition: 0.4s;
    font-family: breg;
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
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <ApolloProvider client={client}>
      <Reset />
      <GlobalStyles {...{ menuOpen }} />
      <Home {...{ menuOpen }} {...{ setMenuOpen }} />
    </ApolloProvider>
  )
}

export default App
