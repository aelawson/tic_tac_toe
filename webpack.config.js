var webpack = require('webpack');
var path = require('path');

var DIR_BUILD = path.resolve(__dirname, './');
var DIR_SRC = path.resolve(__dirname, './src');

var config = {
	entry: DIR_SRC + '/index.jsx',
	output: {
		path: DIR_BUILD,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				include: DIR_SRC,
				loader: 'babel'
			},
			{
				test: /\.js$/,
				include: DIR_SRC,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				include: DIR_SRC,
				loader: 'style-loader!css-loader'
			}
		]
	}
};

module.exports = config