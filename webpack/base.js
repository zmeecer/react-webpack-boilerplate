const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    bundle: './src/index',
    react: ['react', 'react-dom', 'react-router-dom', 'react-redux', 'redux'],
    vendors: ['axios', 'lodash', 'moment'],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src'),
    ],
  },
};

const rules = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: 'babel-loader',
}, {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  enforce: 'pre',
  loader: 'eslint-loader',
}, {
  test: /\.(jpe?g|png|gif|svg)$/,
  loader: 'file-loader',
  exclude: /node_modules/,
  query: { name: '[path][name].[ext]' },
}, {
  test: /\.(eot)(\?[a-z0-9=&.]+)?$/,
  loader: 'url-loader?limit=1024',
}, {
  test: /\.(ttf|otf)(\?[a-z0-9=&.]+)?$/,
  loader: 'url-loader?limit=1024&mimetype=application/octet-stream',
}, {
  test: /\.woff(2)?(\?[a-z0-9=&.]+)?$/,
  loader: 'url-loader?limit=1024&mimetype=application/font-woff',
}];

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    names: ['react', 'vendors'],
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.ejs',
    title: 'Boilerplate',
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

module.exports = {
  config,
  rules,
  plugins,
};
