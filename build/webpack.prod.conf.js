const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function subPath (_path) {
  return path.posix.join('dist', _path)
}

const plugins = [
  new CleanWebpackPlugin(['dist'], {
    root: resolve('/'),
    verbose: true
    // exclude: ["files","to","ignore"]//排除不删除的目录，主要用于避免删除公用的文件
  }),
  new ProgressBarPlugin({
    format:
      '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
  })
]

const webpackConfig = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: subPath('js/[name].[chunkhash:8].js'),
    path: resolve('dist')
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps,
        uglifyOptions: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  performance: {
    hints: false
  },
  plugins: plugins
})

module.exports = webpackConfig
