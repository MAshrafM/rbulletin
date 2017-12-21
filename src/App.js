import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'

import Routes from './Routes'
// ApolloClient
import client from './graphql/apolloClient'

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    )
  }
}

export default App
