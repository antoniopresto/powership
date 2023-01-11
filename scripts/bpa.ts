import * as process from 'process';

import { runeach } from 'run-each-package';

const time = new Date().toISOString().replace(/\D/g, '');
const version = `0.0.0-alpha.${time}`;

/**
 * Build, Publish Alpha
 */
const { map, root } = runeach();

const skipBuild = process.env.sb !== undefined;

map(({ run }) => {
  if (skipBuild) return;
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

  let publish = 'npm publish --tag=next --access public --ignore-scripts';

  run(publish);
});

root(`git add -A && git commit -m "alpha version ${version}" && git push -f`);

function updateVersion(json: any, key: keyof any) {
  Object.keys(json[key] || {}).forEach((dep) => {
    if (dep.match(/backland/)) {
      json[key]![dep] = version;
    }
  });
}
