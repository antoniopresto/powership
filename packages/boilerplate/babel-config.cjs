const { ModuleExtensions } = require('@powership/babel-plugins');
const { TARGET } = process.env;
const validTargets = ['module', 'browser', 'node', 'module-browser', 'module-node'];

if (!validTargets.includes(TARGET)) {
  throw new Error(`Invalid process.env.TARGET "${TARGET}", expected one of ${validTargets}`);
}

const KIND = TARGET.includes('browser') ? 'browser' : 'server';
const KIND_INVERT = KIND === 'browser' ? 'server' : 'browser';

const destinationExtension = {
  browser: 'cjs',
  node: 'cjs',
  module: 'mjs',
  'module-browser': 'mjs',
  'module-node': 'mjs',
}[TARGET];

const browserConfig = {
  useBuiltIns: 'entry',
  corejs: '3.22',
  targets: {
    chrome: '58',
    ie: '11',
  },
};

const nodeConfig = {
  targets: {
    node: '14',
  },
};

const envConfig = {
  browser: {
    ...browserConfig,
  },

  'module-browser': {
    ...browserConfig,
    modules: false,
    targets: {
      ...browserConfig.targets,
      esmodules: true,
    },
  },

  node: {
    ...nodeConfig,
  },

  'module-node': {
    ...nodeConfig,
    modules: false,
    targets: {
      ...nodeConfig.targets,
      esmodules: true,
    },
  },
}[TARGET];

module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-typescript', //
    ['@babel/preset-env', envConfig],
  ];

  const plugins = [
    ['babel-plugin-add-import-extension', { extension: destinationExtension, replace: true }],
    [
      require('@powership/babel-plugins').StripBlocksPlugin,
      {
        magicComment: `@only-${KIND_INVERT}`,
      },
    ],
    [
      require('@powership/babel-plugins').ModuleExtensions,
      {
        destinationExtension,
      },
    ],
  ];

  return {
    presets,
    plugins,
    ignore: [
      /node_modules/,
      '**/__tests__', //
    ],
  };
};
