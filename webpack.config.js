module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  entry: "./src/js/index.js",
  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    path: __dirname + "/public/js",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["env", { modules: false }]],
            },
          },
        ],
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
      },

      // CSS取り込み設定
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
};
