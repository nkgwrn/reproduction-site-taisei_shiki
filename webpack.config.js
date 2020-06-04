module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  entry: "./src/js/index.js",
  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    path: __dirname + "/dist/js",
    filename: "bundle.js",
  },
};
