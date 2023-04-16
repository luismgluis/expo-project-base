const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  return {
    ...config,
    // devServer: {
    //   host: '0.0.0.0',
    //   port: 8088,
    // }
  };
};
