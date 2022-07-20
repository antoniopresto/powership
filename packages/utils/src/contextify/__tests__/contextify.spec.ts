import { Contextify } from '../index';

describe('Contextify', () => {
  const { prepareRequire } = new Contextify({
    contextModuleName: 'my-context-module',
  });

  const dir = __dirname + '/tasks';

  test('contextify', async () => {
    const require = prepareRequire({
      currentDirname: dir,
      payload: { anyValue: 999888 },
    });

    const contextfied = require('./module1');

    expect(contextfied()).toEqual({ anyValue: 999888 });
  });
});
