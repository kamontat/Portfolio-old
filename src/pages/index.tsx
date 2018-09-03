import React from 'react'

import Button from '@material-ui/core/Button'

// import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <Button variant="contained" color="primary" >
      Hello World
    </Button>
    {/* 
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
