module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.story\.js?/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: {
            printWidth: 100,
            singleQuote: false
          }
        }
      }
    ],
    enforce: 'pre'
  });

  return config;
};
