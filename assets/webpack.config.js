var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './js/index.js'
  },

  output: {
    path: path.join(__dirname, '..', 'static'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?importLoaders=1!postcss-loader'
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
