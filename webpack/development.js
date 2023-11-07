module.exports = {
  devServer: {
    static: {
      directory: "./public",
    },
    port: 3000,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        // Corrected regex: now matches .module.scss or .module.sass
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]__[hash:base64:5]",
              },
            },
          },
          "sass-loader", // If additional options are not needed, this can be a string
        ],
      },
      {
        // Corrected regex: now matches all .scss, .sass, and .css files not including .module
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/, // Corrected regex to exclude module files
        use: [
          "style-loader",
          "css-loader",
          "sass-loader", // Simplified as above
        ],
      },
    ],
  },
};
