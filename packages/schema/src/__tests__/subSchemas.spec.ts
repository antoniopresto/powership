import { assert, IsExact } from 'conditional-type-checks';

import { Infer } from '../Infer';

import { createObjectType } from '../types';

describe('subObjects', () => {
  const object1 = createObjectType('customer', {
    id: 'string',
    title: 'string',
    age: 'int?',
    addresses: {
      object: {
        street: 'string',
        // number: { union: ['string', 'int'] },
        principal: 'boolean?',
      },
      list: true,
    },
  } as const);

  const object2 = createObjectType('campaignMembers', {
    id: { ulid: { autoCreate: true } },
    members: {
      type: object1,
      list: true,
    },
  });

  it('should infer types correctly', async () => {
    type TObject1 = Infer<typeof object1>;

    assert<
      IsExact<
        TObject1,
        {
          addresses: {
            //number: string | number;
            principal?: boolean | undefined;
            street: string;
          }[];
          age?: number | undefined;
          id: string;
          title: string;
        }
      >
    >(true);

    type TObject2 = Infer<typeof object2>;

    assert<
      IsExact<
        TObject2,
        {
          id: string;
          members: TObject1[];
        }
      >
    >(true);
  });

  it('should generate a graphql type with the original object name', async () => {
    const gql = object2.toGraphQL();
    expect(gql.getType().name).toBe(object2.id);
    expect(gql.getType().getFields()['members'].type.toString()).toBe(
      '[customer]!'
    );
  });
});
