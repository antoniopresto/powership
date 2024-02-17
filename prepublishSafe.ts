/// <reference types="bun-types" />

import nodePath from 'path';

import type { PackageJson } from './packages/runmate/src';

export interface PackageItem {
  index: number;
  json: PackageJson;
  dependents: string[];
}

class DepTree {
  seen = new Map<string, PackageItem>();
  packageValues: PackageItem[] = [];
  packageByName = new Map<string, PackageItem>();

  constructor(value: PackageJson[]) {
    this.packageValues = value.map((json, index) => {
      const item: PackageItem = {
        json,
        index,
        dependents: [],
      };
      this.packageByName.set(json.name, item);
      return item;
    });
  }

  find = (): PackageItem[] => {
    return (
      this.packageValues
        .map((el, index) => this.traverse(el, index))
        // fixme if a package has only 1 dependent and this dependent is the first, it will brake the pipeline
        .sort((a, b) => b.dependents.length - a.dependents.length)
    );
  };

  private traverse = (input: PackageItem, index: number): PackageItem => {
    let { seen } = this;

    const { name, dependencies, devDependencies, optionalDependencies, peerDependencies } = input.json;

    let current = seen.get(name);
    if (current) return current;

    current = {
      index,
      json: input.json,
      dependents: [],
    };

    seen.set(name, current);

    const deps = {
      ...optionalDependencies,
      ...peerDependencies,
      ...devDependencies,
      ...dependencies,
    };

    const entries = Object.entries(deps);

    for (let [depName] of entries) {
      const localDep = this.packageByName.get(depName);
      if (!localDep) continue;
      const usedLocalDep = this.traverse(localDep, localDep.index);
      usedLocalDep.dependents.push(name);
    }

    return current;
  };
}

const packages = new Bun.Glob(
  './packages/**/package.json' //
).scanSync({ absolute: true, onlyFiles: false });

const jsons: PackageJson[] = [];
const pathByPackage = new Map<string, string>();

for (let path of packages) {
  const file: PackageJson = await Bun.file(path).json();
  jsons.push(file);
  pathByPackage.set(file.name, nodePath.dirname(path));
}

const depTree = new DepTree(jsons).find();

await Bun.$`pnpm i`;

for (let dep of depTree) {
  const cwd = pathByPackage.get(dep.json.name);
  const shell = Bun.$.cwd(cwd);
  await shell`pnpm run prepublishOnly`;
}
