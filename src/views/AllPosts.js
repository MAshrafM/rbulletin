import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// Data
import { graphql } from 'react-apollo'
import { getAllPosts } from '../graphql/queries/posts'
// Component
import Loader from '../components/Loader'
import Layout from '../components/Layout/index'
import GridRenderer from '../components/GridTypes/GridRenderer'
import Error from '../components/Error'

class AllPosts extends Component {
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
        <GridRenderer posts={posts} viewtype={this.props.viewType} />
      </div>
    )
  }

  render () {
    const isLoading = this.props.data.loading
    return (
      <Layout>
        {!this.props.data.error && isLoading && <Loader />}
        {this.props.data.error && (
          <Error error={this.props.data.error.message} />
        )}
        {isLoading && this.renderCategories()}
      </Layout>
    )
  }
}

export const allPosts = graphql(getAllPosts)(AllPosts)
