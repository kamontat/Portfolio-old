import React from 'react'

import Button from '@material-ui/core/Button'

// import { Link } from 'gatsby'

import Layout from '../components/layout/Layout'
import withRoot from '../withRoot';

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <Button variant="contained" color="primary" >
      Hello World
    </Button>
  </Layout>
)

export default withRoot(IndexPage)
