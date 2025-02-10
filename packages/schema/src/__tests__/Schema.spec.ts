import { assert, IsExact } from 'conditional-type-checks';

import { Infer } from '../Infer';

import {
  createObjectType,
  objectMetaFieldKey,
  ObjectType,
  resetTypesCache,
} from '../types';

function _userObject() {
  return new ObjectType({
    name: 'string',
    optional: 'string?',
    age: 'int',
    gender: {
      type: 'enum',
      def: ['male', 'female', 'other'],
      optional: true,
    },

    category: {
      enum: ['general', 'closed'],
    },
    '12Enum': {
      enum: ['1', '2'],
    },

    enumArray: {
      type: 'enum',
      list: true,
      def: ['1', '2'],
    },
  } as const);
}

describe('Schema clone, etc', () => {
  afterEach(resetTypesCache);

  it('handle definition', () => {
    const sut = _userObject().definition;

    expect(sut).toEqual({
      '12Enum': {
        def: ['1', '2'],

        type: 'enum',
      },
      __dschm__: {
        def: {
          id: null,
        },

        type: 'meta',
      },
      age: {
        type: 'int',
      },
      category: {
        def: ['general', 'closed'],

        type: 'enum',
      },
      enumArray: {
        def: ['1', '2'],
        list: true,
        type: 'enum',
      },
      gender: {
        def: ['male', 'female', 'other'],
        optional: true,
        type: 'enum',
      },
      name: {
        type: 'string',
      },
      optional: {
        optional: true,
        type: 'string',
      },
    });
  });

  it('should validate object', () => {
    const user = {
      name: 'Antonio',
      age: 1,
      optional: undefined,
      gender: 'male',
      category: 'general',
      '12Enum': '1',
      enumArray: ['1', '2'],
    };

    const userObject = _userObject();

    expect(userObject.parse(user)).toEqual(user);

    expect(() => userObject.parse({ ...user, age: undefined })).toThrow(
      `➤ field "age": RequiredField`
    );

    expect(() => userObject.parse({ ...user, enumArray: ['3'] })).toThrow(
      "➤ field \"enumArray\": accepted: '1' or '2', found 3. at position 0."
    );
  });

  it('should validate object inside object', () => {
    const subObject = new ObjectType({
      mySubField: { enum: ['foo'] },
    } as const);

    const object = new ObjectType({
      name: 'string',
      sub: subObject,
    });

    expect(
      object.parse({
        name: 'a',
        sub: { mySubField: 'foo' },
      })
    ).toEqual({ name: 'a', sub: { mySubField: 'foo' } });

    expect(() =>
      object.parse({
        name: 'a',
        sub: { mySubField: 'INVALID' },
      })
    ).toThrow(
      '➤ field "sub": ➤ field "mySubField": accepted: \'foo\', found INVALID.'
    );

    expect(() => object.parse({ name: 'a', sub: 1 })).toThrow(
      '➤ field "sub": Invalid input. Expected object, found Number.'
    );

    expect(() => object.parse({ name: 'a', sub: {} })).toThrow(
      '➤ field "sub": ➤ field "mySubField": RequiredField'
    );
  });

  it('accepts object as plain definition', () => {
    const rolesObject = new ObjectType({
      name: 'string',
      permissions: '[string]',
      status: {
        enum: ['open', 'closed'],
      },
    } as const);

    const myObject = new ObjectType({
      userId: 'string',
      roles: {
        object: rolesObject,
        list: true,
      },
    });
    // @ts-ignore
    expect(myObject.definition.roles.type).toBe('object');
    // @ts-ignore
    expect(myObject.definition.roles.def).toEqual(rolesObject.definition);

    expect(() => myObject.parse({ userId: '123' })).toThrow(
      '➤ field "roles": RequiredField'
    );

    expect(() => myObject.parse({ userId: '123', roles: [] })).not.toThrow();

    expect(() => myObject.parse({ userId: '123', roles: [1] })).toThrow(
      '➤ field "roles": Invalid input. Expected object, found Number at position 0.'
    );
  });

  it('accepts object as field type', () => {
    const rolesObject = new ObjectType({
      name: 'string',
      permissions: '[string]',
      status: {
        enum: ['open', 'closed'],
      },
    } as const);

    const object1 = new ObjectType({
      userId: 'string',
      roles: {
        type: rolesObject,
        list: true,
      },
    });

    const object2 = new ObjectType({
      userId: 'string',
      roles: {
        type: rolesObject,
        list: true,
      },
    });

    type T1 = Infer<typeof object1>;
    type T2 = Infer<typeof object2>;

    assert<IsExact<T1, T2>>(true);

    expect(object1.definition).toEqual(object2.definition);
  });

  // this test not resets description from cache
  xtest('describe', async () => {
    const object = createObjectType({
      name: 'string',
      age: 'int?',
    })
      .describe('my object desc.')
      .describe({
        name: 'the name field',
        age: 'the age field',
      });

    // @ts-ignore
    expect(object.definition.name.description).toEqual('the name field');
    // @ts-ignore
    expect(object.definition.age.description).toEqual('the age field');
    await resetTypesCache();
  });

  test('clone', () => {
    const object1 = createObjectType({
      name: 'string',
      age: 'int?',
    });

    const object2 = object1.clone((el) => el.objectType());

    expect(object1.definition).not.toBe(object2.definition);
    expect(object1.definition).toEqual(object2.definition);
    expect(object1.definition).toEqual(object2.definition);
  });

  test('clone using function', () => {
    const object1 = createObjectType({
      name: 'string',
      age: 'int?',
    });

    const object2 = object1.clone((el) => {
      return el
        .exclude('name')
        .extendObjectDefinition((current) => {
          return {
            age: {
              ...current.age,
              list: true,
            },
          };
        })
        .objectType();
    });
    type Final = Infer<typeof object2>;
    assert<IsExact<Final, { age?: number[] | undefined }>>(true);

    expect(object1.definition).not.toBe(object2.definition);
    expect(object2.definition).toEqual({
      age: {
        list: true,
        optional: true,
        type: 'int',
      },
      [objectMetaFieldKey]: expect.anything(),
    });
  });

  test('removeField', () => {
    const object1 = createObjectType({
      name: 'string',
      age: 'int?',
      email: 'email',
    });

    const noName = object1.clone((el) => el.exclude('name').objectType());
    const noEmail = object1.clone((el) => el.exclude(['email']).objectType());

    expect(object1.definition).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      age: {
        optional: true,
        type: 'int',
      },
      name: {
        type: 'string',
      },
      email: {
        type: 'email',
      },
    });

    expect(noName.definition).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      age: {
        optional: true,
        type: 'int',
      },
      email: {
        type: 'email',
      },
    });

    type T1 = Infer<typeof object1>;
    type NoName = Infer<typeof noName>;
    type NoEmail = Infer<typeof noEmail>;

    assert<IsExact<NoName, Omit<T1, 'name'>>>(true);
    assert<IsExact<NoEmail, Omit<T1, 'email'>>>(true);
  });

  test('clone fields', () => {
    const object1 = createObjectType({
      name: 'string',
      age: 'int?',
      email: 'email',
    });

    const cloneNameAge = object1.clone((el) =>
      el.only(['name', 'age']).objectType()
    );

    expect(object1.definition).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      age: {
        optional: true,
        type: 'int',
      },
      name: {
        type: 'string',
      },
      email: {
        type: 'email',
      },
    });

    expect(cloneNameAge.definition).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      age: {
        optional: true,
        type: 'int',
      },
      name: {
        type: 'string',
      },
    });

    type T1 = Infer<typeof object1>;
    type CloneNameAge = Infer<typeof cloneNameAge>;

    assert<IsExact<CloneNameAge, Omit<T1, 'email'>>>(true);
  });

  test('clone fields with transform', () => {
    const object1 = createObjectType({
      name: 'string',
      age: 'int?',
      email: 'email',
    });

    const clone = object1.clone((el) =>
      el
        .only(['name', 'email'])
        .exclude('email')
        .extendObjectDefinition((v) => {
          return {
            ...v,
            emails: '[email]',
          };
        })
        .objectType('identifyMe')
    );
    expect(object1.definition).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      age: {
        optional: true,
        type: 'int',
      },
      name: {
        type: 'string',
      },
      email: {
        type: 'email',
      },
    });

    expect(clone.definition).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      emails: {
        list: true,

        type: 'email',
      },
      name: {
        type: 'string',
      },
    });

    type Clone = Infer<typeof clone>;

    assert<IsExact<Clone, { emails: string[]; name: string }>>(true);

    expect(clone.id).toBe('identifyMe');
  });

  test('makeOptional', () => {
    const object1 = createObjectType({
      name: 'string',
      age: 'int?',
      email: 'email',
    });

    const clone = object1.clone((el) =>
      el.optional(['name', 'email']).objectType()
    );

    expect(object1.definition).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      age: {
        optional: true,
        type: 'int',
      },
      name: {
        type: 'string',
      },
      email: {
        type: 'email',
      },
    });

    expect(clone.definition).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      age: {
        optional: true,
        type: 'int',
      },
      name: {
        optional: true,
        type: 'string',
      },
      email: {
        optional: true,
        type: 'email',
      },
    });

    type T1 = Infer<typeof object1>;
    type Clone = Infer<typeof clone>;

    assert<IsExact<Clone, Partial<T1>>>(true);
  });

  test('makeRequired', () => {
    const object1 = createObjectType({
      name: 'string',
      age: 'int?',
      email: 'email',
    });

    const clone = object1.clone((el) =>
      el.required(['name', 'email', 'age']).objectType()
    );

    expect(object1.definition).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      age: {
        optional: true,
        type: 'int',
      },
      name: {
        type: 'string',
      },
      email: {
        type: 'email',
      },
    });

    expect(clone.definition).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      age: {
        type: 'int',
      },
      name: {
        type: 'string',
      },
      email: {
        type: 'email',
      },
    });

    type T1 = Infer<typeof object1>;
    type Clone = Infer<typeof clone>;

    assert<IsExact<Clone, Required<T1>>>(true);
  });

  test('addFields', () => {
    const object1 = createObjectType({
      name: 'string',
      age: 'int?',
    });

    const withEmail = object1.clone((el) =>
      el
        .extendObjectDefinition({
          email: 'email',
        })
        .objectType()
    );
    expect(object1.definition).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      age: {
        optional: true,
        type: 'int',
      },
      name: {
        type: 'string',
      },
    });

    expect(withEmail.definition).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      age: {
        optional: true,
        type: 'int',
      },
      email: {
        type: 'email',
      },
      name: {
        type: 'string',
      },
    });

    type T1 = Infer<typeof object1>;
    type WithEmail = Infer<typeof withEmail>;

    assert<IsExact<WithEmail, T1 & { email: string }>>(true);
  });

  test('number as string input', () => {
    expect(
      createObjectType({
        age: 'int',
        weight: 'float',
      }).parse({ age: '32', weight: '83' })
    ).toEqual({
      age: 32,
      weight: 83,
    });
  });

  describe('identify', () => {
    test('identify', () => {
      const object1 = createObjectType({
        name: 'string',
        age: 'int?',
      });

      expect(object1.id).toBe(null);

      // @ts-ignore
      expect(() => object1.identify()).toThrow();
      expect(() => object1.identify('')).toThrow();

      expect(object1.identify('abc')).toHaveProperty('id', 'abc');
      object1.identify('abc');
      object1.identify('abc');
      expect(() => object1.identify('abcx')).toThrow(
        'Trying to replace existing id "abc"'
      );

      expect(ObjectType.register.get('abc')).toBe(object1);
      expect(() => ObjectType.register.get('yyy')).toThrow(
        'Missing value for key "yyy"'
      );
    });

    test('does not clone id', () => {
      const object1 = createObjectType({
        name: 'string',
        age: 'int?',
      }).identify('abc');

      // @ts-ignore
      expect(object1.id).toBe('abc');

      // @ts-ignore
      expect(object1.clone((el) => el.objectType().id)).toBe(null);
    });
  });

  test('.entity(name: string) should identify before creating a OTC type', () => {
    const type = createObjectType({
      name: 'string',
      age: 'int?',
    }).toGraphQL('User');

    expect(type.getType().getFields()).toMatchObject({
      name: { astNode: {} },
      age: { astNode: {} },
    });
  });
});
