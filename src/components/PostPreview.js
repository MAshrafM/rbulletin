import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostPreview extends Component {
  render () {
    const date = new Date(this.props.date).toLocaleString()

    return (
      <div style={{ border: '1px solid black', padding: '5px' }}>
        <h1>{this.props.title}</h1>
        <img
          alt=''
          style={{ height: '500px', width: '500px' }}
          src={this.props.imageURL}
        />
        <br />
        <Link to={`/post/${this.props.id}`}>Read More</Link>
        <h5>Date: {date}</h5>
      </div>
    )
  }
}

export default PostPreview
