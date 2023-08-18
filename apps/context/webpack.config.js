const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index",
  output: {
    path: path.join(__dirname, "build"),
    filename: "main.js",
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3001,
    hot: true,
    open: true,
    liveReload: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[t]sx?$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      template: "public/index.html",
    }),
  ],
};

