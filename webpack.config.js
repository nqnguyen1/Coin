const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./client/index.js",
  devServer: {
    open: true,
    proxy: {
      "/api/**": "http://localhost:3000",
      "/assets/**": {
        target: "http://localhost:3000/",
        secure: false,
      },
    },
    static: {
      directory: path.join(__dirname, "client"),
      publicPath: "/",
    },
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.jsx?$/, // either .js or .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { targets: "defaults" }],
            ],
          },
        },
      },
      // Rule for regular CSS files (non-CSS Modules)
      {
        test: /\.css$/,
        exclude: /\.module\.css$/, // Exclude CSS Modules
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // Rule for CSS Modules
      {
        test: /\.module\.css$/, // Target only .module.css files
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]", // Generates unique class names
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
