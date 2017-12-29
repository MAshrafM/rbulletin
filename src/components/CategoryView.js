import React, { Component } from 'react'
import GridRenderer from '../components/GridTypes/GridRenderer'

class CategoryView extends Component {
  render () {
    return (
      <div>
        <h1>Posts in {this.props.name} Category</h1>
        <br />
        <GridRenderer posts={this.props.posts} />
        <br />
        <hr />
        <br />
      </div>
    )
  }
}

export default CategoryView
