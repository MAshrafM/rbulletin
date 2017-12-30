import React, { Component } from 'react'
// material-ui
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import { red } from 'material-ui/colors'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  err: {
    color: red[500]
  }
})

class Error extends Component {
  render () {
    return (
      <Grid
        container
        className={this.props.classes.root}
        justify='center'
        align='center'
      >
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            className={this.props.classes.err}
            type='headline'
            gutterBottom
          >
            {this.props.error}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Error)
