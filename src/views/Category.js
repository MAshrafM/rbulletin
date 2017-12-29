import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// Data
import { graphql } from 'react-apollo'
import { getPostsByCat } from '../graphql/queries/posts'
// Component
import Loader from '../components/Loader'
import Layout from '../components/Layout/index'
import PostPreview from '../components/PostPreview'
// material-ui
import Grid from 'material-ui/Grid'

class Category extends Component {
  constructor () {
    super()
    this.renderCategories = this.renderCategories.bind(this)
  }

  renderCategories () {
    const posts = this.props.data.posts
    return (
      <div>
        <Helmet>
          <title>Posts By Categories</title>
        </Helmet>
        <Grid container spacing={24}>
          {posts &&
            posts.edges.map(post => (
              <Grid key={post.node.id} item xs={12} sm={6} md={4}>
                <PostPreview
                  key={post.node.id}
                  id={post.node.id}
                  date={post.node.date}
                  title={post.node.title}
                  imageURL={
                    post.node.featuredImage && post.node.featuredImage.sourceUrl
                  }
                />
              </Grid>
            ))}
        </Grid>
      </div>
    )
  }

  render () {
    const isLoading = this.props.data.loading
    return (
      <Layout>
        {isLoading && <Loader />}
        {isLoading && this.renderCategories()}
      </Layout>
    )
  }
}

export default graphql(getPostsByCat, {
  options: ({ match }) => ({ variables: { slug: match.params.slug } })
})(Category)
