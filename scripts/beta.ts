import 'zx/globals';
import process from 'process';

import semver from 'semver';

const current = fs.readJSONSync(path.resolve(process.cwd(), 'package.json')).version;

const next = semver.inc(current, 'prerelease', 'beta', '1');

await $`run version ${next}`;

if (!process.env.BUILD) {
  throw new Error(`Missing process.env.BUILD`);
}

if (process.env.BUILD === '*') {
  await $`run "pnpm run build"`;
} else {
  await $`run ${process.env.BUILD} build`;
}

await $`run "pnpm publish --access=public --tag=next --ignore-scripts"`;
await $`git add . && git commit -m "${next}"`;
