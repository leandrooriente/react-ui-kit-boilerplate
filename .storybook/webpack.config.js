const path = require("path");
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [
      path.resolve(__dirname, "../src"),
      path.resolve(__dirname, "../.storybook")
    ],
    use: [
      {
        loader: require.resolve("ts-loader"),
        options: {
          reportFiles: ["../src"]
        }
      },
      require.resolve("react-docgen-typescript-loader"),
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};