import { logstorm } from '../index';

describe('logstorm', () => {
  // afterEach();

  test('works', async () => {
    let values, method;

    logstorm.hooks.willLog((ctx) => {
      values = ctx.values;
      method = ctx.method;
    });

    await logstorm.log('foo', 'bar');

    expect({
      values,
      method,
    }).toEqual({ method: 'log', values: ['foo', 'bar'] });

    await logstorm.lazyLog(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3]);
        }, 50);
      });
    });

    expect({
      values,
      method,
    }).toEqual({ method: 'log', values: [1, 2, 3] });
  });
});
