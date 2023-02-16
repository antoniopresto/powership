import { runeach } from 'runmate';

const { v } = process.env;
const version = v || `0.0.0-alpha.${Date.now()}`;

runmate().map(({ saveJSON, json, run }) => {
  json.version = version;

  Object.keys(json.dependencies || {}).forEach((dep) => {
    if (dep.match(/solarwind/)) {
      json.dependencies![dep] = version;
    }
  });
  Object.keys(json.peerDependencies || {}).forEach((dep) => {
    if (dep.match(/solarwind/)) {
      json.peerDependencies![dep] = version;
    }
  });
  Object.keys(json.devDependencies || {}).forEach((dep) => {
    if (dep.match(/solarwind/)) {
      json.devDependencies![dep] = version;
    }
  });
  saveJSON();
  run('prettier ./package.json --write');
});
