import { createSchema } from '../Schema';
import { assert, IsExact } from 'conditional-type-checks';
import { Infer } from '../Infer';

describe('subSchemas', () => {
  const schema1 = createSchema('customer', {
    id: 'string',
    title: 'string',
    age: 'int?',
    addresses: {
      schema: {
        street: 'string',
        number: { union: ['string', 'int'] },
        principal: 'boolean?',
      },
      list: true,
    },
  } as const);

  const schema2 = createSchema('campaignMembers', {
    id: { ulid: { autoCreate: true } },
    members: {
      type: schema1,
      list: true,
    },
  });

  it('should infer types correctly', async () => {
    type TSchema1 = Infer<typeof schema1>;

    assert<
      IsExact<
        TSchema1,
        {
          id: string;
          title: string;
          age?: number | undefined;
          addresses: {
            street: string;
            number: string | number;
            principal?: boolean | undefined;
          }[];
        }
      >
    >(true);

    type TSchema2 = Infer<typeof schema2>;

    assert<
      IsExact<
        TSchema2,
        {
          id: string;
          members: TSchema1[];
        }
      >
    >(true);
  });

  it('should generate a graphql type with the original schema name', async () => {
    const gql = schema2.entity();
    expect(gql.getTypeName()).toBe(schema2.id);
    expect(gql.getField('members').type.getTypeName()).toBe(schema1.id);
    expect(gql.getField('members').type.getTypeName()).toBe('customer');
  });
});
