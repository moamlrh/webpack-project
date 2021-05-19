const path = require("path");
const MiniCssExtractPuglins = require("mini-css-extract-plugin");
const HtmlWebapckPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const join = (...paths) => path.join(__dirname, ...paths);

module.exports = (env) => {
  const isDevelopment = env.mode === "development";
  const isProduction = env.mode === "production";

  const config = {
    mode: isDevelopment ? "development" : "production",
    devtool: isDevelopment ? "eval" : "source-map",
    target: isDevelopment ? "web" : "browserslist",
    devServer: {
      contentBase: join("src"),
      open: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          include: join("src"),
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(css|sass|scss)$/i, // to check all files css tyeps
          use: [MiniCssExtractPuglins.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpg|jpeg|svg)/i,
          use: "url-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebapckPlugin({
        inject: "body",
        title: "Webpack project",
        template: join("src", "index.html"),
      }),
      new MiniCssExtractPuglins({
        filename: "name.css",
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
  console.log("the mode is  ==>> ", config.mode);
  return config;
};
