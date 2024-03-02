import { PackageJson, sortObject } from '@powership/utils';
import { CWD, fsExtra, glob, nodePath } from '@powership/utils/node';

export type ExportDepsOptions = {
  cwd?: string;
  rootDir?: string;
  pattern?: string[];
  ignore?: string[];
  writeToIndex?: boolean;
  outDir?: string;
};

export function exportDeps(options: ExportDepsOptions) {
  const {
    ignore = [],
    outDir = 'out',
    cwd = CWD(),
    pattern = [
      './*.ts',
      './*.tsx',
      './*.mts',
      './*.js',
      './*.jsx',
      './*.json',
      './*.css',
      './*.sass',
      './*.less',
    ],
  } = options;

  const jsonPath = nodePath.resolve(cwd, 'package.json');

  const files = glob.globSync(pattern, {
    cwd,
    ignore,
  });

  const json: PackageJson = fsExtra.readJSONSync(jsonPath);

  const exports = {};

  files.forEach((file) => {
    const basename = nodePath.basename(file).split('.')[0];
    const isIndex = basename === 'index';

    const key = isIndex ? '.' : './' + basename;

    const value = `./${outDir}/${file}`;

    exports[key] = exports[key] || {
      import: value,
      types: value,
    };
  });

  json.exports = sortObject(exports);

  fsExtra.writeFileSync(jsonPath, JSON.stringify(json, null, 2));
}
