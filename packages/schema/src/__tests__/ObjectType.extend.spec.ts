import { assert, IsExact } from 'conditional-type-checks';

import { createType } from '../GraphType/GraphType';
import { Infer } from '../Infer';
import { createObjectType, ObjectType } from '../ObjectType';

describe('ObjectType.extend', () => {
  afterEach(async () => {
    await ObjectType.reset();
  });

  it('works', async () => {
    const obj = createObjectType({
      name: 'string',
      address: {
        union: [
          {
            object: {
              street: 'string',
              number: { union: ['string', 'float'] },
            },
          },
          'null',
        ],
        list: true,
      },
    });

    const ext = obj.extend().optional().required('name').value();

    const res = createType('Person', {
      object: ext,
    });

    const ts = res.print();

    type In = Infer<typeof res>;
    assert<
      IsExact<
        In,
        {
          address?: ({ number: string | number; street: string } | null)[];
          name: string;
        }
      >
    >(true);

    expect(ts).toEqual([
      'type Person {',
      '  name: String!', // <- required
      '  address: [Person_address]',
      '}',
      '',
      '"""',
      'Union of:',
      ' - { street:{ type: string }, number:{ def:[{ type: string },{ type: float }], type: union }}',
      ' - { type: null }',
      '"""',
      'scalar Person_address',
      '',
      'input PersonInput {',
      '  name: String!', // <- required
      '  address: [Person_address]',
      '}',
    ]);
  });
});
