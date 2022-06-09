import { assert, IsExact } from 'conditional-type-checks';

import { Infer } from '../Infer';
import { createObjectType, ObjectType } from '../ObjectType';

describe('ObjectType.implement(...parents)', () => {
  afterEach(ObjectType.reset);

  it('works', async () => {
    const nodeInterface = createObjectType('Node', {
      id: 'ID',
    });

    const user = createObjectType('User', {
      name: 'string',
      age: 'int?',
    });

    const sut = user.implement('UserNode', nodeInterface);

    type In = Infer<typeof sut>;

    assert<IsExact<In, { name: string; age?: number | undefined; id: string }>>(
      true
    );

    const ts = await sut.typescriptPrint();

    expect(ts.split('\n')).toEqual([
      'export interface UserNode {',
      '  id: ID;',
      '  name: string;',
      '  age?: number;',
      '}',
      '',
    ]);

    const gql = sut.graphqlPrint();

    expect(gql.split('\n')).toEqual([
      'type UserNode implements NodeInterface {',
      '  id: ID!',
      '  name: String!',
      '  age: Int',
      '}',
      '',
      'interface NodeInterface {',
      '  id: ID!',
      '}',
    ]);
  });
});
