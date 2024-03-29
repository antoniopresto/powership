import { createType, GraphType, GraphTypeLike, Infer } from '@powership/schema';

export const PageInfoType = createType('PageInfo', {
  object: {
    endCursor: 'string?',
    hasNextPage: 'boolean',
    hasPreviousPage: 'boolean',
    startCursor: 'string?',
  },
});

export type PageInfo = Infer<typeof PageInfoType>;

export type EdgeType<T> = GraphType<{
  object: {
    cursor: 'string';
    node: T extends GraphTypeLike ? T : 'null';
  };
}>;

export type PaginationType<T> = GraphType<{
  object: {
    edges: { list: true; type: EdgeType<T> };
    pageInfo: typeof PageInfoType;
  };
}>;
