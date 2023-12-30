import { extname } from 'path';

import { PluginObj } from '@babel/core';

// Adds .cjs, .mjs file extension to make it compatible for both CJS and ESM.
// The existing npm package for that not worked with require() inside function,
// which is the case in internal.ts
export function ModuleExtensions(): PluginObj {
  return {
    name: 'module-extensions',

    visitor: {
      Program(path, pluginPass) {
        const { destinationExtension } = pluginPass.opts as any;

        path.traverse({
          enter(path) {
            // @ts-ignore
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
