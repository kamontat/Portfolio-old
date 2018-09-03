import React, { MouseEvent } from 'react'
import classNames from 'classnames'

import { withStyles, createStyles } from '@material-ui/core/styles'

import { Theme } from '@material-ui/core'

import { Drawer } from '@material-ui/core'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { IconButton } from '@material-ui/core'

import { ChevronLeft, Inbox, Drafts, Star, Mail, Send, Delete, Report } from '@material-ui/icons'

interface SidebarProp {
  classes: any
  width: number
  open: boolean
  onClose: (event: MouseEvent<HTMLElement>) => void
}

const styles = (theme: Theme) => createStyles({
  drawerPaper: {
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
})

class Sidebar extends React.Component<SidebarProp> {
  render() {
    const { classes } = this.props

    let sep = [
      {
        separate: true
      }
    ]

    let section1 = [
      {
        icon: Inbox,
        text: "Inbox",
      }, {
        icon: Star,
        text: "Starred",
      }, {
        icon: Send,
        text: "Send Mail",
      }, {
        icon: Drafts,
        text: "Drafts",
      }
    ]

    let section2 = [
      {
        icon: Mail,
        text: "All mail",
      }, {
        icon: Delete,
        text: "Trash",
      }, {
        icon: Report,
        text: "Spam",
      }
    ]

    return (
      <Drawer
        variant="permanent"
        anchor="right"
        classes={{
          paper: classNames(classes.drawerPaper, !this.props.open && classes.drawerPaperClose)
        }}
        open={this.props.open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={this.props.onClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            section1.map(function (each) {
              return (
                <ListItem button>
                  <ListItemIcon>
                    <each.icon />
                  </ListItemIcon>
                  <ListItemText primary={each.text} />
                </ListItem>
              )
            })
          }
        </List>
        <Divider />
        <List>
          {
            section2.map(function (each) {
              return (
                <ListItem button>
                  <ListItemIcon>
                    <each.icon />
                  </ListItemIcon>
                  <ListItemText primary={each.text} />
                </ListItem>
              )
            })
          }
        </List>
      </Drawer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Sidebar)