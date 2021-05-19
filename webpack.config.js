const path = require("path");
const MiniCssExtractPuglins = require("mini-css-extract-plugin");
const HtmlWebapckPlugin = require("html-webpack-plugin");

const join = (...paths) => path.join(__dirname, ...paths);

module.exports = (env) => {
  const isDevelopment = env.mode === "development";
  const isProduction = env.mode === "production";

  const config = {
    mode: isDevelopment ? "development" : "production",
    devtool: isDevelopment ? "eval" : "source-map",
    devServer: {
      contentBase: join("dist"),
      open: true,
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
          test: /\.(css|sass|scss)$/,
          use: [MiniCssExtractPuglins.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebapckPlugin({
        inject: "body",
        title: "Webpack project",
      }),
      new MiniCssExtractPuglins({
        filename: "[name].[hash:5].css",
      }),
    ],
  };
  console.log(config.mode);
  return config;
};
