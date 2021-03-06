import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { graphql } from 'react-apollo'
// Data
import { SinglePostDetail } from '../graphql/queries/posts'
// components
import Layout from '../components/Layout/index'
import Loader from '../components/Loader'

class PostDetail extends Component {
  constructor () {
    super()
    this.renderPost = this.renderPost.bind(this)
  }

  renderPost () {
    const post = this.props.data.post
    const date = new Date(post.date).toLocaleString()

    return (
      <div>
        <Helmet>
          <title>{post.title}</title>
        </Helmet>
        <Link to={`/post/${post.id}`}>
          <h1>{post.title}</h1>
        </Link>
        <img
          alt=''
          style={{ height: '600px', width: '800px' }}
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
      <Layout>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        {isLoading && <Loader />}
        {!isLoading && this.renderPost()}
      </Layout>
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
