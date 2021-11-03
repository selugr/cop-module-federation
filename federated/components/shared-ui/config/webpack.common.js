const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
   optimization: {
    minimize: false,
  },
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        type: 'asset',
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'sharedUi',
      filename: "remoteEntry.js",
      exposes: {
        "./ButtonFav": "./src/ButtonFav",
        "./Loader": "./src/Loader"
      },
      remotes: {
        sharedUi: "sharedUi@http://localhost:8095/remoteEntry.js"
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};
