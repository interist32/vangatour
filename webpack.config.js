var webpack = require('webpack');
var minimist = require('minimist');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

//set defaults params
var defaultParams = {
	environment: 'development'
};

//merge argument params to default params
const params = Object.assign({}, defaultParams, minimist(process.argv.slice(2)));
const isProduction = params.environment !== 'development';

var config = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: './public/bld',
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=c-[name]__[local]__[hash:base64:5]!postcss-loader')
			},
		]
	},
	postcss: function () {
		return [require('autoprefixer'), require('postcss-import'), require('postcss-css-variables')];
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(params.environment)
			}
		}),

		new ExtractTextPlugin('[name].css', {
			allChunks: true
		})

	]
};

if(params.environment === 'production'){
	config.plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		},
		output: {
			comments: false
		}
	})
);

config.plugins.push(new OptimizeCssAssetsPlugin({
	cssProcessorOptions: { discardComments: {removeAll: true } },
}));
}

module.exports = config;
