import { assert, IsExact } from 'conditional-type-checks';

import { Infer } from '../Infer';
import { createObjectType, ObjectType } from '../ObjectType';
import { implementObject, ImplementObject } from '../implementObject';

describe('implementObject', () => {
  afterEach(ObjectType.reset);

  test('infer ImplementObject', async () => {
    const nodeType = createObjectType('Node', {
      id: 'ID',
    });

    const ship = createObjectType({ name: 'string' });

    type Result = ImplementObject<typeof nodeType, [typeof ship]>;
    type Inferred = Infer<Result>;

    assert<IsExact<Inferred, { id: string; name: string }>>(true);
  });

  test('infer implementObject', async () => {
    const nodeType = createObjectType('Node', {
      id: 'ID',
    });

    const pageNodeType = createObjectType('PageNode', {
      title: 'string',
    });

    const ship = implementObject(
      'ship',
      { name: 'string' },
      nodeType,
      pageNodeType
    );

    type Result = typeof ship;
    type Inferred = Infer<Result>;

    assert<IsExact<Inferred, { id: string; name: string; title: string }>>(
      true
    );
  });

  it('Should extend definition', async () => {
    const nodeType = createObjectType('Node', {
      id: 'ID',
      status: { enum: ['published', 'draft'] },
    } as const);

    const pageNodeType = createObjectType('PageNode', {
      title: 'string',
    });

    const postType = implementObject(
      'Post',
      { body: 'string' },
      nodeType,
      pageNodeType
    );

    expect(postType.definition).toEqual({
      __dschm__: {
        def: {
          id: 'Post',
          implements: ['Node', 'PageNode'],
        },
        list: false,
        optional: false,
        type: 'meta',
      },
      body: {
        list: false,
        optional: false,
        type: 'string',
      },
      id: {
        list: false,
        optional: false,
        type: 'ID',
      },
      status: {
        def: ['published', 'draft'],
        list: false,
        optional: false,
        type: 'enum',
      },
      title: {
        list: false,
        optional: false,
        type: 'string',
      },
    });
  });

  it('Should create graphql type', async () => {
    const nodeType = createObjectType('Node', {
      id: 'ID',
      status: { enum: ['published', 'draft'] },
    } as const);

    const pageNodeType = createObjectType('PageNode', {
      title: 'string',
    });

    const postType = implementObject(
      'Post',
      { body: 'string' },
      nodeType,
      pageNodeType
    );

    expect(postType.graphqlPrint().split('\n')).toEqual([
      'type Post implements NodeInterface & PageNodeInterface {',
      '  title: String!',
      '  id: ID!',
      '  status: Post_status!',
      '  body: String!',
      '}',
      '',
      'interface NodeInterface {',
      '  id: ID!',
      '  status: Node_status!',
      '}',
      '',
      'enum Node_status {',
      '  published',
      '  draft',
      '}',
      '',
      'interface PageNodeInterface {',
      '  title: String!',
      '}',
      '',
      'enum Post_status {',
      '  published',
      '  draft',
      '}',
    ]);
  });
});
