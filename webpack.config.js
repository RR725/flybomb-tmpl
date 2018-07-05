'use strict'

let ExtractTextPlugin = require('extract-text-webpack-plugin')
let webpack = require('webpack')
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

let HtmlWebpackPlugin = require('html-webpack-plugin')

let config = env => {
  let plugins = []
  if (env.build) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        minimize: true
      })
    )
  }
  plugins = plugins.concat([
    new ExtractTextPlugin('resources/push/dist/common.[chunkhash:8].css'), //合并css文件
    new HtmlWebpackPlugin({
      //生成Html，自动把打包后的文件加到html中
      title: 'push',
      inject: 'body',
      chunks: ['vender', 'main', 'push'],
      filename: 'views/index.html', //打包后的文件
      template: 'resources/push/html/index.html' //模板文件
    }),
    new CommonsChunkPlugin({
      //把公共的文件打包
      names: ['push', 'vender']
    })
  ])
  return {
    entry: {
      main: './resources/push/lib/main.js',
      push: [
        './resources/push/lib/url-model.js',
        './resources/push/lib/utils.js',
      ],
      vender: ['match-media', 'react', 'react-dom'] //这几个抽离出来打包成vender.js
    },
    output: {
      publicPath: 'http://push-res.mzres.com/',
      chunkFilename: 'resources/push/dist/chunk.[chunkhash:8].js',
      filename: 'resources/push/dist/[name].[chunkhash:8].js'
    },
    // debug: true,
    // devtool: 'source-map',
    module: {
      // noParse: [/\breact\b/],
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['react', 'es2015', 'env'], //env用在async await

                plugins: [
                  'transform-decorators-legacy',
                  'transform-decorators',
                  'syntax-dynamic-import',
                  'transform-class-properties',
                  'transform-runtime'
                ]
              }
            }
          ]
        },

        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader']
          })
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader', // 用到的图片全部转base64塞到js
          options: {
            limit: 8192
          }
        }
      ]
    },
    devServer: {
      disableHostCheck: true //Invalid Host header错误，需要这个配置
      //   proxy: {
      //     '/garcia/*': {
      //       target: 'http://push.meizu.com/',
      //       changeOrigin: true
      //     }
      //   }
    },
    plugins: plugins
  }
}

module.exports = config
