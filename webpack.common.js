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
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.(jpg|png)$/,
      use: ['file-loader'],
    },

    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'React JS',
    template: 'src/index.html',
  })],
};
