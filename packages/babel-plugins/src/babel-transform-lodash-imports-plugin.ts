import { PluginObj } from '@babel/core';

/**
 * Plugin to transform lodash imports to ESM format.
 * @returns {PluginObj} The Babel plugin object.
 */
export function TransformLodashImportsPlugin(): PluginObj {
  return {
    name: 'transform-lodash-imports',

    visitor: {
      ImportDeclaration(path) {
        const lodashPattern = /^(lodash)(\/.*)?$/;
        const sourceValue = path.node.source.value;

        if (lodashPattern.test(sourceValue)) {
          // If it's a lodash import, modify it to use an ESM format.
          path.node.source.value = sourceValue.replace(
            lodashPattern,
            (_match, _lodash, subPath) => {
              // If there's a subpath (like lodash/map), format it for ESM.
              // Otherwise, return 'lodash-es'.
              return subPath ? `lodash-es${subPath}` : 'lodash-es';
            }
          );
        }
      },
    },
  };
}
