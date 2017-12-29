import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// material-ui
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader'
// material-ui-icon
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import AlarmClock from 'material-ui-icons/Alarm'
// Data
import { graphql } from 'react-apollo'
import { getAllCategories } from '../../graphql/queries/categories'

class SideComponent extends Component {
  render () {
    const classes = this.props.classes
    return (
      <div>
        <Drawer
          type='persistent'
          classes={{
            paper: classes.drawerPaper
          }}
          open={this.props.open}
        >
          <div className={classes.drawerInner}>
            <div className={classes.drawerHeader}>
              <Link to='/'>
                <ListItem>
                  <img
                    className={classes.logo}
                    alt='logo'
                    src='https://raw.githubusercontent.com/dabbott/react-native-express/master/static/logo.png'
                  />
                </ListItem>
              </Link>
              <IconButton onClick={this.props.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <ListSubheader>Current Events</ListSubheader>
            <Link to='/' className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <AlarmClock />
                </ListItemIcon>
                <ListItemText inset secondary='Home' />
              </ListItem>
            </Link>
            <Divider />
            <ListItem button>
              <ListItemText primary='Categories' />
            </ListItem>
            {!this.props.data.loading &&
              this.props.data.categories &&
              this.props.data.categories.edges.map(category => (
                <Link
                  key={category.node.id}
                  to={`/category/${category.node.slug}`}
                  className={classes.link}
                >
                  <ListItem button>
                    <ListItemText secondary={category.node.name} />
                  </ListItem>
                </Link>
              ))}
            <Divider />
          </div>
        </Drawer>
      </div>
    )
  }
}

export default graphql(getAllCategories)(SideComponent)
