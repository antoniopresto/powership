import { createObjectType, ObjectType } from '../../ObjectType';
import { createType } from '../GraphType';
import { getQueryExamples } from '../getQueryExamples';

describe('generateQuery', () => {
  afterEach(ObjectType.reset);
  beforeEach(ObjectType.reset);

  it('handles defaultValue', async () => {
    const Item = createType('Item', { object: { value: 'int' } });

    const resolver = Item.createResolver({
      name: 'getItem',
      args: {
        min: { int: {}, optional: true, defaultValue: 0 },
      },
      async resolve() {
        return { value: 1 };
      },
    });

    const graphQLField = resolver.asObjectField();

    const sut = getQueryExamples({
      graphQLField,
      queryKind: 'mainQuery',
      depthLimit: 10,
      includeDeprecatedFields: true,
    });

    expect(sut.fullQuery.split('\n')).toEqual([
      'query getItem($getItem_min: Int = "0") {',
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
        breadcrumb: [Breadcrumb],
      },
    } as const);

    ProductType.addRelation({
      name: 'parents',
      type: [ProductType] as const,
      args: {
        id: { type: 'ID', defaultValue: 155 },
      },
      async resolve() {
        return [];
      },
    });

    ProductType.addRelation({
      name: 'innerParent',
      type: ProductType,
      args: {
        limit: {
          type: 'int',
          defaultValue: 2,
        },
      },
      async resolve() {
        return ProductType.parse({});
      },
    });

    const darchResolver = ProductType.createResolver({
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

    const graphQLField = darchResolver.asObjectField('productById');
    const sut = getQueryExamples({
      graphQLField,
      queryKind: 'mainQuery',
      depthLimit: 10,
      includeDeprecatedFields: true,
    });

    // FIXME
    //    $productById_parents_id: ID = "155"...
    expect(sut.fullQuery.split('\n')).toEqual([
      'fragment Breadcrumb2402738501Fragment on Breadcrumb {',
      '  id',
      '  active',
      '  name',
      '  parentId',
      '}',
      'fragment Product3389259298Fragment($productById_parents_id: ID = "155") on Product {',
      '  sku',
      '  breadcrumb {',
      '    ...Breadcrumb2402738501Fragment',
      '  }',
      '  parents(id: $productById_parents_id) {',
      '    ...Product3389259298Fragment',
      '  }',
      '  innerParent(limit: $productById_parents_innerParent_limit) {',
      '    ...Product2040566541Fragment',
      '  }',
      '}',
      'fragment Product2040566541Fragment($productById_parents_innerParent_limit: Int = "2") on Product {',
      '  sku',
      '  breadcrumb {',
      '    ...Breadcrumb2402738501Fragment',
      '  }',
      '  parents(id: $productById_parents_id) {',
      '    ...Product3389259298Fragment',
      '  }',
      '  innerParent(limit: $productById_parents_innerParent_limit) {',
      '    ...Product2040566541Fragment',
      '  }',
      '}',
      'query productById(',
      '  #Product ID',
      '  $productById_id: ID!',
      '  #SKU',
      '  $productById_sku: String!',
      '  $productById_parents_id: ID = "155"',
      '  $productById_parents_innerParent_limit: Int = "2"',
      ') {',
      '  productById(',
      '    #Product ID',
      '    id: $productById_id',
      '    #SKU',
      '    sku: $productById_sku',
      '    id: $productById_parents_id',
      '    limit: $productById_parents_innerParent_limit',
      '  ) {',
      '    sku',
      '    breadcrumb {',
      '      ...Breadcrumb2402738501Fragment',
      '    }',
      '    parents(id: $productById_parents_id) {',
      '      ...Product3389259298Fragment',
      '    }',
      '    innerParent(limit: $productById_parents_innerParent_limit) {',
      '      ...Product2040566541Fragment',
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

    const darchResolver = ProductType.createResolver({
      name: 'getMemberKind',
      args: {
        memberId: 'ID',
      },
      async resolve() {
        return ProductType.parse({});
      },
    });

    const graphQLField = darchResolver.asObjectField();

    const sut = getQueryExamples({
      graphQLField,
      queryKind: 'mainQuery',
      depthLimit: 10,
      includeDeprecatedFields: true,
    });

    // name getMemberKind
    // type "Member" -> {kind: {value: "person"} | {value: "robot"}}
    // args {memberId: ID}
    expect(sut.fullQuery.split('\n')).toEqual([
      'fragment Member_kindUnion2166136261Fragment on Member_kindUnion {',
      '  __typeName',
      '  ... on Member_kindUnion_0 {',
      '    value',
      '  }',
      '  ... on Member_kindUnion_1 {',
      '    value',
      '  }',
      '}',
      'query getMemberKind($getMemberKind_memberId: ID!) {',
      '  getMemberKind(memberId: $getMemberKind_memberId) {',
      '    kind {',
      '      ...Member_kindUnion2166136261Fragment',
      '    }',
      '  }',
      '}',
      '',
    ]);
  });
});
