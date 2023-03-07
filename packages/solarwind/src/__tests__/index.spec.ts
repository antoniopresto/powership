import { createEntity } from '@swind/entity';
import { createType, ObjectType } from '@swind/schema';
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
          name: '_id',
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
      '',
      '  """',
      '  The full string value of the first index following the RegExp format "^user⋮_id⋮.*"',
      '  """',
      '  _id: String!',
      '',
      '  """',
      '  The _idPK field in the RegExp format "^user⋮_id⋮.*"',
      '  """',
      '  _idPK: String!',
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
      '',
      '  """',
      '  The full string value of the first index following the RegExp format "^user⋮_id⋮.*"',
      '  """',
      '  _id: String!',
      '',
      '  """',
      '  The _idPK field in the RegExp format "^user⋮_id⋮.*"',
      '  """',
      '  _idPK: String!',
      '  name: String!',
      '  age: Int',
      '}',
    ]);
  });
});
