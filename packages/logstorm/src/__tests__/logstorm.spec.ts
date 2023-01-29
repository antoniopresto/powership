import { logstorm } from '../index';

describe('logstorm', () => {
  // afterEach();

  test('works', async () => {
    logstorm.level = 'trace';

    let values, method;

    logstorm.hooks.willPrint((ctx) => {
      values = ctx.values;
      method = ctx.method;
    });

    await logstorm.log('foo', 'bar');

    expect({
      values,
      method,
    }).toEqual({
      method: 'log',
      values: ['➤ ', expect.stringMatching(/\n$/), ' ', 'foo', 'bar'],
    });

    logstorm.color = 'cyan';
    logstorm.name = 'Potatoes';

    await logstorm.lazyDebug(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3]);
        }, 50);
      });
    });

    expect({
      values,
      method,
    }).toEqual({
      method: 'debug',
      values: ['➤ ', expect.stringMatching(/\n$/), ' ', 1, 2, 3],
    });
  });
});
