import React, {Component} from 'react'

import {Link, StaticQuery, graphql} from 'gatsby'

import Head from './components/head/head'

interface WithRootProp {
  children: React.ReactNode;
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

class WithRoot extends React.Component<WithRootProp> {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(process.env.ENV)
    // MuiThemeProvider makes the theme available down the React tree thanks to React context.
    return (
      <StaticQuery
        query={query}
        render={data => (
          <>
            <Head title={data.site.siteMetadata.title} />
            {this.props.children}
          </>
        )}
      />
    )
  }
}

function withRoot(Component) {
  return () => (
    <WithRoot>
      <Component />
    </WithRoot>
  )
}

export default withRoot
