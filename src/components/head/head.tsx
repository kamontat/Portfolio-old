import React from 'react';
import Helmet from 'react-helmet'

interface HeadProp {
  title: string
}

const Head: React.StatelessComponent<HeadProp> = ({ title }) => (
  <Helmet
    title={title}
    meta={[
      { name: 'description', content: 'Sample' },
      { name: 'keywords', content: 'sample, something' },
    ]}
  >
    <html lang="en" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
  </Helmet>
)

export default Head
