const { builtinModules } = require('module');

const ignoreList = ['sys'];

export const BUILTIN_MODULES = new Set(
  // https://github.com/sindresorhus/builtin-modules/blob/main/index.js
  (builtinModules || Object.keys((process as any).binding('natives')))
    .filter(
      (x: string) =>
        !/^_|^(internal|v8|node-inspect)\/|\//.test(x) &&
        !ignoreList.includes(x)
    )
    .sort()
);

export function isBuiltInModule(moduleName: string) {
  return BUILTIN_MODULES.has(moduleName);
}
