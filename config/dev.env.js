var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: `"${process.env.API_URL}"`,
  FACEBOOK_APP_ID: '"167057483874536"'
})
