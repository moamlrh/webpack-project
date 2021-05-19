const path = require("path");
const MiniCssExtractPuglins = require("mini-css-extract-plugin");
const HtmlWebapckPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefresh = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const join = (...paths) => path.join(__dirname, ...paths);

module.exports = (env) => {
  const isDevelopment = env.mode === "development";
  const isProduction = env.mode === "production";

  const config = {
    mode: isDevelopment ? "development" : "production",
    devtool: isDevelopment ? "eval" : "source-map",
    target: isDevelopment ? "web" : "browserslist",
    entry: join("src/index.js"),
    output: {
      path: join("build"),
      assetModuleFilename: "images/[hash][ext][query]", // all imgs in iamges dir
    },
    devServer: {
      contentBase: join("dist"),
      open: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif|svg)/,
          type: "asset", //  asset/inline or asset/resource
          // parser: {
          //   dataUrlCondition: {
          //     maxSize: 30 * 1024,
          //   },
          // },
        },
        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(css|sass|scss)$/i, // to check all files css tyeps
          use: [MiniCssExtractPuglins.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({}),
      new HtmlWebapckPlugin({
        inject: "body",
        title: "HtmlWebapckPlugin",
        template: join("src", "index.html"),
      }),
      new MiniCssExtractPuglins({
        filename: "name.css",
      }),
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshPlugin(),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
  console.log("the mode is  ==>> ", config.mode);
  return config;
};
