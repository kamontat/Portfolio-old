import React from 'react'

// import { Link } from 'gatsby'

import withRoot from '../withRoot';

const IndexPage = () => (
  <div>
    <h1 className="is-size-1">Hello world</h1>
    <span className="is-size-2">Hello world</span>
    <p className="is-size-3">Hello world</p>
  </div>
)

export default withRoot(IndexPage)
