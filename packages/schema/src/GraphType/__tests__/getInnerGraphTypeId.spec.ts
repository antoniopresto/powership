import { ObjectType } from '../../ObjectType';
import { createType, GraphType } from '../GraphType';
import { getInnerGraphTypeId } from '../getInnerGraphTypeId';

describe('getInnerGraphTypeId', () => {
  let type: GraphType<any>;
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

  // test('GraphType in type of type of type of GraphType', async () => {
  //   const tt = createType('2', type);
  //   const sut = getInnerGraphTypeId(createType('1', tt));
  //   expect(sut).toBe(typeName);
  // });
  //
  // test('GraphType in type of type of type of list flattened', async () => {
  //   const t5 = createType(type);
  //
  //   const t4 = createType('4', {
  //     type: t5,
  //     list: true,
  //   });
  //
  //   const t3 = createType('3', {
  //     type: t4,
  //     optional: true,
  //   });
  //
  //   const t2 = createType('2', t3);
  //
  //   const t1 = createType('1', t2);
  //
  //   const finalType = createType('0', t1);
  //
  //   expect(finalType.definition).toEqual({
  //     def: {
  //       __dschm__: {
  //         def: {
  //           id: 'RamonValdez',
  //         },
  //
  //         type: 'meta',
  //       },
  //       fixed: {
  //         def: {
  //           '__o.proto__': 'String',
  //           value: '123',
  //         },
  //
  //         type: 'literal',
  //       },
  //     },
  //
  //     optional: true,
  //     type: 'object',
  //   });
  //
  //   const sut = getInnerGraphTypeId(finalType);
  //
  //   expect(sut).toBe(typeName);
  // });

  test('GraphType in type of type of type of flattened def', async () => {});

  test('GraphType in type of type of type of final type def', async () => {});
});
