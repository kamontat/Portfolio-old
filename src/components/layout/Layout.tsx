import React from 'react'
import classNames from 'classnames'

import { Link } from 'gatsby'

import { Theme, Typography } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar } from '@material-ui/core';

import { IconButton } from '@material-ui/core'

import { Brightness6, Menu } from '@material-ui/icons'

import Sidebar from '../sidebar/sidebar'
import Navbar from '../navbar/navbar';

interface LayoutProp {
  children: React.ReactNode
  classes: any
  theme: Theme
}

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    zIndex: 1,
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

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

export default withStyles(styles)(Layout);
