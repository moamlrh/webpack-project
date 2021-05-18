const path = require("path");

const join = (...paths) => path.join(__dirname, ...paths);
let mode = "development";

if (process.env.NODE_ENV === "production") mode = "production";

module.exports = (env) => {
  const config = {
    mode,
    devtool: "source-map",
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
