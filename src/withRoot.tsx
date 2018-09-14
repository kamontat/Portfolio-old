import React from 'react'

import { Link, StaticQuery, graphql } from 'gatsby'

import Head from './components/head/head'

import './styles/index.scss'

interface WithRootProp {
  children: React.ReactNode
}

function withRoot(Component) {
  class WithRoot extends React.Component<WithRootProp> {
    constructor(props) {
      super(props)
    }

    render() {
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
              <Component {...this.props} />
            </>
          )}
        />
      )
    }
  }
  return WithRoot
}

export default withRoot
