import React from 'react'
import classNames from 'classnames'

import Layout from '../templates/Layout'
import withRoot from '../withRoot'
import {observer, inject} from 'mobx-react'
import Main from '../stores/Main'

import './index.scss'

const IndexPageComponent: React.StatelessComponent<{
  children?: React.ReactNode,
  main?: Main,
}> = ({main}) => {
  return (
    <Layout>
      <input
        className="input"
        type="text"
        placeholder="Text input"
        value={main.title}
        onChange={event => main.updateTitle(event.target.value)}
      />
      <h1 className="is-size-1">Hello world</h1>
      <span className="is-size-2">Hello world</span>
      <p className="is-size-3">{main.title}</p>
    </Layout>
  )
}

const IndexPage = inject((stores: {store?: Main}) => ({
  main: stores.store,
}))(observer(IndexPageComponent))

export default withRoot(IndexPage)
