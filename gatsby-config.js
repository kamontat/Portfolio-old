
const isProduction = process.env.NODE_ENV === 'production'
const package = require("./package.json")

module.exports = {
  siteMetadata: {
    title: `${package.name} (${package.version})`,
    version: package.version,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: package.name,
        short_name: package.name,
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
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
        precision: 8,
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-jss',
  ],
}
