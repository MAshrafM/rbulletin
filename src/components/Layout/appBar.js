import React, { Component } from 'react'
import classNames from 'classnames'
// material-ui
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
// material-ui-icon
import MenuIcon from 'material-ui-icons/Menu'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import PrintIcon from 'material-ui-icons/Print'
import DashBoardIcon from 'material-ui-icons/Dashboard'
import SearchIcon from 'material-ui-icons/Search'

class TopBar extends Component {
  render () {
    const classes = this.props.classes
    return (
      <div>
        <AppBar
          className={classNames(
            classes.appBar,
            this.props.open && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!this.props.open}>
            <IconButton
              color='contrast'
              aria-label='open drawer'
              onClick={this.props.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.props.open && classes.hide
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
            <IconButton color='primary' aria-label='Search'>
              <SearchIcon />
            </IconButton>
            <IconButton
              color='primary'
              onClick={this.props.handleLayoutChange}
              aria-label='Dashboard'
            >
              <DashBoardIcon />
            </IconButton>
            <IconButton color='primary' aria-label='Print'>
              <PrintIcon />
            </IconButton>
            <IconButton
              color='contrast'
              aria-label='More'
              aria-owns={this.props.openMenu ? 'simple-menu' : null}
              aria-haspopup='true'
              onClick={this.props.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id='simple-menu'
              anchorEl={this.props.anchorEl}
              open={this.props.openMenu}
              onRequestClose={this.props.handleRequestClose}
            >
              <MenuItem onClick={this.props.handleRequestClose}>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default TopBar
