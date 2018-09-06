import React from 'react'
import classNames from 'classnames'

import { Link } from 'gatsby'

// Style
import { Theme } from '@material-ui/core'
import { withStyles, createStyles } from '@material-ui/core/styles'

// Element
import { AppBar, Toolbar, Drawer } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { IconButton } from '@material-ui/core'

// Icon
import { Brightness6, Menu, Code } from '@material-ui/icons'

interface NavbarProp {
  classes: any
  open: boolean
  onOpenSidebar: any
}

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
  appBar: {
    paddingLeft: 24,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 12,
  },
})

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

export default withStyles(styles)(Navbar)
