import React from 'react'
import Helmet from 'react-helmet'
import classNames from 'classnames'
import styled from "styled-components";

import { Link, StaticQuery, graphql } from 'gatsby'

import { Theme, CssBaseline, Typography } from '@material-ui/core';
import { MuiThemeProvider, withStyles, createStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar } from '@material-ui/core';

import { Button, IconButton } from '@material-ui/core'

import { Brightness6, Menu } from '@material-ui/icons'

import Head from './head/head'
import Sidebar from './sidebar/sidebar'

import theme from "./theme"

// import './layout.sass'

interface LayoutProp {
  children: React.ReactNode
  classes: any
  theme: Theme
}

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    zIndex: 1,
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
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
  menuButton: {
    marginLeft: 12,
    marginRight: 12,
  },
  hide: {
    display: 'none',
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
      <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
          <>
            <Head title={data.site.siteMetadata.title} />

            <div className={classes.root}>
              <AppBar
                position="fixed"
                className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
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
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, this.state.open && classes.hide)}
                  >
                    <Menu />
                  </IconButton>
                </Toolbar>
              </AppBar>

              <main className={classes.content}>
                <div className={classes.toolbar} />
                <MuiThemeProvider theme={theme}>
                  <CssBaseline />
                  {this.props.children}
                </MuiThemeProvider>
              </main>

              <Sidebar open={this.state.open} onClose={this.handleDrawerClose} width={drawerWidth} />
            </div>
          </>
        )}
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
