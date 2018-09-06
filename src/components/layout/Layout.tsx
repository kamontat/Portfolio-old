import React from 'react'
import classNames from 'classnames'

import { Link } from 'gatsby'

import { Theme } from '@material-ui/core';

import { AppBar, Toolbar } from '@material-ui/core';

import { IconButton } from '@material-ui/core'

import { Brightness6, Menu } from '@material-ui/icons'

import Sidebar from '../sidebar/sidebar'
import Navbar from '../navbar/navbar';

import Style from './Layout.style'

interface LayoutProp {
  children: React.ReactNode
  classes: any
  theme: Theme
}

class Layout extends React.Component<LayoutProp> {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  toMainPage = props => <Link to="/" {...props} />

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Navbar open={this.state.open} onOpenSidebar={this.handleDrawerOpen} />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>

        <Sidebar open={this.state.open} onClose={this.handleDrawerClose} />
      </div>
    );
  }
}

export default Style(Layout)
