const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: [
    './src/index.js',
    './src/scss/main.scss',
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin([
/*      {*/
        //from: './src/fonts',
        //to: './fonts'
      //},
      //{
        //from: './src/favicon',
        //to: './favicon'
      /*},*/
      {
        from: './src/images',
        to: './images'
      }/*,*/
      //{
        //from: './src/uploads',
        //to: './uploads'
      /*}*/
    ]),
  ]
};
