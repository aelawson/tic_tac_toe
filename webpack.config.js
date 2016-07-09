var webpack = require('webpack');
var path = require('path');

var DIR_BUILD = path.resolve(__dirname, './');
var DIR_SRC = path.resolve(__dirname, './src/components');

var config = {
	entry: DIR_SRC + '/index.jsx',
	output: {
		path: DIR_BUILD,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: DIR_SRC,
				loader: 'babel'
			}
		]
	}
};

module.exports = config