const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const {
  config,
  rules,
  plugins,
} = require(path.resolve(__dirname, './base'));

const webpackConfig = Object.assign({}, config, {
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      ...rules,
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    ...plugins,
    new ExtractTextPlugin({
      filename: 'assets/[name].css',
      allChunks: true,
    }),
    new WebpackCleanupPlugin({ preview: true }),
  ],
});

module.exports = webpackConfig;
