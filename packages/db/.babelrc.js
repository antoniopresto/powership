const nodeConfig = {};

const envConfig = {
  node: {},

  'module-node': {
    ...nodeConfig,
    modules: false,
    targets: {
      node: '14',
      esmodules: true,
    },
  },
}

const config = {
  presets: [
    '@babel/preset-typescript', //
    ['@babel/preset-env', envConfig],
  ],
  ignore: [
    '**/*.spec.ts', //
    '**/__tests__/**/*',
  ],
};

module.exports = config;
