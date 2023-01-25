import { runeach } from 'run-each-package';

const { v } = process.env;
const version = v || `0.0.0-alpha.${Date.now()}`;

runeach().map(({ saveJSON, json, run }) => {
  json.version = version;

  Object.keys(json.dependencies || {}).forEach((dep) => {
    if (dep.match(/backland/)) {
      json.dependencies![dep] = version;
    }
  });
  Object.keys(json.peerDependencies || {}).forEach((dep) => {
    if (dep.match(/backland/)) {
      json.peerDependencies![dep] = version;
    }
  });
  Object.keys(json.devDependencies || {}).forEach((dep) => {
    if (dep.match(/backland/)) {
      json.devDependencies![dep] = version;
    }
  });
  saveJSON();
  run('prettier ./package.json --write');
});
