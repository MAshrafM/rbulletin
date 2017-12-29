import React, { Component } from 'react'
// components
import PostPreview from '../components/PostPreview'
// material-ui
import Grid from 'material-ui/Grid'

class ListView extends Component {
  render () {
    return (
      <Grid container justify='center'>
        <Grid item xs={12} sm={8} md={6}>
          {this.props.posts.edges.map(post => (
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
        </Grid>
      </Grid>
    )
  }
}

export default ListView
