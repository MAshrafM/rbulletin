import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// views
import Category from './views/Category'
import AllPosts from './views/AllPosts'
import Home from './views/Home'
import PostDetail from './views/PostDetail'

class Routes extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/category/' component={AllPosts} />
          <Route exact path='/category/:slug' component={Category} />
          <Route path='/:category/:post_id' component={PostDetail} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
