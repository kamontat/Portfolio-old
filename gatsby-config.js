const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'
const packageJson = require('./package.json')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://kamontat.space',
    title: `${packageJson.name} (${packageJson.version})`,
    version: packageJson.version,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/icons/favicon.png',

        // WebApp Manifest Configuration
        appName: packageJson.name, // Inferred with your package.json
        appDescription: packageJson.description,
        developerName: packageJson.author.name,
        developerURL: packageJson.author.url,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: packageJson.version,

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-124896160-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Any additional create only fields (optional)
        name: 'personal',
        siteSpeedSampleRate: 50,
        cookieDomain: 'kamontat.space',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: packageJson.name,
        short_name: packageJson.name,
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/icons/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        hoist: true,
        autoLabel: true,
        sourceMap: !isProduction,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sourceMap: true,
        precision: 8,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
