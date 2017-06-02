/** imports **/
let webpack = require('webpack');
let path = require('path');

const TARGET = process.env.npm_lifecycle_event;
const env = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(TARGET === 'dev'),
});

module.exports = {
  entry: {
    app: ['./src/index.js'],
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'react-router-redux'],
  },
  output: {
    path: `${__dirname}/build/`,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve('./'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['babel-loader', 'svg-react-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: ['file-loader'],
        // loader: "file"
      },
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: require('autoprefixer'),
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    env,
  ],
};
