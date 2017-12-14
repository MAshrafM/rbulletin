import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// Material UI
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import { blue, grey } from 'material-ui/colors'

const styles = {
  card: {
    marginBottom: 15
  },
  media: {
    height: 500
  },
  titleColor: {
    color: blue[800]
  },
  dateColor: {
    color: grey[500]
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

class PostPreview extends Component {
  constructor () {
    super()
    this.renderCard = this.renderCard.bind(this)
    this.transitionToPost = this.transitionToPost.bind(this)
  }

  render () {
    const classes = this.props.classes
    const date = new Date(this.props.date).toLocaleString()

    return (
      <Card className={classes.card}>
        {this.props.imageURL && (
          <CardMedia className={classes.media} image={this.props.imageURL} />
        )}
        <CardContent>
          <Typography
            type='headline'
            component='h2'
            className={classes.titleColor}
          >
            {this.props.title}
          </Typography>
          <Typography
            type='subheading'
            component='h3'
            className={classes.dateColor}
          >
            {date}
          </Typography>
        </CardContent>
        <CardActions>
          <Link className={classes.link} to={`/post/${this.props.id}`}>
            <Button dense color='primary'>
              Read More
            </Button>
          </Link>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(PostPreview)
