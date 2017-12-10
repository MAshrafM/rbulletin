import React, { Component } from 'react'
import { graphql } from 'react-apollo'
// Data
import { getAllPosts } from '../graphql/queries/posts'
// Components
import PostPreview from '../components/PostPreview'
import Layout from '../components/Layout'
import Loader from '../components/Loader'

class Home extends Component {
  render () {
    const posts = this.props.data.posts
    return (
      <Layout>
        {!posts && <Loader />}
        {posts &&
          posts.edges.map(post => (
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
      </Layout>
    )
  }
}

export default graphql(getAllPosts)(Home)
