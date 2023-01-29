import fs from 'fs';
import nodePath from 'path';
import vm from 'vm';

import { Process } from '../useProcess';

import { isBuiltInModule } from './builtin-modules';

const ORIGINAL_REQUIRE = require;
const GET_PATHS = ORIGINAL_REQUIRE.resolve.paths;

export type ContextifyOptions = {
  contextModuleName?: string;
  persistentCache?: object;
  allowSourcemaps?: boolean;
  buildByExtension?: Record<string, (filepath: string) => string> | null;
  mock?:
    | ((params: {
        moduleName: string;
        filename: string;
        payload: object;
      }) => any)
    | null;
  getFileContents?: ((filename: string) => string) | null;
  resolveModule?:
    | ((path: string, currentDirname: string) => string | null)
    | null;
};

type PrepareRequireArgs = {
  currentDirname: string;
  transitiveCache?: object;
  payload: object;
  sandbox?: object | vm.Context | true;
  vmContext?: vm.Context | null;
};

const IS_PROD_ENV = Process.env?.NODE_ENV === 'production';

export class Contextify {
  allBranches = new Set();
  persistentCache: Record<string, any>;
  filePathCache = Object.create(null);
  buildByExtension: ContextifyOptions['buildByExtension'];
  allowSourcemaps: boolean;
  mock:
    | ((params: {
        moduleName: string;
        filename: string;
        payload: object;
      }) => any)
    | null;

  contextModuleName = 'use-task-payload';

  getFileContents = (filename: string) => this._readFileFromDisk(filename);

  resolveModule = (path: string, currentDirname: string) => {
    return this._findNodeModulePath(path, currentDirname);
  };

  constructor(options: ContextifyOptions) {
    this.persistentCache = options.persistentCache || Object.create(null);
    this.buildByExtension = options.buildByExtension;
    this.allowSourcemaps =
      typeof options.allowSourcemaps !== 'undefined'
        ? options.allowSourcemaps
        : !IS_PROD_ENV;
    this.mock = options.mock || null;

    if (options.contextModuleName) {
      this.contextModuleName = options.contextModuleName;
    }

    if (options.getFileContents) {
      this.getFileContents = options.getFileContents;
    }

    if (options.resolveModule) {
      const { resolveModule } = options;

      const self = this;
      this.resolveModule = (path, currentDirname) => {
        if (isBuiltInModule(path)) return path;
        if (path === self.contextModuleName) return self.contextModuleName;
        const result = resolveModule(path, currentDirname);
        if (!result) {
          throw new Error(
            `Cannot find module ${path} - currentDirname: ${currentDirname}`
          );
        }
        return result;
      };
    }
  }

