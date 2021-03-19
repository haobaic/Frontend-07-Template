module.exports = {
  mode: "development",
  // entry: "./main.js",
  entry: "./animation-dome.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [["@babel/plugin-transform-react-jsx",{pragma:"createElement"}]],
          },
        },
      },
    ],
  },
};
