import { createType } from '../../GraphType/GraphType';
import { resetTypesCache } from '../../ObjectType';

import { tsfyWriter } from '../tsfyWriter';
import { delay } from '@backland/utils';

describe('tsfyWriter', () => {
  afterEach(resetTypesCache);

  test('works', async () => {
    const sut = tsfyWriter({ writeThrottleMS: 100 });
    sut.listen();

    const user = createType('User', {
      object: {
        name: 'string',
        age: 'int',
      },
    });

    sut.add(user);

    await delay(300);

    expect(sut).toEqual([]);
  });
});
