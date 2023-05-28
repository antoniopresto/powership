import { createObjectType, ObjectType } from '../../ObjectType/ObjectType';
import { createResolver } from '../../Resolver';
import { createType } from '../GraphType';
import { getQueryTemplates } from '../getQueryTemplates';

describe('generateQuery', () => {
  afterEach(ObjectType.reset);
  beforeEach(ObjectType.reset);

  it('handles defaultValue', async () => {
    const Item = createType('Item', { object: { value: 'int' } });

    const resolver = createResolver({
      type: Item,
      name: 'getItem',
      args: {
        min: { int: {}, optional: true, defaultValue: 0 },
      },
      async resolve() {
        return { value: 1 };
      },
    });

    const graphQLField = resolver.asObjectField();

    const sut = getQueryTemplates({
      graphQLField,
      queryKind: 'mainQuery',
      depthLimit: 10,
      includeDeprecatedFields: true,
    });

    expect(sut.fullQuery.split('\n')).toEqual([
      'query getItem($getItem_min: Int = 0) {',
      '  getItem(min: $getItem_min) {',
      '    value',
      '  }',
      '}',
      '',
    ]);
  });

  it('simple field', async () => {
    const Breadcrumb = createObjectType('Breadcrumb', {
      id: 'ID',
      active: 'boolean?',
      name: 'string',
      parentId: 'ID?',
    });

    const ProductType = createType('Product', {
      object: {
        sku: 'string',
        breadcrumb: { type: Breadcrumb, list: true },
      },
    } as const);

    createResolver({
      name: 'parents',
      type: { type: ProductType, list: true },
      args: {
        id: { type: 'ID', defaultValue: 155 },
      },
      async resolve() {
        return [];
      },
    });

    const solarwindResolver = createResolver({
      type: ProductType,
      name: 'getProductById',
      description: 'Get a product by ID',
      args: {
        id: {
          type: 'ID',
          description: 'Product ID',
        },
        sku: {
          type: 'string',
          description: 'SKU',
        },
      },
      async resolve() {
        return ProductType.parse({});
      },
    });

    const graphQLField = solarwindResolver.asObjectField('productById');
    const sut = getQueryTemplates({
      graphQLField,
      queryKind: 'mainQuery',
      depthLimit: 10,
      includeDeprecatedFields: true,
    });

    expect(sut.fullQuery.split('\n')).toEqual([
      'query productById($productById_id: ID!, $productById_sku: String!) {',
      '  productById(id: $productById_id, sku: $productById_sku) {',
      '    sku',
      '    breadcrumb {',
      '      id',
      '      active',
      '      name',
      '      parentId',
      '    }',
      '  }',
      '}',
      '',
    ]);
  });

  it('handle unions', async () => {
    const ProductType = createType('Member', {
      object: {
        kind: {
          union: [
            {
              object: { value: { literal: 'robot' } },
            },
            {
              object: { value: { literal: 'person' } },
            },
          ],
        },
      },
    } as const);

    const solarwindResolver = createResolver({
      type: ProductType,
      name: 'getMemberKind',
      args: {
        memberId: 'ID',
      },
      async resolve() {
        return ProductType.parse({});
      },
    });

    const graphQLField = solarwindResolver.asObjectField();

    const sut = getQueryTemplates({
      graphQLField,
      queryKind: 'mainQuery',
      depthLimit: 10,
      includeDeprecatedFields: true,
    });

    // name getMemberKind
    // type "Member" -> {kind: {value: "person"} | {value: "robot"}}
    // args {memberId: ID}
    expect(sut.fullQuery.split('\n')).toEqual([
      'query getMemberKind($getMemberKind_memberId: ID!) {',
      '  getMemberKind(memberId: $getMemberKind_memberId) {',
      '    kind {',
      '      ... on Member_kind_0 {',
      '        value',
      '      }',
      '      ... on Member_kind_1 {',
      '        value',
      '      }',
      '    }',
      '  }',
      '}',
      '',
    ]);
  });
});
