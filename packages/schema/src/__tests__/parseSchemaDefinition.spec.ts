import { ObjectType } from '../ObjectType';
import { EnumField } from '../fields/EnumField';
import { objectMetaFieldKey } from '../fields/MetaFieldField';
import { parseObjectDefinition } from '../parseObjectDefinition';

describe('parseObjectDefinition', () => {
  it('works', () => {
    const { definition: sut } = parseObjectDefinition({
      objectIntDef: {
        type: 'int',
      },
      string: 'string',
      stringOptional: 'string?',
      arrayString: '[string]',
      arrayStringOptional: '[string]?',
      enum: { enum: ['a', 'b'] },
      fieldType: EnumField.create(['a', 'x']),
      fieldTypeOptional: EnumField.create(['a', 'x']).toOptional(),
      fieldTypeOptionalList: EnumField.create(['a', 'x']).toList().toOptional(),
      objectAsFlattenDef: {
        object: {
          name: 'string',
        },
      },
      unionAsFlattenDef: {
        union: ['string', 'int?'],
      },
    });

    expect(sut).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      arrayString: {
        list: true,
        optional: false,
        type: 'string',
      },
      arrayStringOptional: {
        list: true,
        optional: true,
        type: 'string',
      },
      enum: {
        def: ['a', 'b'],
        list: false,
        optional: false,
        type: 'enum',
      },
      fieldType: {
        def: ['a', 'x'],
        list: false,
        optional: false,
        type: 'enum',
      },
      fieldTypeOptional: {
        def: ['a', 'x'],
        list: false,
        optional: true,
        type: 'enum',
      },
      fieldTypeOptionalList: {
        def: ['a', 'x'],
        list: true,
        optional: true,
        type: 'enum',
      },
      objectIntDef: {
        list: false,
        optional: false,
        type: 'int',
      },
      string: {
        list: false,
        optional: false,
        type: 'string',
      },
      stringOptional: {
        list: false,
        optional: true,
        type: 'string',
      },
      objectAsFlattenDef: {
        def: {
          [objectMetaFieldKey]: expect.anything(),
          name: {
            list: false,
            optional: false,
            type: 'string',
          },
        },
        list: false,
        optional: false,
        type: 'object',
      },
      unionAsFlattenDef: {
        def: [
          {
            list: false,
            optional: false,
            type: 'string',
          },
          {
            list: false,
            optional: true,
            type: 'int',
          },
        ],
        list: false,
        optional: true,
        type: 'union',
      },
    });
  });

  it('parse object', () => {
    const otherObject = new ObjectType({
      foo: 'string',
      status: { enum: ['open', 'closed'] },
    } as const);

    const sass = {
      union: [{ object: { points: '[float]?' } }, 'int'],
      names: '[string]?',
      age: 'int',
    } as const;

    const { definition: sut } = parseObjectDefinition({
      name: 'string',
      object: otherObject,
      objectList: {
        type: 'object',
        def: otherObject.definition,
        list: true,
      },
      objectAsTypeList: {
        object: otherObject,
        list: true,
      },
      objectAsObject: {
        object: sass,
      },
      objectAsObjectList: {
        object: sass,
        list: true,
      },
      objectAsObjectListOptional: {
        object: sass,
        list: true,
        optional: true,
      },
    });

    const sassDef = {
      age: {
        list: false,
        optional: false,
        type: 'int',
      },
      names: {
        list: true,
        optional: true,
        type: 'string',
      },
      union: {
        def: [
          {
            def: {
              [objectMetaFieldKey]: expect.anything(),
              points: {
                list: true,
                optional: true,
                type: 'float',
              },
            },
            list: false,
            optional: false,
            type: 'object',
          },
          {
            list: false,
            optional: false,
            type: 'int',
          },
        ],
        list: false,
        optional: false,
        type: 'union',
      },
    };

    expect(sut).toEqual({
      [objectMetaFieldKey]: expect.anything(),
      name: {
        type: 'string',
        list: false,
        optional: false,
      },
      object: {
        def: otherObject.definition,
        list: false,
        optional: false,
        type: 'object',
      },
      objectList: {
        def: otherObject.definition,
        list: true,
        optional: false,
        type: 'object',
      },
      objectAsTypeList: {
        def: otherObject.definition,
        list: true,
        optional: false,
        type: 'object',
      },
      objectAsObject: {
        def: { ...sassDef, [objectMetaFieldKey]: expect.anything() },
        list: false,
        optional: false,
        type: 'object',
      },
      objectAsObjectList: {
        def: { ...sassDef, [objectMetaFieldKey]: expect.anything() },
        list: true,
        optional: false,
        type: 'object',
      },
      objectAsObjectListOptional: {
        def: { ...sassDef, [objectMetaFieldKey]: expect.anything() },
        list: true,
        optional: true,
        type: 'object',
      },
    });
  });
});
