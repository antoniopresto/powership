import { rumm } from './rumm';
import { PackageJson } from '@backland/utils';

const time = new Date().toISOString().replace(/\D/g, '');
const version = `0.0.0-alpha.${time}`;

/**
 * Build, Publish Alpha
 */
const { map, root } = rumm();

map(({ saveJSON, json, run }) => {
  json.version = version;

  updateVersion(json, 'dependencies');
  updateVersion(json, 'peerDependencies');
  updateVersion(json, 'devDependencies');
  delete json.gitHead;

  saveJSON();
  run('prettier ./package.json --write');
  run('npm run build');
  run('npm publish --tag=next');
});

root(`git commit -m "alpha version ${version}" && git push -f`);

function updateVersion(json: PackageJson, key: keyof PackageJson) {
  Object.keys(json[key] || {}).forEach((dep) => {
    if (dep.match(/backland/)) {
      json[key]![dep] = version;
    }
  });
}
