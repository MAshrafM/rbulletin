import React, { Component } from 'react'
// components
import PostPreview from '../PostPreview'
// material-ui
import Grid from 'material-ui/Grid'

class GridView extends Component {
  render () {
    return (
      <Grid container>
        {this.props.posts &&
          this.props.posts.edges.map(post => (
            <Grid key={post.node.id} item xs={12} sm={6} md={4} lg={3}>
              <PostPreview
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
    )
  }
}

export default GridView
