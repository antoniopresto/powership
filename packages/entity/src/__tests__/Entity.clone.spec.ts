import { setupProductTest } from './setupProductTest';
import { assert, IsExact } from 'conditional-type-checks';
import { EntityDefaultFields } from '../EntityInterfaces';

describe('Entity clone', () => {
  const { getMocks } = setupProductTest();

  test('cloning', async function () {
    const { ProductEntity } = await getMocks();

    const clonedEntity = ProductEntity.clone((config) => {
      return {
        ...config,
        name: 'Cloned',
        indexes: [
          {
            name: 'sku',
            PK: ['.sku'],
            field: '_id',
          },
        ],
        type: config.type.clone().only(['sku']).graphType('ClonedType'),
      };
    });

    type Cloned = ReturnType<typeof clonedEntity.parse>;
    assert<IsExact<Cloned, EntityDefaultFields & { sku: string }>>(true);

    let productGQL = ProductEntity.type.print();

    expect(clonedEntity.type.print()).toEqual([
      'type ClonedEntity {',
      '  createdAt: Date!',
      '  createdBy: String',
      '  id: String!',
      '  ulid: Ulid!',
      '  updatedAt: Date!',
      '  updatedBy: String',
      '  sku: String!',
      '}',
      '',
      'scalar Date',
      '',
      'scalar Ulid',
      '',
      'input ClonedEntityInput {',
      '  createdAt: Date!',
      '  createdBy: String',
      '  id: String!',
      '  ulid: Ulid!',
      '  updatedAt: Date!',
      '  updatedBy: String',
      '  sku: String!',
      '}',
    ]);

    expect(productGQL).toMatchSnapshot();
  });
});
