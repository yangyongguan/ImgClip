const path = require('path')
const chalk = require('chalk')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const package = require('../package')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
function subPath (_path) {
  return path.posix.join('', _path)
}
const webpackConfig = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: subPath(`./${package.version}/${package.name}.min.js`),
    path: resolve('dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: resolve(`./${package.version}/`),
      verbose: true
      // exclude: ["files","to","ignore"]//排除不删除的目录，主要用于避免删除公用的文件
    }),
    new ProgressBarPlugin({
      format:
      '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
    })
  ]
})

module.exports = webpackConfig
