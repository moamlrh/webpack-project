const path = require("path");
const MiniCssExtractPuglins = require("mini-css-extract-plugin");
const HtmlWebapckPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const join = (...paths) => path.join(__dirname, ...paths);
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");
const { default: merge } = require("webpack-merge");

module.exports = (env) => {
  const isDevelopment = env.mode === "development";
  const isProduction = env.mode === "production";

  const config = {
    entry: join("src", "index.js"),
    output: {
      path: join("build"),
      assetModuleFilename: "images/[hash][ext][query]", // all imgs in iamges dir
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
          use: [
            {
              loader: "babel-loader",
              options: {
                // presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: [isDevelopment ? "react-refresh/babel" : []],
              },
            },
          ],
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
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
  return merge(
    config,
    isDevelopment && devConfig(),
    isProduction && prodConfig()
  );
};
