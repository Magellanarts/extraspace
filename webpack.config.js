const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'production',
  module: {
     rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", 
          { loader: MiniCssExtractPlugin.loader},
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        use: 'file-loader?name=assets/fonts/[name].[ext]'
      }
    ]
  },
  entry: './src/index.js',
  watch: true,
  output: {
    publicPath: '/',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
       fonts: path.resolve(__dirname, 'assets/fonts')
    }
  },
  plugins: [
     new MiniCssExtractPlugin()
  ]
};