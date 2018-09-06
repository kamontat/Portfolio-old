import React from 'react'
import classNames from 'classnames'

import { Link } from 'gatsby'

// Element
import { AppBar, Toolbar, Drawer } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { IconButton } from '@material-ui/core'

// Icon
import { Brightness6, Menu, Code } from '@material-ui/icons'

import Style from './navbar.style'

interface NavbarProp {
  classes: any
  open: boolean
  onOpenSidebar: any
}

class Navbar extends React.Component<NavbarProp> {
  render() {
    const { classes, open, onOpenSidebar } = this.props;

    return (
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar disableGutters={true}>
          <Typography variant="title" color="inherit" style={{ flexGrow: 1 }} noWrap>
            {/* <Link to="/" >KC</Link> */}
            KC
              </Typography>
          <IconButton
            color="inherit"
            className={classNames(classes.menuButton)}
          >
            <Brightness6 />
          </IconButton>
          <IconButton
            color="inherit"
            className={classNames(classes.menuButton)}
          >
            <a href="/admin/#/" style={{ color: "inherit" }}>
              <Code style={{ color: "inherit" }} />
            </a>
          </IconButton>
          <IconButton
            color="inherit"
            onClick={onOpenSidebar}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Style(Navbar)