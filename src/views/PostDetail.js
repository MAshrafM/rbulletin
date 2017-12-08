import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostDetail extends Component {
  render () {
    return [<p key='1'>Post Details</p>, <p key='2'>Post Page</p>]
  }
}

const mapStateToPorps = state => ({
  posts: state.getPosts
})

export default connect(mapStateToPorps)(PostDetail)
