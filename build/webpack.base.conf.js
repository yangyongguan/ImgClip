const path = require('path')
const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
function subPath (_path) {
    return path.posix.join('', _path)
}
const webpackConfig = {
  target: 'web',
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? '' : 'source-map',
  entry: {
      index: resolve('src/core/index/clip/index.js')
  },
  output: {
      filename: subPath('js/[name].[hash:8].js'),
      path: resolve('dist')
  },
  resolve: {
    alias: {
      src: resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        include: resolve('src')
      }
    ]
  }
}

module.exports = webpackConfig
