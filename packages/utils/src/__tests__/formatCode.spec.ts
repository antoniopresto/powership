import { formatGraphQL } from '../formatGraphQL';

describe('formatCode', () => {
  test('query', async () => {
    const sut = formatGraphQL('query users ($name: Int   ){name}').split('\n');

    expect(sut).toEqual([
      'query users($name: Int) {', //
      '  name',
      '}',
    ]);
  });

  test('mutation', async () => {
    const sut = formatGraphQL('mutation users ($name: Int   ){name}').split(
      '\n',
    );

    expect(sut).toEqual([
      'mutation users($name: Int) {', //
      '  name',
      '}',
    ]);
  });

  test('fragment', async () => {
    const sut = formatGraphQL('fragment users on User {name}').split('\n');

    expect(sut).toEqual([
      'fragment users on User {',
      '  name', //
      '}',
    ]);
  });

  test('fullQuery', async () => {
    const fullQuery = [
      'fragment Breadcrumb2402738501Fragment on Breadcrumb {',
      '      id',
      '      active',
      '      name',
      '      parentId',
      '    }',
      '    ',
      '    fragment Product2040566541Fragment on Product {',
      '      sku',
      '      breadcrumb {',
      '        ...Breadcrumb2402738501Fragment',
      '      }',
      '      parents(id: $productById_parents_id) {',
      '        ...Product3389259298Fragment',
      '      }',
      '      innerParent(limit: $productById_parents_innerParent_limit) {',
      '        ...Product2040566541Fragment',
      '      }',
      '    }',
      '    ',
      '    fragment Product3389259298Fragment on Product {',
      '      sku',
      '      breadcrumb {...Breadcrumb2402738501Fragment}',
      '      parents(id: $productById_parents_id) {...Product3389259298Fragment}',
      '      innerParent(limit: $productById_parents_innerParent_limit) {...Product2040566541Fragment}',
      '    }',
      '    ',
      '    query productById($productById_id: ID!, $productById_sku: String!, $productById_parents_id: ID = 155, $productById_parents_innerParent_limit: Int = 2) {',
      '      productById(',
      '        id: $productById_id',
      '        sku: $productById_sku',
      '        id: $productById_parents_id',
      '        limit: $productById_parents_innerParent_limit',
      '      ) {',
      '        sku',
      '        breadcrumb {',
      '          ...Breadcrumb2402738501Fragment',
      '        }',
      '        parents(id: $productById_parents_id) {',
      '          ...Product3389259298Fragment',
      '        }',
      '        innerParent(limit: $productById_parents_innerParent_limit) {',
      '          ...Product2040566541Fragment',
      '        }',
      '      }',
      '    }',
    ].join(' ');

    const sut = formatGraphQL(fullQuery).split('\n');

    expect(sut).toEqual([
      'fragment Breadcrumb2402738501Fragment on Breadcrumb {',
      '  id',
      '  active',
      '  name',
      '  parentId',
      '}',
      '',
      'fragment Product2040566541Fragment on Product {',
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
      '',
      'fragment Product3389259298Fragment on Product {',
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
      '',
      'query productById($productById_id: ID!, $productById_sku: String!, $productById_parents_id: ID = 155, $productById_parents_innerParent_limit: Int = 2) {',
      '  productById(',
      '    id: $productById_id',
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
    ]);
  });
});
