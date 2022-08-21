import { formatGraphQL } from '../formatGraphQL';
import { formatTypescript } from '../formatTypescript';

describe('formatCode', () => {
  test('graphql', async () => {
    const sut = formatGraphQL('query users ($name: Int   ){name}').split('\n');

    expect(sut).toEqual([
      'query users($name: Int) {', //
      '  name',
      '}',
    ]);
  });

  test('typescript', async function () {
    const sut = formatTypescript(
      `/*my type*/
      type banana = {   name: 1}
    enum Foo { a = 1}`
    ).split('\n');

    expect(sut).toEqual([
      '/*my type*/',
      'type banana = { name : 1 }',
      'enum Foo { a = 1 }',
    ]);
  });
});
