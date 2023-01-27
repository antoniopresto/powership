import * as process from 'process';

import { runeach } from 'run-each-package';

const { v: CUSTOM_VERSION } = process.env;
const time = new Date().toISOString().replace(/\D/g, '');
const version = CUSTOM_VERSION || `0.0.0-alpha.${time}`;

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

  let publish = [
    //
    'npm publish',
    !CUSTOM_VERSION ? null : '--tag=next',
    '--access public --ignore-scripts',
  ]
    .filter(Boolean)
    .join(' ');

  run(publish);
});

root(`git add -A && git commit -m "published version ${version}" && git push -f`);

function updateVersion(json: any, key: keyof any) {
  Object.keys(json[key] || {}).forEach((dep) => {
    if (dep.match(/backland/)) {
      json[key]![dep] = version;
    }
  });
}
