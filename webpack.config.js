const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  resolveLoader: {
    moduleExtensions: ['*-loader', '*'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }],
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'React JS',
    template: 'src/index.html'
  })],
};
