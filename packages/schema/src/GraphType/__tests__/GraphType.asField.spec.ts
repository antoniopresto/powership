import { MaybePromise } from '@backland/utils/lib/typeUtils';
import { assert, IsExact } from 'conditional-type-checks';

import { Infer } from '../../Infer';
import { ObjectType } from '../../ObjectType';
import { createResolver } from '../../Resolver';
import { createGraphQLSchema } from '../../createGraphQLSchema';
import { ToFinalField } from '../../fields/_parseFields';
import { createType, GraphType } from '../GraphType';

describe('GraphType.asField', () => {
  afterEach(ObjectType.reset);

  it('parseSchemaField', async () => {
    const user = createType('user', ({ types }) => ({
      object: {
        name: 'string?',
        age: types.int.create().toOptional(),
      },
    }));

    const userNode = createType('userNode', user);

    const userNodeNode = createType('userNodeNode', () => ({
      type: userNode,
      list: true,
      description: 'userNodeNode is cool',
    }));

    expect(userNodeNode.definition).toMatchObject({
      def: user.definition.def,
      type: user.definition.type,
      list: true,
      description: 'userNodeNode is cool',
    });

    const resolver = createResolver({
      type: userNodeNode,
      name: 'userNodeNode',
      kind: 'subscription',
      description: 'yeah',
      args: { option: { enum: ['a', 'b'] } },
      async resolve() {
        return userNodeNode.parse({});
      },
    } as const);

    type Res = ReturnType<typeof resolver.resolve>;
    type Args = Parameters<typeof resolver.resolve>[1];

    assert<IsExact<Res, MaybePromise<{ age?: number; name?: string }[]>>>(true);
    assert<IsExact<Args, { option: 'a' | 'b' }>>(true);

    const schema = createGraphQLSchema();
    const ts = await schema.utils.typescript();

    expect(ts.split('\n')).toEqual([
      'export type userNodeNodeInput = {',
      '  option: "a" | "b";',
      '};',
      '/** userNodeNode is cool **/',
      'export type userNodeNode = {',
      '  name?: string;',
      '  age?: number;',
      '}[];',
      'export interface GraphQLTypes {',
      '  /** yeah **/',
      '  userNodeNode: { input: userNodeNodeInput; payload: userNodeNode };',
      '}',
      'export type QueryResolvers = {};',
      'export type MutationResolvers = {};',
      'export type SubscriptionResolvers = {',
      '  /** yeah **/',
      '  userNodeNode(args: userNodeNodeInput): Promise<userNodeNode>;',
      '};',
      '',
    ]);
  });

  it('infer types', async () => {
    const user = createType('user', {
      object: {
        name: 'string?',
        age: 'int?',
      },
    });

    type User = { age?: number | undefined; name?: string | undefined };

    type B = ToFinalField<
      GraphType<
        GraphType<GraphType<GraphType<{ object: typeof user.definition.def }>>>
      >
    >['__infer'];

    assert<IsExact<B, User>>(true);

    type A0 = ToFinalField<
      GraphType<{
        list: true;
        optional: true;
        type: GraphType<{ object: { name: 'string' } }>;
      }>
    >['__infer'];

    assert<IsExact<A0, { name: string }[] | undefined>>(true);

    type A = ToFinalField<
      GraphType<
        GraphType<
          GraphType<
            GraphType<{
              list: true;
              optional: true;
              type: GraphType<{ object: { name: 'string?' } }>;
            }>
          >
        >
      >
    >['__infer'];

    assert<IsExact<A, { name?: string | undefined }[] | undefined>>(true);

    type X = Infer<
      GraphType<
        GraphType<
          GraphType<
            GraphType<{
              list: true;
              optional: true;
              type: GraphType<{ object: { name: 'string?' } }>;
            }>
          >
        >
      >
    >;

    assert<IsExact<X, { name?: string | undefined }[] | undefined>>(true);
  });
});
