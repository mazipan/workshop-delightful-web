const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV;

const isDev = () => {
  return (NODE_ENV === 'development');
};

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
};

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: setPath('dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  mode: isDev() ? 'development' : 'production',
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      inject: true,
      template: setPath(`index.html`)
    })
  ]
}