  prepareRequire = (config: PrepareRequireArgs) => {
    const { persistentCache, mock } = this;
    const {
      currentDirname,
      transitiveCache = Object.create(null),
      payload,
    } = config;
    const self = this;

    const vmContext = (() => {
      const { vmContext, sandbox } = config;
      if (vmContext) return vmContext;
      if (!sandbox) return null;
      if (sandbox === true) return Contextify.prepareContext({});
      if (vm.isContext(sandbox)) return sandbox as vm.Context;
      return Contextify.prepareContext(sandbox);
    })();

    return function require(moduleName: string) {
      const filename = self.resolveModule(moduleName, currentDirname);

      const mocked = mock?.({ moduleName, filename, payload });

      if (mocked !== undefined) {
        transitiveCache[filename] = mocked;
        return mocked;
      }

      if (transitiveCache[filename]) {
        return transitiveCache[filename].exports;
      }

      if (moduleName === self.contextModuleName) {
        const module = {
          exports: () => payload,
        };
        transitiveCache[filename] = module;
        return module.exports;
      }

      if (isBuiltInModule(moduleName)) {
        return ORIGINAL_REQUIRE(moduleName);
      }

      if (!filename) {
        throw new Error(`Cannot find module ${moduleName}`);
      }

      let closure = persistentCache[filename];

      if (!closure) {
        const code = self._readFileWrapped(filename);

        const script = new vm.Script(code, {
          filename: filename,
          displayErrors: false,
        });

        closure = vmContext
          ? script.runInContext(vmContext, {
              filename: filename,
              displayErrors: true,
            })
          : script.runInThisContext({
              filename: filename,
              displayErrors: true,
            });

        if (!vmContext) {
          persistentCache[filename] = closure;
        }
      }

      const dirname = nodePath.dirname(filename);

      const module = {
        filename,
        exports: {},
        require: self.prepareRequire({
          currentDirname: dirname,
          transitiveCache,
          payload: payload,
          vmContext,
        }),
      };
      transitiveCache[filename] = module;

      const $TASK_MODULE_UTILS = {
        sourceMaps: () => {
          if (!self.allowSourcemaps) return;
          if (transitiveCache.installedSourcemaps) return;
          transitiveCache.installedSourcemaps = true;

          function retrieveFile(filename: string) {
            return (
              self.persistentCache[`${filename}.wrapped_module_contents`] ||
              null
            );
          }

          require('source-map-support').install({
            retrieveFile,
            isTask: true,
          });
        },
      };

      closure(
        module.exports,
        module.require,
        module,
        filename,
        dirname,
        $TASK_MODULE_UTILS
      );
      return module.exports;
    };
  };

  _readFileWrapped = (filename: string) => {
    const KEY = `${filename}.wrapped_module_contents`;
    if (this.persistentCache[KEY]) return this.persistentCache[KEY];
    const extension = nodePath.extname(filename);
    let code: string;

    if (this.buildByExtension?.[extension]) {
      code = this.buildByExtension[extension](filename);
    } else {
      code = this.getFileContents(filename);
    }

    return (this.persistentCache[KEY] = wrapModuleCode(code));
  };

  _findNodeModulePath = (path: string, currentDirname: string): string => {
    if (path === this.contextModuleName) return this.contextModuleName;

    const cacheKey = `${currentDirname}_${path}`;
    if (this.filePathCache[cacheKey]) return this.filePathCache[cacheKey];

    const filePath = ORIGINAL_REQUIRE.resolve(path, {
      paths: [currentDirname, ...(GET_PATHS(currentDirname) || [])],
    });

    return (this.filePathCache[cacheKey] = filePath);
  };

  diskFilesCache = Object.create(null);
  _readFileFromDisk = (filename: string) => {
    const KEY = `${filename}.plain_disk_content`;
    if (this.diskFilesCache[KEY]) return this.diskFilesCache[KEY];
    return (this.diskFilesCache[KEY] = fs.readFileSync(filename, 'utf8'));
  };

  static prepareContext(sandbox: object) {
    return vm.createContext({
      global: { isContextifySandbox: true },
      isTaskVMSandbox: true,
      process,
      console,
      version: parseInt(process.versions.node.split('.')[0]),
      setTimeout,
      setInterval,
      setImmediate,
      clearTimeout,
      clearInterval,
      clearImmediate,
      String,
      Number,
      Buffer,
      Boolean,
      Array,
      Date,
      Error,
      EvalError,
      RangeError,
      ReferenceError,
      SyntaxError,
      TypeError,
      URIError,
      RegExp,
      Function,
      Object,
      Proxy,
      Reflect,
      Map,
      WeakMap,
      Set,
      WeakSet,
      Promise,
      Symbol,
      ...sandbox,
    });
  }
}

function wrapModuleCode(code: string, strict = true) {
  const MODULE_PREFIX =
    '(function (exports, require, module, __filename, __dirname, $TASK_MODULE_UTILS) { ';
  const STRICT_MODULE_PREFIX =
    MODULE_PREFIX + '"use strict";$TASK_MODULE_UTILS.sourceMaps();\n';
  const MODULE_SUFFIX = '\n});';

  const prefix = strict ? STRICT_MODULE_PREFIX : MODULE_PREFIX;
  return prefix + code + MODULE_SUFFIX;
}
