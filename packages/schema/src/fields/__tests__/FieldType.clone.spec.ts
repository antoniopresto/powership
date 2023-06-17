import { createType } from '../../GraphType/GraphType';
import { createObjectType, resetTypesCache } from '../../ObjectType/ObjectType';
import { CursorField } from '../CursorField';
import { LiteralField } from '../LiteralField';
import { ObjectField } from '../ObjectField';

describe('FieldType.clone', () => {
  afterEach(resetTypesCache);

  test('CursorField', async () => {
    const field = CursorField.create();
    const clone = field.clone().toList();

    expect(field.list).toBeFalsy();
    expect(clone.list).toBe(true);
  });

  test('LiteralField', async () => {
    const field = LiteralField.create(new Date());
    const clone = field.clone().toOptional();

    expect(field.optional).toBeFalsy();
    expect(clone.optional).toBeTruthy();
  });

  test('LiteralFieldSchema', async () => {
    const sut = createType('SUT', {
      object: {
        lit: {
          union: [
            { literal: 1 }, //
            { literal: 2 },
          ],
        },
      },
    });

    const ts = await sut.typescriptPrint();

    expect(ts.split('\n')).toEqual([
      'export interface SUT {',
      '  lit: 1 | 2;',
      '}',
      '',
    ]);

    const gql = sut.print();

    expect(gql).toEqual([
      'type SUT {',
      '  lit: SUT_lit!',
      '}',
      '',
      '"""Union of 1 | 2"""',
      'scalar SUT_lit',
      '',
      'input SUTInput {',
      '  lit: SUT_lit!',
      '}',
    ]);
  });

  test('GraphType', async () => {
    const obj = createObjectType('OB', {
      name: 'string',
      un: {
        union: [{ object: { a: 'string', b: { literal: 2 } } }],
        description: 'My name is un',
      },
    });

    const graphType = createType('GT', {
      union: [obj, { literal: new Date(0) }],
    });

    const field = ObjectField.create({
      gt: graphType,
      age: { literal: 33 },
    });

    const clone = field.clone().toOptional();

    expect(field.optional).toBeFalsy();
    expect(clone.optional).toBeTruthy();
  });
});
