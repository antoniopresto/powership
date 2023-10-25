import { extname } from 'path';

import { PluginObj } from '@babel/core';

// Adds .cjs, .mjs file extension to make it compatible for both CJS and ESM.
// the existing npm package for that not worked with require() inside function,
// which is the case in CircularDeps.ts
export function ModuleExtensions(): PluginObj {
  return {
    name: 'module-extensions',

    visitor: {
      Program(path, pluginPass) {
        const { destinationExtension } = pluginPass.opts as any;

        path.traverse({
          enter(path) {
            const identifier = path.node?.expression?.arguments?.[0];
            if (!identifier?.value?.startsWith?.('./')) return;
            if (extname(identifier.value)) return;
            identifier.value += `.${destinationExtension}`;
          },
        });
      },
    },
  };
}
