import { parsePath } from '../parsePath';

describe('parsePaths', () => {
  test('basic test', () => {
    const { path, affectedList, parts } = parsePath('a.b.1.2[3]');

    expect({ path, affectedList, parts }).toEqual({
      affectedList: ['a.b.1.2.3', 'a.b.1.2', 'a.b.1', 'a.b', 'a'],
      parts: ['a', 'b', '1', '2', '3'],
      path: 'a.b.1.2.3',
    });
  });

  test('list init', () => {
    const { path, affectedList, parts } = parsePath(['a', 'b', 3]);

    expect({ path, affectedList, parts }).toEqual({
      affectedList: ['a.b.3', 'a.b', 'a'],
      parts: ['a', 'b', '3'],
      path: 'a.b.3',
    });
  });
});
