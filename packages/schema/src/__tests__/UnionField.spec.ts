import { RuntimeError } from '@brabo/utils/lib/RuntimeError';
import { assert, IsExact } from 'conditional-type-checks';

import { Infer } from '../Infer';
import { createObjectType } from '../ObjectType';
import { UnionField } from '../fields/UnionField';
import { _assert, _assertFields } from '../fields/__tests__/__assert';
import { ToFinalField } from '../fields/_parseFields';

describe('Union', () => {
  it('parses', () => {
    expect(() => UnionField.create(['string', 'int']).parse(undefined)).toThrow(
      'required field'
    );

    expect(() => {
      return UnionField.create(['string', 'int']).parse(null);
    }).toThrow(
      'Expected value to match one of the following types: string or int.'
    );

    expect(UnionField.create(['string', 'int']).parse(1)).toEqual(1);
    expect(UnionField.create(['string', 'int']).parse('a')).toEqual('a');
    expect(
      UnionField.create(['string', 'int']).toList().parse([2, 'x'])
    ).toEqual([2, 'x']);

    expect(() =>
      UnionField.create(['int?']).parse('ZZ', (v) => `${v}?`)
    ).toThrowError(new RuntimeError('ZZ?', { input: 'ZZ' }));
  });

  it('should parse union with object', async () => {
    const object1 = createObjectType({ name: 'string' });
    const object2 = createObjectType({ sub: object1 });
    const object3 = createObjectType({ sub: object2 });
    const sut = UnionField.create([object3, object1]).toList();

    expect(() => sut.parse([2, 'x'])).toThrow(
      'Expected value to match one of the following types: object.'
    );

    expect(() => sut.parse([{ name: 1 }])).toThrow(
      '➤ field "sub": required field. at position 0'
    );

    expect(
      sut.parse([{ name: 'antonio' }, { sub: { sub: { name: 'antonio' } } }])
    ).toEqual([{ name: 'antonio' }, { sub: { sub: { name: 'antonio' } } }]);

    expect(() => sut.parse([{ name: 'antonio' }, { sub: { sub: 1 } }])).toThrow(
      '➤ field "sub": ➤ field "sub": Invalid input. Expected object, found Number. at position 1'
    );
  });

  test('union as array definition', async () => {
    const subObject = createObjectType({ name: 'string' });

    const sut = createObjectType({
      foo: { union: ['[string]?', subObject] },
    } as const);

    expect(sut.parse({ foo: undefined })).toEqual({ foo: undefined });

    expect(() => sut.parse({ foo: 'a' })).toThrow(
      'field "foo": Expected value to match one of the following types: string or object.'
    );

    expect(sut.parse({ foo: { name: 'a' } })).toEqual({ foo: { name: 'a' } });

    type T = Infer<typeof sut>;

    assert<
      IsExact<
        T,
        {
          foo?: string[] | undefined | { name: string };
        }
      >
    >(true);
  });

  test('types', () => {
    const def = {
      uu: { union: ['int?', 'boolean'] },

      nameFromType: UnionField.create(['string']).toList().toOptional(),

      nameOrUndefinedListFromType: UnionField.create(['string?'])
        .toList()
        .toOptional(),

      defObject: {
        type: 'union',
        optional: true,
        list: true,
        def: ['string', 'boolean'],
      },
    } as const;

    // type S = ParsedFieldDefinition<[['[string]?']]>;
    // type T = TypeFromObject<{ name: S }>;

    // const gql = objectToGQL('TempUnionField', def);

    // expect(gql.toSDL()).toEqual(
    //   'type TempUnionField {\n' +
    //     '  name: TempUnionFieldName\n' +
    //     '  nameFromType: [TempUnionFieldNameFromTypeEnum]\n' +
    //     '  defObject: [TempUnionFieldDefObjectEnum]\n' +
    //     '}'
    // ); // TODO

    type T = Infer<typeof def>;

    assert<
      IsExact<
        T,
        {
          defObject?: (string | boolean)[] | undefined;
          nameFromType?: string[] | undefined;
          nameOrUndefinedListFromType?: (string | undefined)[] | undefined;
          uu?: number | boolean | undefined;
        }
      >
    >(true);
  });

  test('complex parsing', () => {
    const object = createObjectType({
      union1: { union: ['boolean', { enum: ['true', 'false'] }] },
      union1Optional: { union: ['boolean?', { enum: ['true', 'false'] }] },
      union1OptionalList: {
        union: [
          'boolean?',
          {
            enum: ['true', 'false'],
          },
        ],
        list: true,
      },
      union2: {
        union: [
          'boolean',
          {
            enum: ['true', 'false'],
          },
        ],
      },
      union2Optional: {
        union: [
          'boolean?',
          {
            enum: ['true', 'false'],
          },
        ],
      },
      union3: {
        type: 'union',
        def: [{ enum: ['true', 'false'] }, 'boolean'],
      },
      union3Optional: {
        type: 'union',
        def: [{ enum: ['true', 'false'] }, 'boolean'],
        optional: true,
      },
      union3ListOptional: {
        type: 'union',
        def: [{ enum: ['true', 'false'] }, 'boolean'],
        optional: true,
        list: true,
      },
      union4ListOptional: {
        type: 'union',
        def: [{ enum: ['true', 'false'] }, 'boolean?'],

        list: true,
      },
    } as const);

    expect(object.definition).toEqual({
      __dschm__: {
        def: {
          id: null,
        },

        type: 'meta',
      },
      union1: {
        def: [
          {
            type: 'boolean',
          },
          {
            def: ['true', 'false'],

            type: 'enum',
          },
        ],

        type: 'union',
      },
      union1Optional: {
        def: [
          {
            optional: true,
            type: 'boolean',
          },
          {
            def: ['true', 'false'],

            type: 'enum',
          },
        ],

        optional: true,
        type: 'union',
      },
      union1OptionalList: {
        def: [
          {
            optional: true,
            type: 'boolean',
          },
          {
            def: ['true', 'false'],

            type: 'enum',
          },
        ],
        list: true,
        optional: true,
        type: 'union',
      },
      union2: {
        def: [
          {
            type: 'boolean',
          },
          {
            def: ['true', 'false'],

            type: 'enum',
          },
        ],

        type: 'union',
      },
      union2Optional: {
        def: [
          {
            optional: true,
            type: 'boolean',
          },
          {
            def: ['true', 'false'],

            type: 'enum',
          },
        ],

        optional: true,
        type: 'union',
      },
      union3: {
        def: [
          {
            def: ['true', 'false'],

            type: 'enum',
          },
          {
            type: 'boolean',
          },
        ],
        type: 'union',
      },
      union3ListOptional: {
        def: [
          {
            def: ['true', 'false'],

            type: 'enum',
          },
          {
            type: 'boolean',
          },
        ],
        list: true,
        optional: true,
        type: 'union',
      },
      union3Optional: {
        def: [
          {
            def: ['true', 'false'],

            type: 'enum',
          },
          {
            type: 'boolean',
          },
        ],
        optional: true,
        type: 'union',
      },
      union4ListOptional: {
        def: [
          {
            def: ['true', 'false'],

            type: 'enum',
          },
          {
            optional: true,
            type: 'boolean',
          },
        ],
        list: true,
        optional: true,
        type: 'union',
      },
    });

    type QBool = 'true' | 'false' | boolean;

    type TObject = {
      union1: QBool;
      union1Optional?: QBool;
      union1OptionalList?: QBool[];
      union2: QBool;
      union2Optional?: QBool;
      union3: QBool;
      union3ListOptional?: QBool[];
      union3Optional?: QBool;
    };

    const random = (array = ['true', 'false', true, false] as const) =>
      array[Math.floor(Math.random() * array.length)];

    const valid = (): TObject => {
      const val = {
        union1: random(),
        union1Optional: random(),
        union1OptionalList: [random()],
        union2: random(),
        union3: random(),
        union2Optional: random(),
        union3Optional: random(),
        union3ListOptional: [random()],
        union4ListOptional: [random()],
      };

      return val;
    };

    const val = valid();
    // object.parse(valid());
    // object.parse(valid());
    // object.parse(valid());
    // object.parse(valid());
    // object.parse(valid());
    object.parse({
      ...val,
      union3ListOptional: undefined,
      union1OptionalList: undefined,
      union1Optional: undefined,
    });
  });

  describe('infer', () => {
    it('infer array union with object inside', () => {
      const object1 = createObjectType({ a: 'string?' });

      const u = { union: ['int?', object1] } as const;
      type P = ToFinalField<typeof u>;

      assert<IsExact<'union', P['type']>>(true);
      assert<IsExact<'int?' | typeof object1, P['def'][number]>>(true);
    });

    it('infer array union with optional as optional', () => {
      const u = { union: ['int?', 'string'] } as const;
      type P = ToFinalField<typeof u>;

      assert<IsExact<'union', P['type']>>(true);
      assert<IsExact<'int?' | 'string', P['def'][number]>>(true);
    });

    it('infer array union without optional as required', () => {
      const u = { union: ['int', 'string'] } as const;
      type P = ToFinalField<typeof u>;

      assert<IsExact<true, P['optional']>>(false);
      assert<IsExact<'union', P['type']>>(true);
      assert<IsExact<'int' | 'string', P['def'][number]>>(true);
    });

    it('infer object union with optional as optional', () => {
      const u = { type: 'union', def: ['int?', 'string'] } as const;
      type P = ToFinalField<typeof u>;

      // assert<IsExact<true, P['optional']>>(true);
      assert<IsExact<'union', P['type']>>(true);
      assert<IsExact<'int?' | 'string', P['def'][number]>>(true);
    });

    it('respect object union with optional: true as optional', () => {
      const u = {
        type: 'union',
        def: ['int', 'string'],
        optional: true,
      } as const;
      type P = ToFinalField<typeof u>;

      assert<IsExact<true, P['optional']>>(true);
      assert<IsExact<'union', P['type']>>(true);
      assert<IsExact<'int' | 'string', P['def'][number]>>(true);
    });

    it('infer object union without optional as required', () => {
      const u = { type: 'union', def: ['int', 'string'] } as const;
      type P = ToFinalField<typeof u>;

      assert<IsExact<true, P['optional']>>(false);
      assert<IsExact<'union', P['type']>>(true);
      assert<IsExact<'int' | 'string', P['def'][number]>>(true);
    });

    it('respect FieldType union with isOptional: true as optional', () => {
      const u = UnionField.create(['string', 'int']).toOptional();
      type P = ToFinalField<typeof u>;

      assert<IsExact<true, P['optional']>>(true);
      assert<IsExact<'union', P['type']>>(true);
      assert<IsExact<'int' | 'string', P['def'][number]>>(true);
    });

    it('infer FieldType union with optional', () => {
      const u = UnionField.create(['string', 'int?']);
      type P = ToFinalField<typeof u>;

      expect(u.optional).toBe(true);
      // assert<IsExact<true, P['optional']>>(true); // 🤔
      assert<IsExact<'union', P['type']>>(true);
      assert<IsExact<'int?' | 'string', P['def'][number]>>(true);
    });

    it('infer FieldType union without optional as required', () => {
      const u = UnionField.create(['string', 'int']);
      type P = ToFinalField<typeof u>;

      assert<IsExact<true, P['optional']>>(false);
      assert<IsExact<'union', P['type']>>(true);
      assert<IsExact<'int' | 'string', P['def'][number]>>(true);
    });

    it('infer union from object', () => {
      _assert<
        { union: ['boolean', { enum: ['true', 'false'] }] },
        boolean | 'true' | 'false'
      >(true);

      _assert<
        { union: ['boolean?', { enum: ['true', 'false'] }] },
        boolean | 'true' | 'false' | undefined,
        true
      >(true);

      _assert<
        {
          list: true;
          union: ['boolean?', { enum: ['true', 'false'] }];
        },
        (boolean | 'true' | 'false' | undefined)[]
      >(true);

      _assert<
        {
          union: [
            'boolean',
            {
              enum: ['true', 'false'];
            }
          ];
        },
        boolean | 'true' | 'false'
      >(true);

      _assert<
        {
          union: [
            'boolean?',
            {
              enum: ['true', 'false'];
            }
          ];
        },
        boolean | 'true' | 'false',
        true
      >(true);

      _assert<
        {
          def: [{ enum: ['true', 'false'] }, 'boolean'];
          optional: true;
          type: 'union';
        },
        boolean | 'true' | 'false' | undefined,
        true
      >(true);

      _assert<
        {
          def: [{ enum: ['true', 'false'] }, 'boolean'];
          type: 'union';
        },
        boolean | 'true' | 'false'
      >(true);

      _assert<
        {
          def: [{ enum: ['true', 'false'] }, 'boolean'];
          list: true;
          optional: true;
          type: 'union';
        },
        (boolean | 'true' | 'false')[] | undefined,
        true
      >(true);

      const object = createObjectType({
        union1: { union: ['boolean', { enum: ['true', 'false'] }] },
        union1Optional: { union: ['boolean?', { enum: ['true', 'false'] }] },
        union1OptionalList: {
          union: [
            'boolean?',
            {
              enum: ['true', 'false'],
            },
          ],
          list: true,
        },
        union2: {
          union: [
            'boolean',
            {
              enum: ['true', 'false'],
            },
          ],
        },
        union2Optional: {
          union: [
            'boolean?',
            {
              enum: ['true', 'false'],
            },
          ],
        },
        union3: {
          type: 'union',
          def: [{ enum: ['true', 'false'] }, 'boolean'],
        },
        union3Optional: {
          type: 'union',
          def: [{ enum: ['true', 'false'] }, 'boolean'],
          optional: true,
        },
        union3ListOptional: {
          type: 'union',
          def: [{ enum: ['true', 'false'] }, 'boolean'],
          optional: true,
          list: true,
        },
        union4ListOptional: {
          type: 'union',
          def: [{ enum: ['true', 'false'] }, 'boolean?'], // list containing undefined | boolean | 'true' | 'false'

          list: true,
        },
        union5ListOptional: {
          type: 'union',
          def: [
            {
              enum: ['true', 'false'],
            },
            'boolean?', // list containing undefined | boolean | 'true' | 'false'
          ],

          list: true, // list
        },
      } as const);

      type QBool = 'true' | 'false' | boolean;

      type TObject = {
        union1: QBool;
        union1Optional?: QBool | undefined;
        union1OptionalList: (QBool | undefined)[];
        union2: QBool;
        union2Optional?: QBool;
        union3: QBool;
        union3ListOptional?: QBool[] | undefined;
        union3Optional?: QBool;
        union4ListOptional: (QBool | undefined)[]; // list containing undefined | boolean | 'true' | 'false'
        union5ListOptional: (QBool | undefined)[]; // list containing undefined | boolean | 'true' | 'false'
      };

      type ObjectInferred = Infer<typeof object>;

      _assertFields<ObjectInferred, TObject>(true);

      const object2 = createObjectType({
        a: { union: [object, 'string'] },
        b: { union: [object, '[string]?'] },
      } as const);

      type TObject2 = {
        a: TObject | string;
        b?: TObject | string[] | undefined;
      };

      type Object2Inferred = Infer<typeof object2>;

      _assertFields<Object2Inferred, TObject2>(true);
    });
  });

  it('should parse union of string and numbers', () => {
    const sut = UnionField.create([
      { string: { min: 1 } },
      'float',
    ]).toOptional();

    expect(() => sut.parse('')).toThrow(
      'As string throws: 0 is less than the min string length 1.'
    );

    expect(() => sut.parse('')).toThrow(
      'As float throws: Expected value to be of type "number", found string instead.'
    );

    expect(sut.parse('1')).toBe('1');
    expect(sut.parse(1)).toBe(1);
  });
});
