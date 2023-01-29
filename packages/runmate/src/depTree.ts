import semver from 'semver/preload';

import { PackageJson } from './ICommons';

export interface PackageItem extends PackageJson {
  index: number;
  dependents: string[];
}

export class DepTree {
  seen = new Map<string, PackageItem>();
  packageValues: PackageItem[] = [];

  constructor(value: PackageJson[]) {
    this.packageValues = value.map((el, index) => ({
      ...el,
      index,
      dependents: [],
    }));
  }

  find = (): PackageItem[] => {
    return this.packageValues
      .map((el, index) => this.traverse(el, index))
      .sort((a, b) => b.dependents.length - a.dependents.length);
  };

  private traverse = (input: PackageJson, index: number): PackageItem => {
    let { seen } = this;

    const {
      name,
      dependencies,
      devDependencies,
      optionalDependencies,
      peerDependencies,
    } = input;

    let current = seen.get(name);
    if (current) return current;

    current = {
      index,
      ...input,
      dependents: [],
    };

    seen.set(name, current);

    const deps = {
      ...optionalDependencies,
      ...peerDependencies,
      ...devDependencies,
      ...dependencies,
    };

    for (let [depName, depVersion] of Object.entries(deps)) {
      //
      const localCompatibleVersion = this.packageValues.find((localPackage) => {
        if (localPackage.name !== depName) return;
        return semver.satisfies(localPackage.version, depVersion);
      });

      if (!localCompatibleVersion) continue;

      const item = this.traverse(
        localCompatibleVersion,
        localCompatibleVersion.index
      );

      item.dependents.push(name);
    }

    return current;
  };
}
