import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// Data
import { graphql } from 'react-apollo'
import { getCategories } from '../graphql/queries/categories'
// Component
import Loader from '../components/Loader'
import Layout from '../components/Layout/index'
import CategoryView from '../components/CategoryView'

class Category extends Component {
  constructor () {
    super()
    this.renderCategories = this.renderCategories.bind(this)
  }

  renderCategories () {
    const categories = this.props.data.categories
    return (
      <div>
        <Helmet>
          <title>Posts By Categories</title>
        </Helmet>
        {categories &&
          categories.edges.map(category => (
            <CategoryView
              key={category.node.id}
              id={category.node.id}
              name={category.node.name}
              posts={category.node.posts}
            />
          ))}
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

export default graphql(getCategories)(Category)
