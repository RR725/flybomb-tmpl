'use strict'
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let webpack = require('webpack')
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

let HtmlWebpackPlugin = require('html-webpack-plugin')

let config = env => {
  return {
    entry: {
      main: './resources/push/lib/main.js',
      push: [
        './resources/push/lib/url-model.js',
        './resources/push/lib/utils.js',
        './resources/push/js/default-permission.js',
        './resources/push/js/producttype-app.js'
      ],
      vender: ['match-media', 'react', 'react-dom'] //这几个抽离出来打包成vender.js
    },
    output: {
      // publicPath:'http://push-res.mzres.com',
      publicPath: 'http://push-res.mzres.com/',
      chunkFilename: 'resources/push/dist/[id].chunk.js',
      filename: 'resources/push/dist/[name].js?ver=2017'
    },
    // debug: true,
    // devtool: 'source-map',
    module: {
      // noParse: [/\breact\b/],
      rules: [
        {
          // 	test: /\.(js|jsx)$/,
          // 	exclude: /node_modules/,
          // 	loaders: ['babel?presets[]=react&presets[]=es2015']
          // }, {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['react', 'es2015'],

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
          loader: 'style!css!less'
        }, // use ! to chain loaders
        // {
        // 	loader: "babel-loader",
        // 	query: {
        // 		presets: ["es2015"],
        // 		plugins: [["import", { libraryName: "antd", style: "css" }]]
        // 	}
        // },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          })
        },
        {
          test: /\.(png|jpg|gif)$/,
          // loader: 'url?limit=8192&name=img/[hash:8].[name].[ext]'
          loader: 'url-loader', // 用到的图片全部转base64塞到js
          options: {
            limit: 8192
          }
        }
      ]
    },
    devServer: {
      disableHostCheck: true, //Invalid Host header错误，需要这个配置
      proxy: {
        //用push-dev.meizu.com访问时可以避免接口跨域
        '/garcia/*': {
          target: 'http://push.meizu.com/',
          changeOrigin: true
        }
      }
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin({ minimize: true }),
      new ExtractTextPlugin('resources/push/dist/common.css?ver=2017'), //合并css文件
      new HtmlWebpackPlugin({
        //生成Html，自动把打包后的文件加到html中
        title: 'push',
        inject: 'body',
        chunks: ['vender', 'main', 'push'],
        filename: 'views/index.html', //打包后的文件
        template: 'resources/push/html/index.' + env.production ? 'jsp' : 'html' //模板文件
      }),
      new CommonsChunkPlugin({
        //把公共的文件打包
        names: ['push', 'vender']
      })
    ]
  }
}

module.exports = config
