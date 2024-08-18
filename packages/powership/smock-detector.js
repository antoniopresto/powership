import Module from 'node:module';

import assert from 'node:assert';
import { createType as createTypeMJS } from './out/browser/index.mjs';
import './out/index.mjs';

const require = Module.createRequire(import.meta.url);

const { createType: createTypeCJS } = require('./out/browser/index.cjs');
require('./out/index.cjs');

const t1 = createTypeCJS('createTypeCJS', {
  object: {
    name: 'string',
    id: { ulid: { autoCreate: true }, optional: true },
  },
});

const t2 = createTypeCJS('createTypeMJS', {
  object: {
    name: 'string',
    id: { ulid: { autoCreate: true }, optional: true },
  },
});

let errors = [];

try {
  t1.parse({ name: 1 });
} catch (e) {
  errors.push(e.message);
}

try {
  t2.parse({ name: [1] });
} catch (e) {
  errors.push(e.message);
}

assert.deepEqual(errors, [
  '➤ createTypeCJS createTypeCJS: ➤ field "name": Expected value to be of type "string", found number instead.',
  '➤ createTypeMJS createTypeMJS: ➤ field "name": Expected value to be of type "string", found array instead.',
]);

t1.parse({ name: 'antonio' });
t2.parse({ name: 'rafaela' });
