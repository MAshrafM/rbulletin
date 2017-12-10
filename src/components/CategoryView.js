import React, { Component } from 'react'
import RenderPosts from '../components/RenderPostPreview'

class CategoryView extends Component {
  render () {
    return (
      <div>
        <h1>Posts in {this.props.name} Category</h1>
        <br />
        <RenderPosts posts={this.props.posts} />
        <br />
        <hr />
        <br />
      </div>
    )
  }
}

export default CategoryView
