import { mountID } from '../CollectionIndex';

describe('mountID', () => {
  it('1', async () => {
    const sut = mountID({
      entity: 'users',
      PK: 'abc',
      SK: '123',
      indexField: 'batata',
    });
    expect(sut).toBe('users:batata#abc↠123');
  });
});
