#!/usr/bin/env node

import { runeach } from './index';

const { map } = runeach();

const packages = new Set<string>();

map(({ json, run }) => {
  packages.add(json.name);
  run(`yarn link`);
});

map(({ run, json }) => {
  const deps = {
    ...json.dependencies,
    ...json.devDependencies,
    ...json.peerDependencies,
  };

  Object.keys(deps).forEach((dep) => {
    if (!packages.has(dep)) return;
    run(`yarn link ${dep}`);
  });
});
