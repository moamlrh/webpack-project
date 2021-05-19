const path = require("path");

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
      ],
    },
  };

  return config;
};
