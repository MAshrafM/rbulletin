import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// Material UI
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import { blue, grey } from 'material-ui/colors'
import Divider from 'material-ui/Divider'
// Material UI Icons
import AttachmentIcon from 'material-ui-icons/Attachment'

const styles = {
  card: {
    marginBottom: 15
  },
  media: {
    height: 250
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
  },
  categoryColor: {
    color: '#ffb41f'
  }
}

class PostPreview extends Component {
  render () {
    const classes = this.props.classes
    const date = new Date(this.props.date).toLocaleString()

    return (
      <Card className={classes.card} style={this.props.style}>
        <CardContent>
          <Typography type='caption' className={classes.categoryColor}>
            {this.props.category}
          </Typography>
          <Typography
            type='headline'
            component='h2'
            className={classes.titleColor}
          >
            <Link className={classes.link} to={`/post/${this.props.id}`}>
              {this.props.title}
            </Link>
          </Typography>
          <Typography
            type='subheading'
            component='h3'
            className={classes.dateColor}
          >
            {date}
          </Typography>
          {this.props.imageURL && (
            <CardMedia className={classes.media} image={this.props.imageURL} />
          )}
        </CardContent>
        <Divider />
        <CardActions>
          <Button href={`/post/${this.props.id}`} dense color='primary'>
            Read More
          </Button>
          <Button dense color='primary'>
            <AttachmentIcon /> Attachment
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(PostPreview)
