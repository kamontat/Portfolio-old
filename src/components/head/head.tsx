import React from 'react'
import Helmet from 'react-helmet'

interface HeadProp {
  title: string
}

const Head: React.StatelessComponent<HeadProp> = ({ title }) => (
  <Helmet
    title={title}
    meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}>
    <html lang="en" />
  </Helmet>
)

export default Head
