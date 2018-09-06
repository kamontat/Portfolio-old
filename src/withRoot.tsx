import React from 'react';

import { Link, StaticQuery, graphql } from 'gatsby'

import { Theme } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Head from './components/head/head'
import getPageContext from './context'

interface WithRootProp {
  muiPageContext: object
  children: React.ReactNode
  classes: any
  theme: Theme
}

function withRoot(Component) {
  class WithRoot extends React.Component<WithRootProp> {
    muiPageContext = null

    constructor(props) {
      super(props);
      this.muiPageContext = props.muiPageContext || getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#server-side-jss');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const { classes } = this.props;

      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
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
              <MuiThemeProvider
                theme={this.muiPageContext.theme}
                sheetsManager={this.muiPageContext.sheetsManager}
              >
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...this.props} />
              </MuiThemeProvider>
            </>
          )}
        />
      );
    }
  }
  return WithRoot;
}

export default withRoot;
