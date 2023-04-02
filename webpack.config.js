const path = require("path");
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      images: path.join(__dirname, "src/assets/images"), // not to import like ../../
      src: path.join(__dirname, "src"),
    },
  },
  devtool: "eval-source-map", // to have reference to the source map
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),

    // to pass the environmental variable defined in .env to the current application
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
