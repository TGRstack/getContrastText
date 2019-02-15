const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin')

const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
  mode: 'production',
  devtool: false, // README.md
  bail: true,
  plugins: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
  ],
})
