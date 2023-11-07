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
        test: /\.module\s(a|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(s(a|c)ss|css)$/,
        exclude: /\.module\.(s(a|c)ss)$/, // Fixed typo here (exlude -> exclude)
        use: [
          // Changed from 'loader' to 'use' because it's an array
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
