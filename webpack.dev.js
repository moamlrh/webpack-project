const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const join = (...paths) => path.join(__dirname, ...paths);
const webpack = require("webpack");

module.exports = (env) => {
  const config = {
    mode: "development",
    target: "web",
    devtool: "eval",
    devServer: {
      contentBase: join("dist"),
      open: true,
      hot: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshPlugin(),
    ],
  };
  return config;
};
