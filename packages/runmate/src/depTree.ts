import { PackageJson } from './ICommons';

export interface PackageItem extends PackageJson {
  index: number;
  dependents: string[];
}

export class DepTree {
  seen = new Map<string, PackageItem>();
  packageValues: PackageItem[] = [];
  packageByName = new Map<string, PackageItem>();

  // dependencyEntryNames = [
  //   'dependencies',
  //   'devDependencies',
  //   'optionalDependencies',
  //   'peerDependencies',
  //   'devDependencies',
  // ];

  constructor(value: PackageJson[]) {
    this.packageValues = value.map((json, index) => {
      const item: PackageItem = {
        ...json,
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
