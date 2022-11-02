import { mountID } from '../CollectionIndex';

describe('mountID', () => {
  test('simple', async () => {
    const sut = mountID({
      entity: 'users',
      PK: 'abc',
      SK: '123',
      indexField: 'batata',
      relatedTo: undefined,
    });
    expect(sut).toBe('users:batata#abc↠123');
  });

  test('as child index', async () => {
    const sut = mountID({
      entity: 'banana',
      PK: 'abc',
      SK: '123',
      indexField: '_id',
      relatedTo: 'fruits',
    });
    expect(sut).toBe('fruits:_id#abc≻banana↠123');
  });
});
