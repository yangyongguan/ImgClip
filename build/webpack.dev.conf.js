const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = merge(baseConfig, {
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    inline: true,
    hot: true,
    contentBase: resolve('dist'),
    open: false,
    https: true,
    host: 'localhost',
    port: 8888,
    overlay: {
      warnings: false,
      errors: true
    },
    historyApiFallback: true,
    compress: true
  }
})

module.exports = webpackConfig
