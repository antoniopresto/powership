import { ObjectType } from '../../ObjectType';
import { createType, GraphType } from '../GraphType';
import { getInnerGraphTypeId } from '../getInnerGraphTypeId';

describe('getInnerGraphTypeId', () => {
  let type: GraphType<unknown>;
  let typeName = 'RamonValdez';

  beforeEach(async () => {
    type = createType(typeName, {
      object: {
        fixed: { literal: '123' },
      },
    }) as any;
  });

  afterEach(ObjectType.reset);

  test('simple GraphType', async () => {
    const sut = getInnerGraphTypeId(type);
    expect(sut).toBe(typeName);
  });

  test('GraphType in type', async () => {
    const sut = getInnerGraphTypeId({ type });
    expect(sut).toBe(typeName);
  });

  test('GraphType in type of type of type of GraphType', async () => {
    const sut = getInnerGraphTypeId(createType('1', createType('2', type)));
    expect(sut).toBe(typeName);
  });

  test('GraphType in type of type of type of list flattened', async () => {
    const finalType = createType(
      '0',
      createType(
        '1',
        createType(
          '2',
          createType('3', {
            type: createType('4', {
              type: createType(type),
              list: true,
            }),
            optional: true,
          })
        )
      )
    );

    expect(finalType.definition).toEqual({
      def: {
        __dschm__: {
          def: {
            id: 'RamonValdez',
          },
          type: 'meta',
        },
        fixed: {
          def: {
            '__o.proto__': 'String',
            value: '123',
          },
          list: false,
          optional: false,
          type: 'literal',
        },
      },
      list: false,
      optional: true,
      type: 'object',
    });

    const sut = getInnerGraphTypeId(finalType);

    expect(sut).toBe(typeName);
  });

  test('GraphType in type of type of type of flattened def', async () => {});

  test('GraphType in type of type of type of final type def', async () => {});
});
