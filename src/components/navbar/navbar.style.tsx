import React from 'react';

import { withStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

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

export default withStyles(styles, { withTheme: true })
