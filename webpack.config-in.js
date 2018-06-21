'use strict';

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

let HtmlWebpackPlugin = require('html-webpack-plugin');


let config = {
	entry: {
		main: './resources/push/lib/main.js',
		push: [
			'./resources/push/lib/url-model.js',
			'./resources/push/lib/utils.js',
			'./resources/push/js/search.js',
			'./resources/push/js/default-permission.js',
			'./resources/push/js/producttype-app.js',
			'./resources/push/js/push-detail.js',
			'./resources/push/js/validate-date.js'
		],
		vender: ['match-media', 'react', 'react-dom', 'antd'] //这几个抽离出来打包成vender.js
	},
	output: {
		publicPath: 'http://push-res.in.mzres.com/',
		chunkFilename: 'resources/push/dist/[chunkhash:8].chunk.js',
		filename: 'resources/push/dist/[name].js?ver=<%= jsVersion%>'
	},
	// debug: true,
	// devtool: 'source-map',
	module: {
		// noParse: [/\breact\b/],
		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loaders: ['babel?presets[]=react&presets[]=es2015']
		}, {
			test: /\.less$/,
			loader: 'style!css!less'
		}, // use ! to chain loaders
		{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			test: /\.(png|jpg|gif)$/,
			// loader: 'url?limit=8192&name=img/[hash:8].[name].[ext]'
			loader: 'url' // 用到的图片全部转base64塞到js
		}
		]
	},
	devServer: {
		proxy: {
			'/garcia/*': {
				target: 'http://push.meizu.com/',
				changeOrigin: true

			}
		}
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({ minimize: true }),
		new ExtractTextPlugin('resources/push/dist/common.css?ver=<%= jsVersion%>'), //合并css文件
		new HtmlWebpackPlugin({ //生成Html，自动把打包后的文件加到html中
			title: 'push',
			inject: 'body',
			chunks: ['vender', 'main', 'push'],
			filename: 'resources/push/html/views/in/index.jsp', //打包后的文件
			template: 'resources/push/html/index-in.jsp' //模板文件
		}),
		new HtmlWebpackPlugin({ //生成Html，自动把打包后的文件加到html中
			title: 'push',
			inject: 'body',
			chunks: ['vender', 'main', 'push'],
			filename: 'resources/push/html/views/in/user-group.jsp', //打包后的文件
			template: 'resources/push/html/user-group-in.jsp' //模板文件
		}),
		new CommonsChunkPlugin({ //把公共的文件打包
			names: ['push', 'vender']
		})
	]
}

module.exports = config