import React from 'react'
import classNames from 'classnames'

import Layout from '../Layout'
import withRoot from '../withRoot'

const IndexPage = () => (
  <Layout>
    <h1 className="is-size-1">Hello world</h1>
    <span className="is-size-2">Hello world</span>
    <p className="is-size-3">Hello world</p>
  </Layout>
)

export default withRoot(IndexPage)
