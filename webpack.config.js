const path = require('path');
require("dotenv").config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PORT = process.env.PORT || 8080;
module.exports = {
   entry: {
      main: './src/script/index.js'
   },
   devtool: 'inline-source-map',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      publicPath: '',
   },
   mode: 'development',
   devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      open: true,
      compress: true,
      port: PORT
   },
   module: {
      rules: [{
         test: /\.js$/,
         use: 'babel-loader',
         exclude: '/node_modules/'
      },
      {
         test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
         type: 'asset/resource',
      },
      {
         test: /\.css$/,
         use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
               importLoaders: 1
            }
         },
            'postcss-loader'
         ]
      },
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html'
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),

   ]
}