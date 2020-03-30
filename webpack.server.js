const nodeExternals = require("webpack-node-externals");
const path = require("path");
module.exports = {
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  entry: ["./src/server/index.js"],
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "index.js"
  }
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: ["babel-loader"]
  //     }
  //   ]
  // }
};
