import { assert, IsExact } from 'conditional-type-checks';

import { createType, DarchType } from '../DarchType';
import { Infer } from '../Infer';
import { ObjectType } from '../ObjectType';
import { ToFinalField } from '../fields/_parseFields';

describe('DarchType.asField', () => {
  afterEach(ObjectType.reset);

  it('parseSchemaField', async () => {
    const user = createType('user', {
      object: {
        name: 'string?',
        age: 'int?',
      },
    });

    const userNode = createType('userNode', user);

    const userNodeNode = createType('userNodeNode', {
      type: userNode,
      list: true,
      description: 'userNodeNode is cool',
    });

    expect(userNodeNode.definition).toMatchObject({
      def: user.definition.def,
      type: user.definition.type,
      list: true,
      description: 'userNodeNode is cool',
    });
  });

  it('infer types', async () => {
    const user = createType('user', {
      object: {
        name: 'string?',
        age: 'int?',
      },
    });

    type User = { name?: string | undefined; age?: number | undefined };

    type B = ToFinalField<
      DarchType<
        DarchType<DarchType<DarchType<{ object: typeof user.definition.def }>>>
      >
    >['__infer'];

    assert<IsExact<B, User>>(true);

    type A0 = ToFinalField<
      DarchType<{
        type: DarchType<{ object: { name: 'string' } }>;
        list: true;
        optional: true;
      }>
    >['__infer'];

    assert<IsExact<A0, { name: string }[] | undefined>>(true);

    type A = ToFinalField<
      DarchType<
        DarchType<
          DarchType<
            DarchType<{
              type: DarchType<{ object: { name: 'string?' } }>;
              list: true;
              optional: true;
            }>
          >
        >
      >
    >['__infer'];

    assert<IsExact<A, { name?: string | undefined }[] | undefined>>(true);

    type X = Infer<
      DarchType<
        DarchType<
          DarchType<
            DarchType<{
              type: DarchType<{ object: { name: 'string?' } }>;
              list: true;
              optional: true;
            }>
          >
        >
      >
    >;

    assert<IsExact<X, { name?: string | undefined }[] | undefined>>(true);
  });
});
