module.exports = (config, env) => {
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader"
        }
      ]
    }
  );
  return config
};