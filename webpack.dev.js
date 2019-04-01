const merge = require('webpack-merge');
// const postcssPresetEnv = require('postcss-preset-env');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    contentBase: './dist',
    hot: true,
  },
});
