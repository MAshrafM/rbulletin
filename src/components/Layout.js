import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// Material
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import classNames from 'classnames'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import { Typography } from 'material-ui'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import PrintIcon from 'material-ui-icons/Print'
import DashBoardIcon from 'material-ui-icons/Dashboard'
import SearchIcon from 'material-ui-icons/Search'
import AlarmClock from 'material-ui-icons/Alarm'

const drawerWidth = 250
const styles = theme => ({
  flex: {
    flex: 1
  },
  link: {
    textDecoration: 'none'
  },
  root: {
    width: '100%',
    height: 430,
    zIndex: 1
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  appBar: {
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    left: 0,
    position: 'fixed',
    height: '100%',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    width: '100%',
    marginLeft: 0,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64
      }
    }
  },
  contentShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  image: {
    height: '100%',
    width: '100%'
  }
})

class Layout extends Component {
  state = {
    open: true
  }
  constructor () {
    super()
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
  }

  handleDrawerOpen () {
    this.setState({ open: true })
  }

  handleDrawerClose () {
    this.setState({ open: false })
  }

  render () {
    const classes = this.props.classes
    return (
      <MuiThemeProvider>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar
              className={classNames(
                classes.appBar,
                this.state.open && classes.appBarShift
              )}
            >
              <Toolbar disableGutters={!this.state.open}>
                <IconButton
                  color='contrast'
                  aria-label='open drawer'
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    this.state.open && classes.hide
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  className={classes.flex}
                  type='title'
                  color='inherit'
                  noWrap
                >
                  React Bulletin
                </Typography>
                <IconButton color='contrast' aria-label='Search'>
                  <SearchIcon />
                </IconButton>
                <IconButton color='contrast' aria-label='Dashboard'>
                  <DashBoardIcon />
                </IconButton>
                <IconButton color='contrast' aria-label='Print'>
                  <PrintIcon />
                </IconButton>
                <IconButton color='contrast' aria-label='More'>
                  <MoreVertIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              type='persistent'
              classes={{
                paper: classes.drawerPaper
              }}
              open={this.state.open}
            >
              <div className={classes.drawerInner}>
                <div className={classes.drawerHeader}>
                  <ListItem>
                    <img
                      className={classes.image}
                      alt='logo'
                      src='https://raw.githubusercontent.com/dabbott/react-native-express/master/static/logo.png'
                    />
                  </ListItem>
                  <IconButton onClick={this.handleDrawerClose}>
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
            <main
              className={classNames(
                classes.content,
                this.state.open && classes.contentShift
              )}
            >
              {this.props.children}
            </main>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(Layout)
