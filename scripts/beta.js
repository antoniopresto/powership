#!/usr/bin/env zx

import { $, fs } from 'zx';
import semver from 'semver';

const current = fs.readJSONSync(path.resolve(process.cwd(), 'package.json')).version;

const next = semver.inc(current, 'prerelease', 'beta', '1');

await $`run version ${next}`;
await $`run "pnpm run build"`;
await $`run "pnpm publish --access=public --tag=next --ignore-scripts"`;
await $`git add . && git commit -m "${next}"`;
