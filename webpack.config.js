var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: '#inline-source-map',
  entry: {
    bundle: './src/index'
  },

  output: {
    path: './dist',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.css', 'scss']
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
                  // activate source maps via loader query
                  'css?sourceMap!' +
                  'sass?sourceMap'
                )
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]

}
