import React from 'react'
import { Reset } from 'styled-reset'
import { css } from 'styled-components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Home from './components/pages/home'
const client = new ApolloClient({
  uri: process.env.REACT_APP_DB,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Reset />
      <Home />
    </ApolloProvider>
  )
}

export default App
