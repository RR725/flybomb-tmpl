'use strict'
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let ExtractTextPlugin = require('extract-text-webpack-plugin')
let webpack = require('webpack')
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

let HtmlWebpackPlugin = require('html-webpack-plugin')

let config = env => {
  let plugins = []
  if (env.build) {

    plugins.push(new BundleAnalyzerPlugin())
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
    new ExtractTextPlugin(
      'resources/tmpl/dist/common' +
        (env.build ? '.[chunkhash:8]' : '') +
        '.css'
    ), //合并css文件
    new HtmlWebpackPlugin({
      //生成Html，自动把打包后的文件加到html中
      title: 'tmpl',
      inject: 'body',
      chunks: ['vender', 'main'],
      filename: 'views/index.html', //打包后的文件
      template: 'resources/tmpl/html/index.html' //模板文件
    }),
    new CommonsChunkPlugin({
      //把公共的文件打包
      names: ['vender']
    })
  ])
  return {
    entry: {
      main: './resources/tmpl/lib/main.js',
     
      vender: ['match-media', 'react', 'react-dom'] //这几个抽离出来打包成vender.js
    },
    output: {
      publicPath: '/',
      chunkFilename: 'resources/tmpl/dist/chunk.[chunkhash:8].js',
      filename:
        'resources/tmpl/dist/[name]' +
        (env.build ? '.[chunkhash:8]' : '') +
        '.js'
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
                  ['import', [{ libraryName: 'antd', style: 'css' }]], //antd按需加载
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
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true //css压缩
                }
              }
            ]
          })
        }
      ]
    },
    devServer: {
      disableHostCheck: true //Invalid Host header错误，需要这个配置
      //   proxy: {
      //     '/restapi/*': {
      //       target: 'http://ecofe.me/',
      //       changeOrigin: true
      //     }
      //   }
    },
    plugins: plugins
  }
}

module.exports = config
