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
              <ListItem>
                <img
                  className={classes.logo}
                  alt='logo'
                  src='https://raw.githubusercontent.com/dabbott/react-native-express/master/static/logo.png'
                />
              </ListItem>
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
            <Link to='/categories' className={classes.link}>
              <ListItem button>
                <ListItemText primary='Categories' />
              </ListItem>
            </Link>
            <Divider />
          </div>
        </Drawer>
      </div>
    )
  }
}

export default SideComponent
