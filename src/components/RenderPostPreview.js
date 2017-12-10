import React, { Component } from 'react'
import PostPreview from '../components/PostPreview'

class RenderPosts extends Component {
  render () {
    return (
      <div>
        {this.props.posts.edges.map(post => (
          <PostPreview
            key={post.node.id}
            id={post.node.id}
            date={post.node.date}
            imageURL={
              post.node.featuredImage && post.node.featuredImage.sourceUrl
            }
            title={post.node.title}
          />
        ))}
      </div>
    )
  }
}

export default RenderPosts
