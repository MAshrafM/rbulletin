import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'react-apollo'
// Data
import { getAllPosts } from '../graphql/queries/posts'
// Components
import GridRenderer from '../components/GridTypes/GridRenderer'
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
        {posts && <GridRenderer posts={posts} />}
      </Layout>
    )
  }
}

export default graphql(getAllPosts)(Home)
