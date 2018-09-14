import React from 'react'
import classNames from 'classnames'

import withRoot from '../withRoot'

import './index.scss'

const Container = ({ children }) => <div>{children}</div>

const IndexPage = () => (
  <Container>
    <h1 className="is-size-1">Hello world</h1>
    <span className="is-size-2">Hello world</span>
    <p className="is-size-3">Hello world</p>
  </Container>
)

export default withRoot(IndexPage)
