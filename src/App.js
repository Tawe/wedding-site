import React, { useState } from 'react'
import { Reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Home from './components/pages/home'

const GlobalStyles = createGlobalStyle`
  * {
      z-index: 0;
  }
  html {
    scroll-behavior: smooth;  
  }

  body {
    overflow: ${props => props.menuOpen && 'hidden'};
    font-family: ${props => props.theme.fonts.primary};
    scroll-behavior: smooth;

    @font-face {
      font-family: breg;
      src: url(./fonts/breg.otf);
    }

    @font-face {
      font-family: breg;
      src: url(./fonts/bbold.otf);
      font-weight: 800;
    }

    @font-face {
      font-family: mBold;
      src: url(./fonts/mBold.otf);
      font-weight: 800;
    }

    @font-face {
      font-family: mit;
      src: url(./fonts/mit.otf);
      font-style: italic;
    }

    #location > div.sc-dnqmqq.gJhPl > div > div > div > div > div:nth-child(3){
      display: none;
    }

    #location > div.sc-dnqmqq.gJhPl > div > div > div > div > div:nth-child(9){
      display: none;
    }

    #location > div.sc-dnqmqq.gJhPl > div > div > div > div > div.gmnoprint.gm-style-cc{
      display: none;
    }

    #location > div.sc-dnqmqq.gJhPl > div > div > div > div > div:nth-child(5){
      display: none;
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
