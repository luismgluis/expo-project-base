const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const defaults = await getDefaultConfig();
  // return defaults
  const {
    resolver: { sourceExts }
  } = defaults
  return {
    ...defaults,
    transformer: {
      babelTransformerPath: require.resolve(
        "react-native-sass-transformer"
      )
    },
    resolver: {
      sourceExts: [...sourceExts, "scss", "sass"]
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
          // Agregar la siguiente línea
          enableBabelRCLookup: true,
        },
      }),
    },
  };
})();