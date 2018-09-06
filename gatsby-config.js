
const isProduction = process.env.NODE_ENV === 'production'
const package = require("./package.json")

module.exports = {
  siteMetadata: {
    title: `${package.name} (${package.version})`,
    version: package.version,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-124896160-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Any additional create only fields (optional)
        name: "personal",
        siteSpeedSampleRate: 50,
        cookieDomain: "kamontat.space",
      },
    },
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
