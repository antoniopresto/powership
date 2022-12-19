import { runeach } from 'runeach';
import * as process from 'process';

const time = new Date().toISOString().replace(/\D/g, '');
const version = `0.0.0-alpha.${time}`;

/**
 * Build, Publish Alpha
 */
const { map, root } = runeach();

const skip_build = (process.env.skip_build || process.env.sb) !== undefined;

map(({ run }) => {
  if (skip_build) return;
  run('build');
});

map(({ saveJSON, json, run }) => {
  json.version = version;
  updateVersion(json, 'dependencies');
  updateVersion(json, 'peerDependencies');
  updateVersion(json, 'devDependencies');
  delete json.gitHead;

  run('prettier ./package.json --write');

  saveJSON();

  run('npm publish --tag=next --access public');
});

root(`git add -A && git commit -m "alpha version ${version}" && git push -f`);

if (!skip_build) {
  map(({ run }) => {
    run('test');
  });
}

function updateVersion(json: any, key: keyof any) {
  Object.keys(json[key] || {}).forEach((dep) => {
    if (dep.match(/backland/)) {
      json[key]![dep] = version;
    }
  });
}
