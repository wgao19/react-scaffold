let webpack = require('webpack');
let path = require('path');

const TARGET = process.env.npm_lifecycle_event;
const env = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(TARGET === 'dev')
	,__TEST__: JSON.stringify(TARGET === 'test')
	,__RELEASE__: JSON.stringify(TARGET === 'release')
});

module.exports = {
	entry: {
		app: ['./src/index.js']
		,vendor: [
			'react', 'react-dom'//, 'redux', 'react-redux', 'react-router-dom', 'react-router-redux'
		]
	}
	,output: {
		path: __dirname + '/build/',
		filename: '[name].js'
	}
	,resolve: {
		extensions: ['.js', '.jsx']
		// ,root: path.resolve('./')
		,modules: [
			path.resolve('./'),
			'node_modules',
		]
	}
	,module: {
		rules: [{
			test: /\.svg$/
			,use: ['babel-loader', 'svg-react-loader']
		}, {
			test: /\.(jpe?g|png|gif)$/
			,use: ['file-loader']
		}, {
			test: /\.(jsx?)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		}, {
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', {
				loader: 'postcss-loader',
				options: {
					config: {
						path: path.resolve(__dirname, 'postcss.config.js'),
					},
				},
			}, 'sass-loader']
		}]
	}
	,plugins: [
		new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'})
		,env
	]
};
