import { createEntity } from '@darch/entity';
import { createType, ObjectType } from '@darch/schema';
import { assert, IsExact } from 'conditional-type-checks';

describe('index', () => {
  beforeAll(ObjectType.reset);

  it('works', async () => {
    const type = createType('User', {
      object: {
        name: 'string',
        age: 'int?',
      },
    });

    const entity = createEntity({
      name: 'user',
      type,
      indexes: [
        {
          field: '_id',
          name: 'byName',
          PK: ['.name'],
        },
      ],
    });

    type Res = ReturnType<typeof entity.parse>;

    assert<IsExact<Res['createdAt'], Date>>(true);
    assert<IsExact<Res['name'], string>>(true);
    assert<IsExact<Res['age'], number | undefined>>(true);

    expect(entity.type.print()).toEqual([
      'type userEntity {',
      '  createdAt: Date!',
      '  createdBy: String',
      '  id: String!',
      '  ulid: Ulid!',
      '  updatedAt: Date!',
      '  updatedBy: String',
      '  name: String!',
      '  age: Int',
      '}',
      '',
      'scalar Date',
      '',
      'scalar Ulid',
      '',
      'input userEntityInput {',
      '  createdAt: Date!',
      '  createdBy: String',
      '  id: String!',
      '  ulid: Ulid!',
      '  updatedAt: Date!',
      '  updatedBy: String',
      '  name: String!',
      '  age: Int',
      '}',
    ]);
  });
});
