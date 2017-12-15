import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'react-apollo'
import Grid from 'material-ui/Grid'
// Data
import { getAllPosts } from '../graphql/queries/posts'
// Components
import RenderPosts from '../components/RenderPostPreview'
import Layout from '../components/Layout/index'
import Loader from '../components/Loader'

class Home extends Component {
  render () {
    const posts = this.props.data.posts
    return (
      <Layout>
        <Helmet>
          <title>Home</title>
        </Helmet>
        {!posts && <Loader />}
        {posts && (
          <Grid container justify='center'>
            <Grid item xs={12} sm={8} md={6}>
              <RenderPosts posts={posts} />
            </Grid>
          </Grid>
        )}
      </Layout>
    )
  }
}

export default graphql(getAllPosts)(Home)
