var webpack = require('webpack');
var path = require('path');

var DIR_BUILD = path.resolve(__dirname, './');
var DIR_SRC = path.resolve(__dirname, './src');

var config = {
	entry: DIR_SRC + '/index.jsx',
	devtool: 'source-map',
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
			},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      		{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
		]
	}
};

module.exports = config