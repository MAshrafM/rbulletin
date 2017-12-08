import React, { Component } from 'react'
import { connect } from 'react-redux'

class Category extends Component {
  render () {
    return [<p key='1'>Category</p>, <p key='2'>Category Page</p>]
  }
}

const mapStateToProps = state => ({
  posts: state.getPosts
})

export default connect(mapStateToProps)(Category)
