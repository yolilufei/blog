import webpack from "webpack";
import path from "path";
/**
 * @type {webpack.Configuration}
 */
const config = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve("./dist"),
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: "host",
      remotes: {
        remote: "remote@http://localhost:3001/remoteEntry.js",
      },
    }),
  ],
};

export default config;
