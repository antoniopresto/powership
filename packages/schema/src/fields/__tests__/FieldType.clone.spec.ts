import { CursorField } from '../CursorField';
import { createObjectType, resetTypesCache } from '../../ObjectType';
import { LiteralField } from '../LitarealField';
import { createType } from '../../GraphType/GraphType';
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
