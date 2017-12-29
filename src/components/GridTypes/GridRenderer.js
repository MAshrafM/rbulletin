import React, { Component } from 'react'
// Views
import GridView from './GridView'
import ListView from './ListView'

class GridRenderer extends Component {
  render () {
    const grid = this.props.viewType === 'grid'

    return (
      <div>
        {grid && <GridView posts={this.props.posts} />}
        {!grid && <ListView posts={this.props.posts} />}
      </div>
    )
  }
}

export default GridRenderer
