import React, { MouseEvent } from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'

import { Drawer } from '@material-ui/core'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { IconButton } from '@material-ui/core'

import { ChevronLeft, Inbox, Drafts, Star, Mail, Send, Delete, Report } from '@material-ui/icons'

import Style from './sidebar.style'

interface SidebarProp {
  classes: any
  open: boolean
  onClose: (event: MouseEvent<HTMLElement>) => void
}

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
            section1.map((each, index) => {
              return (
                <ListItem key={"1" + index} button>
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
            section2.map((each, index) => {
              return (
                <ListItem key={"2" + index} button>
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

export default Style(Sidebar)
