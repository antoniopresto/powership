import { rumm } from './rumm';
import { PackageJson, ulid } from '@backland/utils';

const version = `0.0.0-alpha.${ulid()}`;

/**
 * Build, Publish Alpha
 */
rumm().map(({ saveJSON, json, run }) => {
  json.version = version;

  updateVersion(json, 'dependencies');
  updateVersion(json, 'peerDependencies');
  updateVersion(json, 'devDependencies');

  saveJSON();
  run('prettier ./package.json --write');
  run('npm run build');
  run('npm publish --tag=next');
});

function updateVersion(json: PackageJson, key: keyof PackageJson) {
  Object.keys(json[key] || {}).forEach((dep) => {
    if (dep.match(/backland/)) {
      json[key]![dep] = version;
    }
  });
}
