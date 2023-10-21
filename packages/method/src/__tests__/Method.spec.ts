import { Method } from '../Method';

describe('Method', () => {
  // afterEach();

  test('basic test', () => {
    const sut = new Method({
      name: 'findOne',
      kind: 'query',
      result: 'string',
      args: {},
    });

    expect(sut).toEqual([]);
  });
});
