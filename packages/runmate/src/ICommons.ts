export interface PackageJson {
  name: string;
  version: string;
  description?: string;
  scripts?: { [scriptName: string]: string };
  author?: string | { name: string; email?: string; url?: string };
  repository?: string | { type: string; url: string };
  keywords?: string[];
  dependencies?: { [dependencyName: string]: string };
  devDependencies?: { [dependencyName: string]: string };
  peerDependencies?: { [dependencyName: string]: string };
  optionalDependencies?: { [dependencyName: string]: string };
  license?: string;
  [key: string]: unknown;
}
