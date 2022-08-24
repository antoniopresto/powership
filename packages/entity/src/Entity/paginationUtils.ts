import { createType, GraphType, GraphTypeLike, Infer } from '@darch/schema';

export const PageInfoType = createType('PageInfo', {
  object: {
    endCursor: 'string?',
    hasNextPage: 'boolean',
    hasPreviousPage: 'boolean',
    startCursor: 'string?',
  },
});

export type PageInfo = Infer<typeof PageInfoType>;

export type PaginationType<T> = GraphType<{
  object: {
    edges: [
      {
        object: {
          cursor: 'string';
          node: T extends GraphTypeLike ? T : 'null';
        };
      }
    ];
    pageInfo: typeof PageInfoType;
  };
}>;
