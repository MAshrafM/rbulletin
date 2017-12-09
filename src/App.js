import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
// styles
import './App.css'
// views
import Category from './views/Category'
import Home from './views/Home'
import PostDetail from './views/PostDetail'
// ApolloClient
import client from './graphql/apolloClient'

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:category' component={Category} />
            <Route path='/:category/:post_id' component={PostDetail} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App
