const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin(
        {
          inject: true,
          template: path.resolve('./public/index.html'),
        }
    )
  ],
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        use: 'babel-loader'
      },
      {
        test: /\.(scss|less|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  }
};
