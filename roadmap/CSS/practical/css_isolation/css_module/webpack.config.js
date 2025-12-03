const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanPlugin } = require("webpack");
// Webpack configuration for CSS Modules，提取css代码为单独文件
const config = {
  mode: "development",
  entry: path.resolve(
    process.cwd(),
    "./practical/css_isolation/css_module/button.module.css"
  ),
  output: {
    path: path.resolve(
      process.cwd(),
      "./practical/css_isolation/css_module/dist"
    ),
    filename: "[name]_[contenthash:5].js",
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
                localIdentName: "[name]_[local]_[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new CleanPlugin()],
};

module.exports = config;
