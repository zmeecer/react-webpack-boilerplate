const webpack = require('webpack');
const path = require('path');
const {
  config,
  rules,
  plugins,
} = require(path.resolve(__dirname, './base'));

const webpackConfig = Object.assign({}, config, {
  devtool: 'eval',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'devel'),
    publicPath: 'http://localhost:8888/',
  },
  module: {
    rules: [
      ...rules,
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...plugins,
  ],
  devServer: {
    contentBase: './devel',
    historyApiFallback: true,
    port: 8888,
    inline: true,
    hot: true,
  },
});

module.exports = webpackConfig;
