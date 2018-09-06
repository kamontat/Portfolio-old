/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.modifyWebpackConfig = ({ config, env }) => {
  config.merge({
    resolve: {
      alias: {
        '_variables.sass': path.resolve(__dirname, './src/styles/_variables.sass')
      }
    }
  })
  return config
}
