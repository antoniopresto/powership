import { assert, IsExact } from 'conditional-type-checks';

import { createType } from '../GraphType/GraphType';
import { ObjectType } from '../ObjectType';
import { extendDefinition } from '../extendDefinition';

describe('extendDefinition', () => {
  afterEach(ObjectType.reset);

  test('value', async () => {
    const type = createType('fooo', {
      object: {
        name: 'string',
        age: 'int',
      },
    });

    const res = extendDefinition(type).def();
    assert<IsExact<typeof res.age.type, 'int'>>(true);
    assert<IsExact<typeof res.name.type, 'string'>>(true);

    expect(res).toMatchObject({
      age: {
        list: false,
        optional: false,
        type: 'int',
      },
      name: {
        list: false,
        optional: false,
        type: 'string',
      },
    });
  });

  test('only', async () => {
    const type = createType('fooo', {
      object: {
        name: 'string',
        age: 'int',
      },
    });

    extendDefinition(type).only('name').def();
    const res = extendDefinition(type).only(['name']).def();

    // @ts-expect-error
    res.age?.type;

    assert<IsExact<typeof res.name.type, 'string'>>(true);

    expect(res).toEqual({
      name: {
        list: false,
        optional: false,
        type: 'string',
      },
    });
  });

  test('exclude', async () => {
    const type = createType('fooo', {
      object: {
        name: 'string',
        age: 'int',
      },
    });

    extendDefinition(type).exclude('name').def();
    const res = extendDefinition(type).exclude(['name']).def();

    // @ts-expect-error
    res.name?.type;

    assert<IsExact<typeof res.age.type, 'int'>>(true);

    expect(res).toEqual({
      age: {
        list: false,
        optional: false,
        type: 'int',
      },
    });
  });

  test('optional', async () => {
    const type = createType('fooo', {
      object: {
        name: 'string',
        age: 'int',
      },
    });

    const res = extendDefinition(type).optional(['name']).def();
    extendDefinition(type).optional('name').def();

    assert<IsExact<typeof res.age.type, 'int'>>(true);
    assert<IsExact<typeof res.name.optional, true>>(true);

    expect(res).toEqual({
      name: {
        list: false,
        optional: true,
        type: 'string',
      },
      age: {
        list: false,
        optional: false,
        type: 'int',
      },
    });
  });

  test('extend', async () => {
    const type = createType('fooo', {
      object: {
        name: 'string',
        age: 'int',
      },
    });

    const res = extendDefinition(type)
      .extendDefinition({ a: '[string]' })
      .def();

    assert<IsExact<typeof res.a.type, 'string'>>(true);
    assert<IsExact<typeof res.a.list, true>>(true);
    assert<IsExact<typeof res.a.optional, false>>(true);

    assert<IsExact<typeof res.age.type, 'int'>>(true);
    assert<IsExact<typeof res.name.type, 'string'>>(true);

    expect(res).toEqual({
      a: {
        list: true,
        optional: false,
        type: 'string',
      },
      age: {
        list: false,
        optional: false,
        type: 'int',
      },
      name: {
        list: false,
        optional: false,
        type: 'string',
      },
    });
  });

  test('chain', async () => {
    const type = createType('fooo', {
      object: {
        name: 'string?',
        age: 'int',
      },
    });

    const res = extendDefinition(type)
      .only('name')
      .extendDefinition({ a: '[string]', x: '[int]?' })
      .exclude('x')
      .optional('a')
      .required('name')
      .def();

    assert<IsExact<typeof res.a.type, 'string'>>(true);
    assert<IsExact<typeof res.a.list, true>>(true);
    assert<IsExact<typeof res.a.optional, true>>(true);

    // @ts-expect-error
    assert<IsExact<typeof res.age.type, 'int'>>(true);

    // @ts-expect-error
    assert<IsExact<typeof res.x.type, 'int'>>(true);

    assert<IsExact<typeof res.name.optional, false>>(true);
    assert<IsExact<typeof res.name.type, 'string'>>(true);

    expect(res).toEqual({
      a: {
        list: true,
        optional: true,
        type: 'string',
      },
      name: {
        list: false,
        optional: false,
        type: 'string',
      },
    });
  });

  test('deep def', async () => {
    const t2 = createType('baz', {
      object: {
        name: 'string?',
        age: 'int',
      },
    });
    const t1 = createType('bar', t2);
    const type = createType('fooo', t1);

    const res = extendDefinition(type)
      .only('name')
      .extendDefinition({ a: '[string]', x: '[int]?' })
      .exclude('x')
      .optional('a')
      .required('name')
      .graphType('myClone123').definition.def;

    assert<IsExact<typeof res.a.type, 'string'>>(true);
    assert<IsExact<typeof res.a.list, true>>(true);
    assert<IsExact<typeof res.a.optional, true>>(true);

    // @ts-expect-error
    assert<IsExact<typeof res.age.type, 'int'>>(true);

    // @ts-expect-error
    assert<IsExact<typeof res.x.type, 'int'>>(true);

    assert<IsExact<typeof res.name.optional, false>>(true);
    assert<IsExact<typeof res.name.type, 'string'>>(true);

    expect(res).toEqual({
      __dschm__: expect.objectContaining({
        def: {
          id: 'myClone123',
        },
      }),
      a: {
        list: true,
        optional: true,
        type: 'string',
      },
      name: {
        list: false,
        optional: false,
        type: 'string',
      },
    });
  });
});
