const isProduction = process.env.NODE_ENV === 'production'

const version = require('./package.json').version

module.exports = {
  siteMetadata: {
    title: `Website (${version})`,
    version: version,
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    }, {
      resolve: `gatsby-plugin-emotion`,
      options: {
        hoist: true,
        autoLabel: true,
        sourceMap: !isProduction,
      },
    }, {
      resolve: `gatsby-plugin-sass`,
      options: {
        // precision: 8,
      },
    },
  ],
}
