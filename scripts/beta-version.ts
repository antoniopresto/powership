import semver from 'semver';
import 'zx/build/globals';

const current = fs.readJSONSync(path.resolve(process.cwd(), 'package.json')).version;

const next = semver.inc(current, 'prerelease', 'beta', '1');

await $`run version ${next}`;
