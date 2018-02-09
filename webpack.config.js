const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: { extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader', 'sass-loader'
          ]
        })
      },
      {
        test: /.png$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}
