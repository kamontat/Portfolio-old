
const isProduction = process.env.NODE_ENV === 'production'
const package = require("./package.json")

module.exports = {
  siteMetadata: {
    siteUrl: "https://kamontat.space",
    title: `${package.name} (${package.version})`,
    version: package.version,
  },
  plugins: [{
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/icons/favicon.png",

      // WebApp Manifest Configuration
      appName: package.name, // Inferred with your package.json
      appDescription: package.description,
      developerName: package.author.name,
      developerURL: package.author.url,
      dir: 'auto',
      lang: 'en-US',
      background: '#fff',
      theme_color: '#fff',
      display: 'standalone',
      orientation: 'any',
      start_url: '/',
      version: package.version,

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
        windows: false
      }
    }
  }, {
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
  }, {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: package.name,
      short_name: package.name,
      start_url: '/',
      background_color: '#fff',
      theme_color: '#fff',
      display: 'minimal-ui',
      icon: 'src/icons/favicon.png', // This path is relative to the root of the site.
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
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
