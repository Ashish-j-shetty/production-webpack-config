const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserPlugin = require("terser-webpack-plugin");

require("dotenv").config({
  path: "./.env.prod",
});

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "build"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      images: path.join(__dirname, "src/assets/images"), // not to import like ../../
      src: path.join(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg|webp)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/template.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    // to seperate out teh css file from the js bundle
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css",
    }),

    // to pass the environmental variable defined in .env to the current application
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),

    new BundleAnalyzerPlugin(),
  ],
  mode: "production",
  devtool: "hidden-source-map", // this setting is for production

  //to compress the files
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
      new TerserPlugin({
        exclude: /node_modules/,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
