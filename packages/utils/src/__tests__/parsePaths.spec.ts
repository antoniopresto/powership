import { createPathParser } from '../pathParser';

describe('parsePaths', () => {
  test('basic test', () => {
    const { path, affectedList, list } = createPathParser('a.b.1.2[3]');

    expect({ path, affectedList, list }).toEqual({
      affectedList: ['a.b.1.2.3', 'a.b.1.2', 'a.b.1', 'a.b', 'a'],
      list: ['a', 'b', '1', '2', '3'],
      path: 'a.b.1.2.3',
    });
  });

  test('list init', () => {
    const { path, affectedList, list } = createPathParser(['a', 'b', 3]);

    expect({ path, affectedList, list }).toEqual({
      affectedList: ['a.b.3', 'a.b', 'a'],
      list: ['a', 'b', '3'],
      path: 'a.b.3',
    });

    expect(createPathParser.cache?.get(['a', 'b', 3])).toHaveProperty(
      'path',
      'a.b.3'
    );
  });
});
