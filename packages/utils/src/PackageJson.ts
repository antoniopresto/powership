export interface PackageJson {
  name: string;
  version: string;
  scripts?: Record<string, string>;
  type?: 'module' | 'commonjs';
  main?: string;
  types?: string;
  module?: string;
  exports?: Record<
    string,
    {
      types?: string;
      require?: string;
      import?: string;
    }
  >;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  bin?: Record<string, string>;
  workspaces?:
    | string[]
    | {
        packages: string[];
      };
  generators?: string;
  schematics?: string;
  builders?: string;
  executors?: string;
  [K: string]: unknown;
}
