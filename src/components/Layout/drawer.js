import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// material-ui
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader'
import Hidden from 'material-ui/Hidden'
// material-ui-icon
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import AlarmClock from 'material-ui-icons/Alarm'
import ClockIcon from 'material-ui-icons/Timer'
// Data
import { graphql } from 'react-apollo'
import { getAllCategories } from '../../graphql/queries/categories'

class SideComponent extends Component {
  render () {
    const classes = this.props.classes
    const drawer = (
      <div className={classes.drawerInner}>
        <div className={classes.drawerHeader}>
          <ListItem>
            <img
              className={classes.image}
              alt='logo'
              src='https://raw.githubusercontent.com/dabbott/react-native-express/master/static/logo.png'
            />
          </ListItem>
          <IconButton
            className={classes.navIconHide}
            onClick={this.props.handleDrawerClose}
          >
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
        <ListSubheader>Categories</ListSubheader>
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
        <ListItem button>
          <ListItemIcon>
            <ClockIcon />
          </ListItemIcon>
          <ListItemText inset primary='Filter By Date' />
        </ListItem>
        <Divider />
        <ListSubheader>Submit Announcement</ListSubheader>
        <ListSubheader>Classic Mode</ListSubheader>
        <ListSubheader>Help</ListSubheader>
      </div>
    )
    return (
      <div>
        <Hidden mdUp>
          <Drawer
            type='temporary'
            open={this.props.open}
            classes={{
              paper: classes.drawerPaper
            }}
            onRequestClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation='css'>
          <Drawer
            type='permanent'
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    )
  }
}

export default graphql(getAllCategories)(SideComponent)
