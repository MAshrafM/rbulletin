import React, { Component } from 'react'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import classNames from 'classnames'
import theme from './cusTheme'
import TopBar from './appBar'
import SideBar from './drawer'
import styles from './styles'
import AnnouncementForm from './AnnouncementForm'

class Layout extends Component {
  state = {
    open: true,
    anchorEl: null,
    openMenu: false,
    viewType: 'list',
    btnDrawerOpen: false
  }

  constructor () {
    super()
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleLayoutChange = this.handleLayoutChange.bind(this)
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  componentWillMount () {
    if (window.innerWidth < 770) {
      this.setState({
        open: false
      })
    }
  }

  handleClick (event) {
    this.setState({
      openMenu: true,
      anchorEl: event ? event.currentTarget : null
    })
  }

  handleRequestClose () {
    this.setState({
      openMenu: false
    })
  }

  handleDrawerOpen () {
    this.setState({ open: true })
  }

  handleDrawerClose () {
    this.setState({ open: false })
  }

  handleLayoutChange () {
    const newView = this.state.viewType === 'grid' ? 'list' : 'grid'
    window.localStorage.setItem('l-type', newView)
    this.setState({
      viewType: newView
    })
  }

  toggleDrawer () {
    this.setState({
      btnDrawerOpen: !this.state.btnDrawerOpen
    })
  }

  render () {
    const classes = this.props.classes
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <TopBar
            viewType={this.state.viewType}
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            classes={this.props.classes}
            openMenu={this.state.openMenu}
            handleDrawerOpen={this.handleDrawerOpen}
            handleClick={this.handleClick}
            handleRequestClose={this.handleRequestClose}
            handleLayoutChange={this.handleLayoutChange}
          />
          <SideBar
            open={this.state.open}
            classes={this.props.classes}
            handleDrawerClose={this.handleDrawerClose}
            toggleDrawer={this.toggleDrawer}
          />
          <AnnouncementForm
            btnDrawerOpen={this.state.btnDrawerOpen}
            toggleDrawer={this.toggleDrawer}
          />
          <div className={classes.appFrame}>
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
