const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanPlugin } = require("webpack");
// Webpack configuration for CSS Modules，提取css代码为单独文件

const config = {
  mode: "development",
  entry: {
    index: path.resolve(
      process.cwd(),
      "./practical/css_isolation/css_module/src/index.js"
    ),
  },
  output: {
    path: path.resolve(
      process.cwd(),
      "./practical/css_isolation/css_module/dist"
    ),
    // publicPath: "/assets",
    filename: "[name].[contenthash:5].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]_[hash:base64]",
                exportLocalsConvention: "camel-case",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(
        process.cwd(),
        "./practical/css_isolation/css_module/public/index.html"
      ),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:5].css",
    }),
    new CleanPlugin(),
  ],
};

module.exports = config;
