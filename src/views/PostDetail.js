import React, { Component } from 'react'
import { graphql } from 'react-apollo'
// Data
import { SinglePostDetail } from '../graphql/queries/posts'

class PostDetail extends Component {
  constructor () {
    super()
    this.renderPost = this.renderPost.bind(this)
  }

  renderPost () {
    const post = this.props.data.post
    const date = new Date(post.date).toLocaleString()

    return (
      <div style={{ border: '1px solid black', padding: '5px' }}>
        <h1>{post.title}</h1>
        <img
          alt=''
          style={{ height: '500px', width: '500px' }}
          src={post.featuredImage && post.featuredImage.sourceUrl}
        />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <h4>Author: {post.author.name}</h4>
        <h5>Date: {date}</h5>
      </div>
    )
  }

  render () {
    const isLoading = this.props.data.loading
    return (
      <div>
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && this.renderPost()}
      </div>
    )
  }
}

export default graphql(SinglePostDetail, {
  options: ({ match }) => ({
    variables: {
      id: match.params.post_id
    }
  })
})(PostDetail)
