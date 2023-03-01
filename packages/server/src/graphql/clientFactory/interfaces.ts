

export type GraphQLClientError = { message: string; path: string[] };

export type ID = number | string;

export type GraphQLClientResponse<Result> =
  | { data: Result; errors: null }
  | { data: null; errors: GraphQLClientError[] };



export interface ExpectedGraphQLClient {
  answersPagination: {
    args: answersPaginationInput;
    payload: GraphQLClientResponse<AnswerConnection>;
  };
  
  campaignPagination: {
    args: campaignPaginationInput;
    payload: GraphQLClientResponse<CampaignConnection>;
  };
  
  campaignUpdateOne: {
    args: campaignUpdateOneInput;
    payload: GraphQLClientResponse<Campaign_Edge>;
  };
  
  campaignFindOne: {
    args: campaignFindOneInput;
    payload: GraphQLClientResponse<CampaignEntityOptional>;
  };
  
  campaignCreateOne: {
    args: campaignCreateOneInput;
    payload: GraphQLClientResponse<Campaign_Edge>;
  };
  
  answerCreateOne: {
    args: answerCreateOneInput;
    payload: GraphQLClientResponse<Answer_Edge>;
  };
  
  userAddressesFindMany: {
    args: userAddressesFindManyInput;
    payload: GraphQLClientResponse<AddressList>;
  };
}

export const graphqlClientHelpers = {
  answersPagination: {
    name: 'answersPagination',
    kind: 'query',
    payload: GraphType.getOrSet('AnswerConnection', {
      def: {
        edges: {
          def: {
            cursor: { type: 'string' },
            node: {
              def: {
                createdAt: { type: 'date' },
                id: { type: 'string' },
                ulid: { type: 'ulid' },
                updatedAt: { type: 'date' },
                campaignID: {
                  def: {},
                  description: 'Campaign ULID',
                  type: 'ID',
                },
                response: {
                  type: 'record',
                  def: { keyType: 'string', type: 'any' },
                },
                meta: {
                  def: { of: 'any' },
                  hidden: true,
                  optional: true,
                  type: 'array',
                },
                version: { type: 'int', optional: true },
                __dschm__: { def: { id: 'AnswerEntity' }, type: 'meta' },
              },
              type: 'object',
            },
            __dschm__: { def: { id: 'Answer_Edge' }, type: 'meta' },
          },
          list: true,
          type: 'object',
        },
        pageInfo: {
          def: {
            endCursor: { type: 'string', optional: true },
            hasNextPage: { type: 'boolean' },
            hasPreviousPage: { type: 'boolean' },
            startCursor: { type: 'string', optional: true },
            __dschm__: { def: { id: 'PageInfo' }, type: 'meta' },
          },
          type: 'object',
        },
      },
      type: 'object',
    } as const),
    
    input: GraphType.getOrSet('answersPaginationInput', {
      def: {
        after: { optional: true, type: 'ID' },
        condition: {
          def: {
            createdAt: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            id: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            ulid: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            updatedAt: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            campaignID: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            response: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            meta: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            version: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            __dschm__: { def: { id: 'AnswerQueryConditions' }, type: 'meta' },
          },
          optional: true,
          type: 'object',
        },
        filter: {
          def: {
            id: { optional: true, type: 'ID' },
            campaignID: {
              def: {},
              description: 'Campaign ULID',
              type: 'ID',
              optional: true,
            },
            author: { type: 'ID', hidden: true, optional: true },
            ulid: { type: 'ulid', optional: true },
            __dschm__: {
              def: { id: 'answersPaginationInput_filter' },
              type: 'meta',
            },
          },
          type: 'object',
        },
        first: { optional: true, type: 'int' },
      },
      type: 'object',
    } as const),
    
    operation: {
      query:
        'query answersPagination($answersPagination_after: ID, $answersPagination_condition: AnswerQueryConditionsInput, $answersPagination_filter: answersPaginationInput_filterInput!, $answersPagination_first: Int) {\n  answersPagination(\n    after: $answersPagination_after\n    condition: $answersPagination_condition\n    filter: $answersPagination_filter\n    first: $answersPagination_first\n  ) {\n    edges {\n      cursor\n      node {\n        createdAt\n        id\n        ulid\n        updatedAt\n        campaignID\n        response\n        version\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n',
      varNames: {
        after: {
          comments: '',
          name: 'after',
          type: 'ID',
          varName: 'answersPagination_after',
        },
        condition: {
          comments: '',
          name: 'condition',
          type: 'AnswerQueryConditionsInput',
          varName: 'answersPagination_condition',
        },
        filter: {
          comments: '',
          name: 'filter',
          type: 'answersPaginationInput_filterInput!',
          varName: 'answersPagination_filter',
        },
        first: {
          comments: '',
          name: 'first',
          type: 'Int',
          varName: 'answersPagination_first',
        },
      },
    } as const,
  },
  
  campaignPagination: {
    name: 'campaignPagination',
    kind: 'query',
    payload: GraphType.getOrSet('CampaignConnection', {
      def: {
        edges: {
          def: {
            cursor: { type: 'string' },
            node: {
              def: {
                createdAt: { type: 'date' },
                id: { type: 'string' },
                ulid: { type: 'ulid' },
                updatedAt: { type: 'date' },
                title: { def: { min: 3, max: 1000 }, type: 'string' },
                campaignID: { def: { autoCreate: true }, type: 'ulid' },
                form: {
                  def: {
                    _kind: {
                      def: {
                        '__o.proto__': 'String',
                        value: 'FormerDefinition',
                      },
                      defaultValue: 'FormerDefinition',
                      optional: true,
                      type: 'literal',
                    },
                    meta: {
                      def: { keyType: 'string', type: 'any' },
                      description:
                        'Any custom JSON data to be sent in the form answer.',
                      optional: true,
                      type: 'record',
                    },
                    rows: {
                      def: {
                        min: 1,
                        of: {
                          __isGraphType: true,
                          _optionalId: 'FormerRow',
                          touched: true,
                          __hidden: false,
                          beforeInitialize: [],
                          definition: {
                            def: {
                              _kind: {
                                def: {
                                  '__o.proto__': 'String',
                                  value: 'FormerRow',
                                },
                                defaultValue: 'FormerRow',
                                optional: true,
                                type: 'literal',
                              },
                              className: { type: 'string', optional: true },
                              cols: {
                                def: {
                                  of: {
                                    __isGraphType: true,
                                    _optionalId: 'FormerColumn',
                                    touched: true,
                                    __hidden: false,
                                    beforeInitialize: [null],
                                    definition: {
                                      def: {
                                        _kind: {
                                          def: {
                                            '__o.proto__': 'String',
                                            value: 'FormerColumn',
                                          },
                                          defaultValue: 'FormerColumn',
                                          description:
                                            'used to pre-validate object type',
                                          optional: true,
                                          type: 'literal',
                                        },
                                        question: {
                                          type: 'string',
                                          optional: true,
                                        },
                                        required: {
                                          optional: true,
                                          type: 'boolean',
                                        },
                                        className: {
                                          type: 'string',
                                          optional: true,
                                        },
                                        colID: {
                                          def: { min: 1 },
                                          type: 'string',
                                        },
                                        extraConfig: {
                                          def: {
                                            keyType: 'string',
                                            type: 'any',
                                          },
                                          description:
                                            'Any extra configuration.',
                                          optional: true,
                                          type: 'record',
                                        },
                                        fieldProps: {
                                          def: {
                                            keyType: 'string',
                                            type: 'any',
                                          },
                                          description:
                                            'The props object expected by the component indicated in "componentUID". This object will be validated against the "propsDefinition" provided in the corresponding component register (see: FormerComponentRegister).',
                                          type: 'record',
                                        },
                                        inputName: {
                                          def: { min: 0 },
                                          description:
                                            'Name of the entry to be saved in form data.',
                                          type: 'string',
                                        },
                                        componentName: {
                                          def: [
                                            'Layout',
                                            'LoadableField',
                                            'Stepper',
                                            'Admin',
                                            'Hero',
                                            'Title',
                                            'CNPJTextField',
                                            'CPFTextField',
                                            'PhoneTextfield',
                                            'Datepicker',
                                            'Textfield',
                                            'Radio',
                                            'Select',
                                            'Checkbox',
                                            'AddressSelection',
                                          ],
                                          type: 'enum',
                                        },
                                        componentVersion: {
                                          def: {},
                                          defaultValue: '0.1.34',
                                          optional: true,
                                          type: 'string',
                                        },
                                        meta: {
                                          def: {
                                            keyType: 'string',
                                            type: 'any',
                                          },
                                          description:
                                            'Custom metadata to be sent in former answer.',
                                          optional: true,
                                          type: 'record',
                                        },
                                        validations: {
                                          description:
                                            'Validations to be used to validade input value',
                                          type: 'record',
                                          list: true,
                                          defaultValue: [],
                                          optional: true,
                                          def: {
                                            keyType: 'string',
                                            type: 'any',
                                          },
                                        },
                                        presentationOnly: {
                                          type: 'boolean',
                                          optional: true,
                                        },
                                        sizes: {
                                          def: [
                                            {
                                              def: {
                                                _kind: {
                                                  def: {
                                                    '__o.proto__': 'String',
                                                    value: 'ColumnSizes',
                                                  },
                                                  defaultValue: 'ColumnSizes',
                                                  optional: true,
                                                  type: 'literal',
                                                },
                                                first: {
                                                  def: [
                                                    'xs',
                                                    'sm',
                                                    'md',
                                                    'lg',
                                                    'xl',
                                                  ],
                                                  optional: true,
                                                  type: 'enum',
                                                },
                                                fluid: {
                                                  type: 'boolean',
                                                  optional: true,
                                                },
                                                last: {
                                                  def: [
                                                    'xs',
                                                    'sm',
                                                    'md',
                                                    'lg',
                                                    'xl',
                                                  ],
                                                  optional: true,
                                                  type: 'enum',
                                                },
                                                lg: {
                                                  def: [
                                                    { def: 1, type: 'literal' },
                                                    { def: 2, type: 'literal' },
                                                    { def: 3, type: 'literal' },
                                                    { def: 4, type: 'literal' },
                                                    { def: 5, type: 'literal' },
                                                    { def: 6, type: 'literal' },
                                                    { def: 7, type: 'literal' },
                                                    { def: 8, type: 'literal' },
                                                    { def: 9, type: 'literal' },
                                                    {
                                                      def: 10,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: 11,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: 12,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '1',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '2',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '3',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '4',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '5',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '6',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '7',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '8',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '9',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '10',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '11',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '12',
                                                      type: 'literal',
                                                    },
                                                  ],
                                                  optional: true,
                                                  type: 'union',
                                                },
                                                lgOffset: {
                                                  type: 'int',
                                                  optional: true,
                                                },
                                                md: {
                                                  def: [
                                                    { def: 1, type: 'literal' },
                                                    { def: 2, type: 'literal' },
                                                    { def: 3, type: 'literal' },
                                                    { def: 4, type: 'literal' },
                                                    { def: 5, type: 'literal' },
                                                    { def: 6, type: 'literal' },
                                                    { def: 7, type: 'literal' },
                                                    { def: 8, type: 'literal' },
                                                    { def: 9, type: 'literal' },
                                                    {
                                                      def: 10,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: 11,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: 12,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '1',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '2',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '3',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '4',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '5',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '6',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '7',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '8',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '9',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '10',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '11',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '12',
                                                      type: 'literal',
                                                    },
                                                  ],
                                                  optional: true,
                                                  type: 'union',
                                                },
                                                mdOffset: {
                                                  type: 'int',
                                                  optional: true,
                                                },
                                                sm: {
                                                  def: [
                                                    { def: 1, type: 'literal' },
                                                    { def: 2, type: 'literal' },
                                                    { def: 3, type: 'literal' },
                                                    { def: 4, type: 'literal' },
                                                    { def: 5, type: 'literal' },
                                                    { def: 6, type: 'literal' },
                                                    { def: 7, type: 'literal' },
                                                    { def: 8, type: 'literal' },
                                                    { def: 9, type: 'literal' },
                                                    {
                                                      def: 10,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: 11,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: 12,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '1',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '2',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '3',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '4',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '5',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '6',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '7',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '8',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '9',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '10',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '11',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '12',
                                                      type: 'literal',
                                                    },
                                                  ],
                                                  optional: true,
                                                  type: 'union',
                                                },
                                                smOffset: {
                                                  type: 'int',
                                                  optional: true,
                                                },
                                                xl: {
                                                  def: [
                                                    { def: 1, type: 'literal' },
                                                    { def: 2, type: 'literal' },
                                                    { def: 3, type: 'literal' },
                                                    { def: 4, type: 'literal' },
                                                    { def: 5, type: 'literal' },
                                                    { def: 6, type: 'literal' },
                                                    { def: 7, type: 'literal' },
                                                    { def: 8, type: 'literal' },
                                                    { def: 9, type: 'literal' },
                                                    {
                                                      def: 10,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: 11,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: 12,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '1',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '2',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '3',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '4',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '5',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '6',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '7',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '8',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '9',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '10',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '11',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '12',
                                                      type: 'literal',
                                                    },
                                                  ],
                                                  optional: true,
                                                  type: 'union',
                                                },
                                                xlOffset: {
                                                  type: 'int',
                                                  optional: true,
                                                },
                                                xs: {
                                                  def: [
                                                    { def: 1, type: 'literal' },
                                                    { def: 2, type: 'literal' },
                                                    { def: 3, type: 'literal' },
                                                    { def: 4, type: 'literal' },
                                                    { def: 5, type: 'literal' },
                                                    { def: 6, type: 'literal' },
                                                    { def: 7, type: 'literal' },
                                                    { def: 8, type: 'literal' },
                                                    { def: 9, type: 'literal' },
                                                    {
                                                      def: 10,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: 11,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: 12,
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '1',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '2',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '3',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '4',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '5',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '6',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '7',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '8',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '9',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '10',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '11',
                                                      type: 'literal',
                                                    },
                                                    {
                                                      def: '12',
                                                      type: 'literal',
                                                    },
                                                  ],
                                                  optional: true,
                                                  type: 'union',
                                                },
                                                xsOffset: {
                                                  type: 'int',
                                                  optional: true,
                                                },
                                                __dschm__: {
                                                  def: { id: null },
                                                  type: 'meta',
                                                },
                                              },
                                              description:
                                                'Sizes of a Column in different screens. See: http://flexboxgrid.com/',
                                              type: 'object',
                                            },
                                            { type: 'undefined' },
                                          ],
                                          optional: true,
                                          type: 'union',
                                        },
                                        tagName: {
                                          def: {},
                                          description:
                                            'HTML tag element to render',
                                          optional: true,
                                          type: 'string',
                                        },
                                        __dschm__: {
                                          def: { id: 'FormerRow_cols' },
                                          type: 'meta',
                                        },
                                      },
                                      type: 'object',
                                    },
                                  },
                                },
                                type: 'array',
                              },
                              rowID: { def: { min: 1 }, type: 'string' },
                              sizes: {
                                def: [
                                  {
                                    def: {
                                      around: {
                                        def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                        optional: true,
                                        type: 'enum',
                                      },
                                      between: {
                                        def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                        optional: true,
                                        type: 'enum',
                                      },
                                      bottom: {
                                        def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                        optional: true,
                                        type: 'enum',
                                      },
                                      center: {
                                        def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                        optional: true,
                                        type: 'enum',
                                      },
                                      end: {
                                        def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                        optional: true,
                                        type: 'enum',
                                      },
                                      middle: {
                                        def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                        optional: true,
                                        type: 'enum',
                                      },
                                      reverse: {
                                        type: 'boolean',
                                        optional: true,
                                      },
                                      start: {
                                        def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                        optional: true,
                                        type: 'enum',
                                      },
                                      top: {
                                        def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                        optional: true,
                                        type: 'enum',
                                      },
                                      __dschm__: {
                                        def: { id: 'RowSizes' },
                                        type: 'meta',
                                      },
                                    },
                                    type: 'object',
                                  },
                                  { type: 'undefined' },
                                ],
                                optional: true,
                                type: 'union',
                              },
                              tagName: { type: 'string', optional: true },
                              __dschm__: {
                                def: { id: 'FormerRow' },
                                type: 'meta',
                              },
                            },
                            type: 'object',
                          },
                        },
                      },
                      type: 'array',
                    },
                    uid: {
                      def: { autoCreate: true },
                      description:
                        'Uniq identifier for this form, should be generated using the utility createUID(), otherwise will be autogenerated.',
                      optional: true,
                      type: 'ulid',
                    },
                    __dschm__: {
                      def: { id: 'FormerDefinition' },
                      type: 'meta',
                    },
                  },
                  type: 'object',
                },
                status: {
                  def: ['PUBLISHED', 'DRAFT', 'REMOVED', 'PAUSED'],
                  defaultValue: 'DRAFT',
                  type: 'enum',
                },
                requireLogin: {
                  def: {},
                  defaultValue: true,
                  optional: true,
                  type: 'boolean',
                },
                extraManagers: { type: 'ID', list: true, optional: true },
                answersCount: { type: 'int', optional: true },
                meta: {
                  def: { of: 'any' },
                  hidden: true,
                  optional: true,
                  type: 'array',
                },
                userResponse: {
                  def: {
                    createdAt: { type: 'date' },
                    id: { type: 'string' },
                    ulid: { type: 'ulid' },
                    updatedAt: { type: 'date' },
                    campaignID: {
                      def: {},
                      description: 'Campaign ULID',
                      type: 'ID',
                    },
                    response: {
                      type: 'record',
                      def: { keyType: 'string', type: 'any' },
                    },
                    meta: {
                      def: { of: 'any' },
                      hidden: true,
                      optional: true,
                      type: 'array',
                    },
                    version: { type: 'int', optional: true },
                    __dschm__: { def: { id: 'AnswerEntity' }, type: 'meta' },
                  },
                  optional: true,
                  type: 'object',
                },
                version: { type: 'int', optional: true },
                __dschm__: { def: { id: 'CampaignEntity' }, type: 'meta' },
              },
              type: 'object',
            },
            __dschm__: { def: { id: 'Campaign_Edge' }, type: 'meta' },
          },
          list: true,
          type: 'object',
        },
        pageInfo: {
          def: {
            endCursor: { type: 'string', optional: true },
            hasNextPage: { type: 'boolean' },
            hasPreviousPage: { type: 'boolean' },
            startCursor: { type: 'string', optional: true },
            __dschm__: { def: { id: 'PageInfo' }, type: 'meta' },
          },
          type: 'object',
        },
      },
      type: 'object',
    } as const),
    
    input: GraphType.getOrSet('campaignPaginationInput', {
      def: {
        after: { optional: true, type: 'ID' },
        condition: {
          def: {
            createdAt: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            id: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            ulid: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            updatedAt: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            title: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            campaignID: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            form: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            status: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            requireLogin: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            extraManagers: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            answersCount: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            meta: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            userResponse: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            version: {
              def: [
                {
                  def: {
                    between: {
                      def: [
                        { type: 'string', list: true },
                        { type: 'float', list: true },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    contains: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    eq: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    exists: { type: 'boolean', optional: true },
                    gt: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    gte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    in: { type: 'any', list: true, optional: true },
                    lte: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    matchString: { type: 'string', optional: true },
                    ne: {
                      def: [
                        { type: 'string' },
                        { type: 'float' },
                        { type: 'boolean' },
                        { type: 'null' },
                      ],
                      optional: true,
                      type: 'union',
                    },
                    startsWith: { type: 'string', optional: true },
                    type: {
                      def: [
                        'String',
                        'Number',
                        'Binary',
                        'Boolean',
                        'Null',
                        'List',
                        'Map',
                        'StringSet',
                        'NumberSet',
                      ],
                      optional: true,
                      type: 'enum',
                    },
                    __dschm__: { def: { id: null }, type: 'meta' },
                  },
                  type: 'object',
                },
                {
                  def: [
                    { type: 'string' },
                    { type: 'float' },
                    { type: 'null' },
                  ],
                  optional: true,
                  type: 'union',
                },
              ],
              optional: true,
              type: 'union',
              name: 'QueryCondition',
            },
            __dschm__: { def: { id: 'CampaignQueryConditions' }, type: 'meta' },
          },
          optional: true,
          type: 'object',
        },
        filter: {
          def: {
            id: { optional: true, type: 'ID' },
            campaignID: {
              def: { autoCreate: true },
              type: 'ulid',
              optional: true,
            },
            createdBy: { optional: true, type: 'string', hidden: true },
            __dschm__: {
              def: { id: 'campaignPaginationInput_filter' },
              type: 'meta',
            },
          },
          type: 'object',
        },
        first: { optional: true, type: 'int' },
      },
      type: 'object',
    } as const),
    
    operation: {
      query:
        'query campaignPagination($campaignPagination_after: ID, $campaignPagination_condition: CampaignQueryConditionsInput, $campaignPagination_filter: campaignPaginationInput_filterInput!, $campaignPagination_first: Int) {\n  campaignPagination(\n    after: $campaignPagination_after\n    condition: $campaignPagination_condition\n    filter: $campaignPagination_filter\n    first: $campaignPagination_first\n  ) {\n    edges {\n      cursor\n      node {\n        createdAt\n        id\n        ulid\n        updatedAt\n        title\n        campaignID\n        form {\n          _kind\n          meta\n          rows {\n            _kind\n            className\n            cols {\n              _kind\n              question\n              required\n              className\n              colID\n              extraConfig\n              fieldProps\n              inputName\n              componentName\n              componentVersion\n              meta\n              validations\n              presentationOnly\n              sizes\n              tagName\n            }\n            rowID\n            sizes\n            tagName\n          }\n          uid\n        }\n        status\n        requireLogin\n        extraManagers\n        answersCount\n        userResponse {\n          createdAt\n          id\n          ulid\n          updatedAt\n          campaignID\n          response\n          version\n        }\n        version\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n',
      varNames: {
        after: {
          comments: '',
          name: 'after',
          type: 'ID',
          varName: 'campaignPagination_after',
        },
        condition: {
          comments: '',
          name: 'condition',
          type: 'CampaignQueryConditionsInput',
          varName: 'campaignPagination_condition',
        },
        filter: {
          comments: '',
          name: 'filter',
          type: 'campaignPaginationInput_filterInput!',
          varName: 'campaignPagination_filter',
        },
        first: {
          comments: '',
          name: 'first',
          type: 'Int',
          varName: 'campaignPagination_first',
        },
      },
    } as const,
  },
  
  campaignUpdateOne: {
    name: 'campaignUpdateOne',
    kind: 'mutation',
    payload: GraphType.getOrSet('Campaign_Edge', {
      def: {
        cursor: { type: 'string' },
        node: {
          def: {
            createdAt: { type: 'date' },
            id: { type: 'string' },
            ulid: { type: 'ulid' },
            updatedAt: { type: 'date' },
            title: { def: { min: 3, max: 1000 }, type: 'string' },
            campaignID: { def: { autoCreate: true }, type: 'ulid' },
            form: {
              def: {
                _kind: {
                  def: { '__o.proto__': 'String', value: 'FormerDefinition' },
                  defaultValue: 'FormerDefinition',
                  optional: true,
                  type: 'literal',
                },
                meta: {
                  def: { keyType: 'string', type: 'any' },
                  description:
                    'Any custom JSON data to be sent in the form answer.',
                  optional: true,
                  type: 'record',
                },
                rows: {
                  def: {
                    min: 1,
                    of: {
                      __isGraphType: true,
                      _optionalId: 'FormerRow',
                      touched: true,
                      __hidden: false,
                      beforeInitialize: [],
                      definition: {
                        def: {
                          _kind: {
                            def: {
                              '__o.proto__': 'String',
                              value: 'FormerRow',
                            },
                            defaultValue: 'FormerRow',
                            optional: true,
                            type: 'literal',
                          },
                          className: { type: 'string', optional: true },
                          cols: {
                            def: {
                              of: {
                                __isGraphType: true,
                                _optionalId: 'FormerColumn',
                                touched: true,
                                __hidden: false,
                                beforeInitialize: [null],
                                definition: {
                                  def: {
                                    _kind: {
                                      def: {
                                        '__o.proto__': 'String',
                                        value: 'FormerColumn',
                                      },
                                      defaultValue: 'FormerColumn',
                                      description:
                                        'used to pre-validate object type',
                                      optional: true,
                                      type: 'literal',
                                    },
                                    question: {
                                      type: 'string',
                                      optional: true,
                                    },
                                    required: {
                                      optional: true,
                                      type: 'boolean',
                                    },
                                    className: {
                                      type: 'string',
                                      optional: true,
                                    },
                                    colID: { def: { min: 1 }, type: 'string' },
                                    extraConfig: {
                                      def: { keyType: 'string', type: 'any' },
                                      description: 'Any extra configuration.',
                                      optional: true,
                                      type: 'record',
                                    },
                                    fieldProps: {
                                      def: { keyType: 'string', type: 'any' },
                                      description:
                                        'The props object expected by the component indicated in "componentUID". This object will be validated against the "propsDefinition" provided in the corresponding component register (see: FormerComponentRegister).',
                                      type: 'record',
                                    },
                                    inputName: {
                                      def: { min: 0 },
                                      description:
                                        'Name of the entry to be saved in form data.',
                                      type: 'string',
                                    },
                                    componentName: {
                                      def: [
                                        'Layout',
                                        'LoadableField',
                                        'Stepper',
                                        'Admin',
                                        'Hero',
                                        'Title',
                                        'CNPJTextField',
                                        'CPFTextField',
                                        'PhoneTextfield',
                                        'Datepicker',
                                        'Textfield',
                                        'Radio',
                                        'Select',
                                        'Checkbox',
                                        'AddressSelection',
                                      ],
                                      type: 'enum',
                                    },
                                    componentVersion: {
                                      def: {},
                                      defaultValue: '0.1.34',
                                      optional: true,
                                      type: 'string',
                                    },
                                    meta: {
                                      def: { keyType: 'string', type: 'any' },
                                      description:
                                        'Custom metadata to be sent in former answer.',
                                      optional: true,
                                      type: 'record',
                                    },
                                    validations: {
                                      description:
                                        'Validations to be used to validade input value',
                                      type: 'record',
                                      list: true,
                                      defaultValue: [],
                                      optional: true,
                                      def: { keyType: 'string', type: 'any' },
                                    },
                                    presentationOnly: {
                                      type: 'boolean',
                                      optional: true,
                                    },
                                    sizes: {
                                      def: [
                                        {
                                          def: {
                                            _kind: {
                                              def: {
                                                '__o.proto__': 'String',
                                                value: 'ColumnSizes',
                                              },
                                              defaultValue: 'ColumnSizes',
                                              optional: true,
                                              type: 'literal',
                                            },
                                            first: {
                                              def: [
                                                'xs',
                                                'sm',
                                                'md',
                                                'lg',
                                                'xl',
                                              ],
                                              optional: true,
                                              type: 'enum',
                                            },
                                            fluid: {
                                              type: 'boolean',
                                              optional: true,
                                            },
                                            last: {
                                              def: [
                                                'xs',
                                                'sm',
                                                'md',
                                                'lg',
                                                'xl',
                                              ],
                                              optional: true,
                                              type: 'enum',
                                            },
                                            lg: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            lgOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            md: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            mdOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            sm: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            smOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            xl: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            xlOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            xs: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            xsOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            __dschm__: {
                                              def: { id: null },
                                              type: 'meta',
                                            },
                                          },
                                          description:
                                            'Sizes of a Column in different screens. See: http://flexboxgrid.com/',
                                          type: 'object',
                                        },
                                        { type: 'undefined' },
                                      ],
                                      optional: true,
                                      type: 'union',
                                    },
                                    tagName: {
                                      def: {},
                                      description: 'HTML tag element to render',
                                      optional: true,
                                      type: 'string',
                                    },
                                    __dschm__: {
                                      def: { id: 'FormerRow_cols' },
                                      type: 'meta',
                                    },
                                  },
                                  type: 'object',
                                },
                              },
                            },
                            type: 'array',
                          },
                          rowID: { def: { min: 1 }, type: 'string' },
                          sizes: {
                            def: [
                              {
                                def: {
                                  around: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  between: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  bottom: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  center: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  end: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  middle: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  reverse: { type: 'boolean', optional: true },
                                  start: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  top: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  __dschm__: {
                                    def: { id: 'RowSizes' },
                                    type: 'meta',
                                  },
                                },
                                type: 'object',
                              },
                              { type: 'undefined' },
                            ],
                            optional: true,
                            type: 'union',
                          },
                          tagName: { type: 'string', optional: true },
                          __dschm__: { def: { id: 'FormerRow' }, type: 'meta' },
                        },
                        type: 'object',
                      },
                    },
                  },
                  type: 'array',
                },
                uid: {
                  def: { autoCreate: true },
                  description:
                    'Uniq identifier for this form, should be generated using the utility createUID(), otherwise will be autogenerated.',
                  optional: true,
                  type: 'ulid',
                },
                __dschm__: { def: { id: 'FormerDefinition' }, type: 'meta' },
              },
              type: 'object',
            },
            status: {
              def: ['PUBLISHED', 'DRAFT', 'REMOVED', 'PAUSED'],
              defaultValue: 'DRAFT',
              type: 'enum',
            },
            requireLogin: {
              def: {},
              defaultValue: true,
              optional: true,
              type: 'boolean',
            },
            extraManagers: { type: 'ID', list: true, optional: true },
            answersCount: { type: 'int', optional: true },
            meta: {
              def: { of: 'any' },
              hidden: true,
              optional: true,
              type: 'array',
            },
            userResponse: {
              def: {
                createdAt: { type: 'date' },
                id: { type: 'string' },
                ulid: { type: 'ulid' },
                updatedAt: { type: 'date' },
                campaignID: {
                  def: {},
                  description: 'Campaign ULID',
                  type: 'ID',
                },
                response: {
                  type: 'record',
                  def: { keyType: 'string', type: 'any' },
                },
                meta: {
                  def: { of: 'any' },
                  hidden: true,
                  optional: true,
                  type: 'array',
                },
                version: { type: 'int', optional: true },
                __dschm__: { def: { id: 'AnswerEntity' }, type: 'meta' },
              },
              optional: true,
              type: 'object',
            },
            version: { type: 'int', optional: true },
            __dschm__: { def: { id: 'CampaignEntity' }, type: 'meta' },
          },
          type: 'object',
        },
      },
      type: 'object',
    } as const),
    
    input: GraphType.getOrSet('campaignUpdateOneInput', {
      def: {
        campaignID: { type: 'ulid' },
        update: {
          def: {
            title: {
              def: { min: 3, max: 1000 },
              type: 'string',
              optional: true,
            },
            form: {
              def: {
                _kind: {
                  def: { '__o.proto__': 'String', value: 'FormerDefinition' },
                  defaultValue: 'FormerDefinition',
                  optional: true,
                  type: 'literal',
                },
                meta: {
                  def: { keyType: 'string', type: 'any' },
                  description:
                    'Any custom JSON data to be sent in the form answer.',
                  optional: true,
                  type: 'record',
                },
                rows: {
                  def: {
                    min: 1,
                    of: {
                      __isGraphType: true,
                      _optionalId: 'FormerRow',
                      touched: true,
                      __hidden: false,
                      beforeInitialize: [],
                      definition: {
                        def: {
                          _kind: {
                            def: {
                              '__o.proto__': 'String',
                              value: 'FormerRow',
                            },
                            defaultValue: 'FormerRow',
                            optional: true,
                            type: 'literal',
                          },
                          className: { type: 'string', optional: true },
                          cols: {
                            def: {
                              of: {
                                __isGraphType: true,
                                _optionalId: 'FormerColumn',
                                touched: true,
                                __hidden: false,
                                beforeInitialize: [null],
                                definition: {
                                  def: {
                                    _kind: {
                                      def: {
                                        '__o.proto__': 'String',
                                        value: 'FormerColumn',
                                      },
                                      defaultValue: 'FormerColumn',
                                      description:
                                        'used to pre-validate object type',
                                      optional: true,
                                      type: 'literal',
                                    },
                                    question: {
                                      type: 'string',
                                      optional: true,
                                    },
                                    required: {
                                      optional: true,
                                      type: 'boolean',
                                    },
                                    className: {
                                      type: 'string',
                                      optional: true,
                                    },
                                    colID: { def: { min: 1 }, type: 'string' },
                                    extraConfig: {
                                      def: { keyType: 'string', type: 'any' },
                                      description: 'Any extra configuration.',
                                      optional: true,
                                      type: 'record',
                                    },
                                    fieldProps: {
                                      def: { keyType: 'string', type: 'any' },
                                      description:
                                        'The props object expected by the component indicated in "componentUID". This object will be validated against the "propsDefinition" provided in the corresponding component register (see: FormerComponentRegister).',
                                      type: 'record',
                                    },
                                    inputName: {
                                      def: { min: 0 },
                                      description:
                                        'Name of the entry to be saved in form data.',
                                      type: 'string',
                                    },
                                    componentName: {
                                      def: [
                                        'Layout',
                                        'LoadableField',
                                        'Stepper',
                                        'Admin',
                                        'Hero',
                                        'Title',
                                        'CNPJTextField',
                                        'CPFTextField',
                                        'PhoneTextfield',
                                        'Datepicker',
                                        'Textfield',
                                        'Radio',
                                        'Select',
                                        'Checkbox',
                                        'AddressSelection',
                                      ],
                                      type: 'enum',
                                    },
                                    componentVersion: {
                                      def: {},
                                      defaultValue: '0.1.34',
                                      optional: true,
                                      type: 'string',
                                    },
                                    meta: {
                                      def: { keyType: 'string', type: 'any' },
                                      description:
                                        'Custom metadata to be sent in former answer.',
                                      optional: true,
                                      type: 'record',
                                    },
                                    validations: {
                                      description:
                                        'Validations to be used to validade input value',
                                      type: 'record',
                                      list: true,
                                      defaultValue: [],
                                      optional: true,
                                      def: { keyType: 'string', type: 'any' },
                                    },
                                    presentationOnly: {
                                      type: 'boolean',
                                      optional: true,
                                    },
                                    sizes: {
                                      def: [
                                        {
                                          def: {
                                            _kind: {
                                              def: {
                                                '__o.proto__': 'String',
                                                value: 'ColumnSizes',
                                              },
                                              defaultValue: 'ColumnSizes',
                                              optional: true,
                                              type: 'literal',
                                            },
                                            first: {
                                              def: [
                                                'xs',
                                                'sm',
                                                'md',
                                                'lg',
                                                'xl',
                                              ],
                                              optional: true,
                                              type: 'enum',
                                            },
                                            fluid: {
                                              type: 'boolean',
                                              optional: true,
                                            },
                                            last: {
                                              def: [
                                                'xs',
                                                'sm',
                                                'md',
                                                'lg',
                                                'xl',
                                              ],
                                              optional: true,
                                              type: 'enum',
                                            },
                                            lg: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            lgOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            md: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            mdOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            sm: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            smOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            xl: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            xlOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            xs: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            xsOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            __dschm__: {
                                              def: { id: null },
                                              type: 'meta',
                                            },
                                          },
                                          description:
                                            'Sizes of a Column in different screens. See: http://flexboxgrid.com/',
                                          type: 'object',
                                        },
                                        { type: 'undefined' },
                                      ],
                                      optional: true,
                                      type: 'union',
                                    },
                                    tagName: {
                                      def: {},
                                      description: 'HTML tag element to render',
                                      optional: true,
                                      type: 'string',
                                    },
                                    __dschm__: {
                                      def: { id: null },
                                      type: 'meta',
                                    },
                                  },
                                  type: 'object',
                                },
                              },
                            },
                            type: 'array',
                          },
                          rowID: { def: { min: 1 }, type: 'string' },
                          sizes: {
                            def: [
                              {
                                def: {
                                  around: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  between: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  bottom: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  center: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  end: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  middle: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  reverse: { type: 'boolean', optional: true },
                                  start: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  top: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  __dschm__: {
                                    def: { id: 'RowSizes' },
                                    type: 'meta',
                                  },
                                },
                                type: 'object',
                              },
                              { type: 'undefined' },
                            ],
                            optional: true,
                            type: 'union',
                          },
                          tagName: { type: 'string', optional: true },
                          __dschm__: { def: { id: 'FormerRow' }, type: 'meta' },
                        },
                        type: 'object',
                      },
                    },
                  },
                  type: 'array',
                },
                uid: {
                  def: { autoCreate: true },
                  description:
                    'Uniq identifier for this form, should be generated using the utility createUID(), otherwise will be autogenerated.',
                  optional: true,
                  type: 'ulid',
                },
                __dschm__: {
                  def: { id: 'campaignUpdateOneInput_update_form' },
                  type: 'meta',
                },
              },
              type: 'object',
              optional: true,
            },
            status: {
              def: ['PUBLISHED', 'DRAFT', 'REMOVED', 'PAUSED'],
              defaultValue: 'DRAFT',
              type: 'enum',
              optional: true,
            },
            requireLogin: {
              def: {},
              defaultValue: true,
              optional: true,
              type: 'boolean',
            },
            extraManagers: { type: 'ID', list: true, optional: true },
            meta: {
              def: { of: 'any' },
              hidden: true,
              optional: true,
              type: 'array',
            },
            version: { type: 'int', optional: true },
          },
          type: 'object',
        },
      },
      type: 'object',
    } as const),
    
    operation: {
      query:
        'mutation campaignUpdateOne($campaignUpdateOne_campaignID: ULID!, $campaignUpdateOne_update: campaignUpdateOneInput_updateInput!) {\n  campaignUpdateOne(\n    campaignID: $campaignUpdateOne_campaignID\n    update: $campaignUpdateOne_update\n  ) {\n    cursor\n    node {\n      createdAt\n      id\n      ulid\n      updatedAt\n      title\n      campaignID\n      form {\n        _kind\n        meta\n        rows {\n          _kind\n          className\n          cols {\n            _kind\n            question\n            required\n            className\n            colID\n            extraConfig\n            fieldProps\n            inputName\n            componentName\n            componentVersion\n            meta\n            validations\n            presentationOnly\n            sizes\n            tagName\n          }\n          rowID\n          sizes\n          tagName\n        }\n        uid\n      }\n      status\n      requireLogin\n      extraManagers\n      answersCount\n      userResponse {\n        createdAt\n        id\n        ulid\n        updatedAt\n        campaignID\n        response\n        version\n      }\n      version\n    }\n  }\n}\n',
      varNames: {
        campaignID: {
          comments: '',
          name: 'campaignID',
          type: 'ULID!',
          varName: 'campaignUpdateOne_campaignID',
        },
        update: {
          comments: '',
          name: 'update',
          type: 'campaignUpdateOneInput_updateInput!',
          varName: 'campaignUpdateOne_update',
        },
      },
    } as const,
  },
  
  campaignFindOne: {
    name: 'campaignFindOne',
    kind: 'query',
    payload: GraphType.getOrSet('CampaignEntityOptional', {
      def: {
        createdAt: { type: 'date' },
        id: { type: 'string' },
        ulid: { type: 'ulid' },
        updatedAt: { type: 'date' },
        title: { def: { min: 3, max: 1000 }, type: 'string' },
        campaignID: { def: { autoCreate: true }, type: 'ulid' },
        form: {
          def: {
            _kind: {
              def: { '__o.proto__': 'String', value: 'FormerDefinition' },
              defaultValue: 'FormerDefinition',
              optional: true,
              type: 'literal',
            },
            meta: {
              def: { keyType: 'string', type: 'any' },
              description:
                'Any custom JSON data to be sent in the form answer.',
              optional: true,
              type: 'record',
            },
            rows: {
              def: {
                min: 1,
                of: {
                  __isGraphType: true,
                  _optionalId: 'FormerRow',
                  touched: true,
                  __hidden: false,
                  beforeInitialize: [],
                  definition: {
                    def: {
                      _kind: {
                        def: { '__o.proto__': 'String', value: 'FormerRow' },
                        defaultValue: 'FormerRow',
                        optional: true,
                        type: 'literal',
                      },
                      className: { type: 'string', optional: true },
                      cols: {
                        def: {
                          of: {
                            __isGraphType: true,
                            _optionalId: 'FormerColumn',
                            touched: true,
                            __hidden: false,
                            beforeInitialize: [null],
                            definition: {
                              def: {
                                _kind: {
                                  def: {
                                    '__o.proto__': 'String',
                                    value: 'FormerColumn',
                                  },
                                  defaultValue: 'FormerColumn',
                                  description:
                                    'used to pre-validate object type',
                                  optional: true,
                                  type: 'literal',
                                },
                                question: { type: 'string', optional: true },
                                required: { optional: true, type: 'boolean' },
                                className: { type: 'string', optional: true },
                                colID: { def: { min: 1 }, type: 'string' },
                                extraConfig: {
                                  def: { keyType: 'string', type: 'any' },
                                  description: 'Any extra configuration.',
                                  optional: true,
                                  type: 'record',
                                },
                                fieldProps: {
                                  def: { keyType: 'string', type: 'any' },
                                  description:
                                    'The props object expected by the component indicated in "componentUID". This object will be validated against the "propsDefinition" provided in the corresponding component register (see: FormerComponentRegister).',
                                  type: 'record',
                                },
                                inputName: {
                                  def: { min: 0 },
                                  description:
                                    'Name of the entry to be saved in form data.',
                                  type: 'string',
                                },
                                componentName: {
                                  def: [
                                    'Layout',
                                    'LoadableField',
                                    'Stepper',
                                    'Admin',
                                    'Hero',
                                    'Title',
                                    'CNPJTextField',
                                    'CPFTextField',
                                    'PhoneTextfield',
                                    'Datepicker',
                                    'Textfield',
                                    'Radio',
                                    'Select',
                                    'Checkbox',
                                    'AddressSelection',
                                  ],
                                  type: 'enum',
                                },
                                componentVersion: {
                                  def: {},
                                  defaultValue: '0.1.34',
                                  optional: true,
                                  type: 'string',
                                },
                                meta: {
                                  def: { keyType: 'string', type: 'any' },
                                  description:
                                    'Custom metadata to be sent in former answer.',
                                  optional: true,
                                  type: 'record',
                                },
                                validations: {
                                  description:
                                    'Validations to be used to validade input value',
                                  type: 'record',
                                  list: true,
                                  defaultValue: [],
                                  optional: true,
                                  def: { keyType: 'string', type: 'any' },
                                },
                                presentationOnly: {
                                  type: 'boolean',
                                  optional: true,
                                },
                                sizes: {
                                  def: [
                                    {
                                      def: {
                                        _kind: {
                                          def: {
                                            '__o.proto__': 'String',
                                            value: 'ColumnSizes',
                                          },
                                          defaultValue: 'ColumnSizes',
                                          optional: true,
                                          type: 'literal',
                                        },
                                        first: {
                                          def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                          optional: true,
                                          type: 'enum',
                                        },
                                        fluid: {
                                          type: 'boolean',
                                          optional: true,
                                        },
                                        last: {
                                          def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                          optional: true,
                                          type: 'enum',
                                        },
                                        lg: {
                                          def: [
                                            { def: 1, type: 'literal' },
                                            { def: 2, type: 'literal' },
                                            { def: 3, type: 'literal' },
                                            { def: 4, type: 'literal' },
                                            { def: 5, type: 'literal' },
                                            { def: 6, type: 'literal' },
                                            { def: 7, type: 'literal' },
                                            { def: 8, type: 'literal' },
                                            { def: 9, type: 'literal' },
                                            { def: 10, type: 'literal' },
                                            { def: 11, type: 'literal' },
                                            { def: 12, type: 'literal' },
                                            { def: '1', type: 'literal' },
                                            { def: '2', type: 'literal' },
                                            { def: '3', type: 'literal' },
                                            { def: '4', type: 'literal' },
                                            { def: '5', type: 'literal' },
                                            { def: '6', type: 'literal' },
                                            { def: '7', type: 'literal' },
                                            { def: '8', type: 'literal' },
                                            { def: '9', type: 'literal' },
                                            { def: '10', type: 'literal' },
                                            { def: '11', type: 'literal' },
                                            { def: '12', type: 'literal' },
                                          ],
                                          optional: true,
                                          type: 'union',
                                        },
                                        lgOffset: {
                                          type: 'int',
                                          optional: true,
                                        },
                                        md: {
                                          def: [
                                            { def: 1, type: 'literal' },
                                            { def: 2, type: 'literal' },
                                            { def: 3, type: 'literal' },
                                            { def: 4, type: 'literal' },
                                            { def: 5, type: 'literal' },
                                            { def: 6, type: 'literal' },
                                            { def: 7, type: 'literal' },
                                            { def: 8, type: 'literal' },
                                            { def: 9, type: 'literal' },
                                            { def: 10, type: 'literal' },
                                            { def: 11, type: 'literal' },
                                            { def: 12, type: 'literal' },
                                            { def: '1', type: 'literal' },
                                            { def: '2', type: 'literal' },
                                            { def: '3', type: 'literal' },
                                            { def: '4', type: 'literal' },
                                            { def: '5', type: 'literal' },
                                            { def: '6', type: 'literal' },
                                            { def: '7', type: 'literal' },
                                            { def: '8', type: 'literal' },
                                            { def: '9', type: 'literal' },
                                            { def: '10', type: 'literal' },
                                            { def: '11', type: 'literal' },
                                            { def: '12', type: 'literal' },
                                          ],
                                          optional: true,
                                          type: 'union',
                                        },
                                        mdOffset: {
                                          type: 'int',
                                          optional: true,
                                        },
                                        sm: {
                                          def: [
                                            { def: 1, type: 'literal' },
                                            { def: 2, type: 'literal' },
                                            { def: 3, type: 'literal' },
                                            { def: 4, type: 'literal' },
                                            { def: 5, type: 'literal' },
                                            { def: 6, type: 'literal' },
                                            { def: 7, type: 'literal' },
                                            { def: 8, type: 'literal' },
                                            { def: 9, type: 'literal' },
                                            { def: 10, type: 'literal' },
                                            { def: 11, type: 'literal' },
                                            { def: 12, type: 'literal' },
                                            { def: '1', type: 'literal' },
                                            { def: '2', type: 'literal' },
                                            { def: '3', type: 'literal' },
                                            { def: '4', type: 'literal' },
                                            { def: '5', type: 'literal' },
                                            { def: '6', type: 'literal' },
                                            { def: '7', type: 'literal' },
                                            { def: '8', type: 'literal' },
                                            { def: '9', type: 'literal' },
                                            { def: '10', type: 'literal' },
                                            { def: '11', type: 'literal' },
                                            { def: '12', type: 'literal' },
                                          ],
                                          optional: true,
                                          type: 'union',
                                        },
                                        smOffset: {
                                          type: 'int',
                                          optional: true,
                                        },
                                        xl: {
                                          def: [
                                            { def: 1, type: 'literal' },
                                            { def: 2, type: 'literal' },
                                            { def: 3, type: 'literal' },
                                            { def: 4, type: 'literal' },
                                            { def: 5, type: 'literal' },
                                            { def: 6, type: 'literal' },
                                            { def: 7, type: 'literal' },
                                            { def: 8, type: 'literal' },
                                            { def: 9, type: 'literal' },
                                            { def: 10, type: 'literal' },
                                            { def: 11, type: 'literal' },
                                            { def: 12, type: 'literal' },
                                            { def: '1', type: 'literal' },
                                            { def: '2', type: 'literal' },
                                            { def: '3', type: 'literal' },
                                            { def: '4', type: 'literal' },
                                            { def: '5', type: 'literal' },
                                            { def: '6', type: 'literal' },
                                            { def: '7', type: 'literal' },
                                            { def: '8', type: 'literal' },
                                            { def: '9', type: 'literal' },
                                            { def: '10', type: 'literal' },
                                            { def: '11', type: 'literal' },
                                            { def: '12', type: 'literal' },
                                          ],
                                          optional: true,
                                          type: 'union',
                                        },
                                        xlOffset: {
                                          type: 'int',
                                          optional: true,
                                        },
                                        xs: {
                                          def: [
                                            { def: 1, type: 'literal' },
                                            { def: 2, type: 'literal' },
                                            { def: 3, type: 'literal' },
                                            { def: 4, type: 'literal' },
                                            { def: 5, type: 'literal' },
                                            { def: 6, type: 'literal' },
                                            { def: 7, type: 'literal' },
                                            { def: 8, type: 'literal' },
                                            { def: 9, type: 'literal' },
                                            { def: 10, type: 'literal' },
                                            { def: 11, type: 'literal' },
                                            { def: 12, type: 'literal' },
                                            { def: '1', type: 'literal' },
                                            { def: '2', type: 'literal' },
                                            { def: '3', type: 'literal' },
                                            { def: '4', type: 'literal' },
                                            { def: '5', type: 'literal' },
                                            { def: '6', type: 'literal' },
                                            { def: '7', type: 'literal' },
                                            { def: '8', type: 'literal' },
                                            { def: '9', type: 'literal' },
                                            { def: '10', type: 'literal' },
                                            { def: '11', type: 'literal' },
                                            { def: '12', type: 'literal' },
                                          ],
                                          optional: true,
                                          type: 'union',
                                        },
                                        xsOffset: {
                                          type: 'int',
                                          optional: true,
                                        },
                                        __dschm__: {
                                          def: { id: null },
                                          type: 'meta',
                                        },
                                      },
                                      description:
                                        'Sizes of a Column in different screens. See: http://flexboxgrid.com/',
                                      type: 'object',
                                    },
                                    { type: 'undefined' },
                                  ],
                                  optional: true,
                                  type: 'union',
                                },
                                tagName: {
                                  def: {},
                                  description: 'HTML tag element to render',
                                  optional: true,
                                  type: 'string',
                                },
                                __dschm__: { def: { id: null }, type: 'meta' },
                              },
                              type: 'object',
                            },
                          },
                        },
                        type: 'array',
                      },
                      rowID: { def: { min: 1 }, type: 'string' },
                      sizes: {
                        def: [
                          {
                            def: {
                              around: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              between: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              bottom: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              center: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              end: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              middle: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              reverse: { type: 'boolean', optional: true },
                              start: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              top: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              __dschm__: {
                                def: { id: 'RowSizes' },
                                type: 'meta',
                              },
                            },
                            type: 'object',
                          },
                          { type: 'undefined' },
                        ],
                        optional: true,
                        type: 'union',
                      },
                      tagName: { type: 'string', optional: true },
                      __dschm__: { def: { id: 'FormerRow' }, type: 'meta' },
                    },
                    type: 'object',
                  },
                },
              },
              type: 'array',
            },
            uid: {
              def: { autoCreate: true },
              description:
                'Uniq identifier for this form, should be generated using the utility createUID(), otherwise will be autogenerated.',
              optional: true,
              type: 'ulid',
            },
            __dschm__: { def: { id: 'FormerDefinition' }, type: 'meta' },
          },
          type: 'object',
        },
        status: {
          def: ['PUBLISHED', 'DRAFT', 'REMOVED', 'PAUSED'],
          defaultValue: 'DRAFT',
          type: 'enum',
        },
        requireLogin: {
          def: {},
          defaultValue: true,
          optional: true,
          type: 'boolean',
        },
        extraManagers: { type: 'ID', list: true, optional: true },
        answersCount: { type: 'int', optional: true },
        meta: {
          def: { of: 'any' },
          hidden: true,
          optional: true,
          type: 'array',
        },
        userResponse: {
          def: {
            createdAt: { type: 'date' },
            id: { type: 'string' },
            ulid: { type: 'ulid' },
            updatedAt: { type: 'date' },
            campaignID: { def: {}, description: 'Campaign ULID', type: 'ID' },
            response: {
              type: 'record',
              def: { keyType: 'string', type: 'any' },
            },
            meta: {
              def: { of: 'any' },
              hidden: true,
              optional: true,
              type: 'array',
            },
            version: { type: 'int', optional: true },
            __dschm__: { def: { id: 'AnswerEntity' }, type: 'meta' },
          },
          optional: true,
          type: 'object',
        },
        version: { type: 'int', optional: true },
      },
      optional: true,
      type: 'object',
    } as const),
    
    input: GraphType.getOrSet('campaignFindOneInput', {
      def: {
        id: { optional: true, type: 'ID' },
        campaignID: { def: { autoCreate: true }, type: 'ulid', optional: true },
        createdBy: { optional: true, type: 'string', hidden: true },
      },
      type: 'object',
    } as const),
    
    operation: {
      query:
        'query campaignFindOne($campaignFindOne_id: ID, $campaignFindOne_campaignID: ULID) {\n  campaignFindOne(\n    id: $campaignFindOne_id\n    campaignID: $campaignFindOne_campaignID\n  ) {\n    createdAt\n    id\n    ulid\n    updatedAt\n    title\n    campaignID\n    form {\n      _kind\n      meta\n      rows {\n        _kind\n        className\n        cols {\n          _kind\n          question\n          required\n          className\n          colID\n          extraConfig\n          fieldProps\n          inputName\n          componentName\n          componentVersion\n          meta\n          validations\n          presentationOnly\n          sizes\n          tagName\n        }\n        rowID\n        sizes\n        tagName\n      }\n      uid\n    }\n    status\n    requireLogin\n    extraManagers\n    answersCount\n    userResponse {\n      createdAt\n      id\n      ulid\n      updatedAt\n      campaignID\n      response\n      version\n    }\n    version\n  }\n}\n',
      varNames: {
        id: {
          comments: '',
          name: 'id',
          type: 'ID',
          varName: 'campaignFindOne_id',
        },
        campaignID: {
          comments: '',
          name: 'campaignID',
          type: 'ULID',
          varName: 'campaignFindOne_campaignID',
        },
      },
    } as const,
  },
  
  campaignCreateOne: {
    name: 'campaignCreateOne',
    kind: 'mutation',
    payload: GraphType.getOrSet('Campaign_Edge', {
      def: {
        cursor: { type: 'string' },
        node: {
          def: {
            createdAt: { type: 'date' },
            id: { type: 'string' },
            ulid: { type: 'ulid' },
            updatedAt: { type: 'date' },
            title: { def: { min: 3, max: 1000 }, type: 'string' },
            campaignID: { def: { autoCreate: true }, type: 'ulid' },
            form: {
              def: {
                _kind: {
                  def: { '__o.proto__': 'String', value: 'FormerDefinition' },
                  defaultValue: 'FormerDefinition',
                  optional: true,
                  type: 'literal',
                },
                meta: {
                  def: { keyType: 'string', type: 'any' },
                  description:
                    'Any custom JSON data to be sent in the form answer.',
                  optional: true,
                  type: 'record',
                },
                rows: {
                  def: {
                    min: 1,
                    of: {
                      __isGraphType: true,
                      _optionalId: 'FormerRow',
                      touched: true,
                      __hidden: false,
                      beforeInitialize: [],
                      definition: {
                        def: {
                          _kind: {
                            def: {
                              '__o.proto__': 'String',
                              value: 'FormerRow',
                            },
                            defaultValue: 'FormerRow',
                            optional: true,
                            type: 'literal',
                          },
                          className: { type: 'string', optional: true },
                          cols: {
                            def: {
                              of: {
                                __isGraphType: true,
                                _optionalId: 'FormerColumn',
                                touched: true,
                                __hidden: false,
                                beforeInitialize: [null],
                                definition: {
                                  def: {
                                    _kind: {
                                      def: {
                                        '__o.proto__': 'String',
                                        value: 'FormerColumn',
                                      },
                                      defaultValue: 'FormerColumn',
                                      description:
                                        'used to pre-validate object type',
                                      optional: true,
                                      type: 'literal',
                                    },
                                    question: {
                                      type: 'string',
                                      optional: true,
                                    },
                                    required: {
                                      optional: true,
                                      type: 'boolean',
                                    },
                                    className: {
                                      type: 'string',
                                      optional: true,
                                    },
                                    colID: { def: { min: 1 }, type: 'string' },
                                    extraConfig: {
                                      def: { keyType: 'string', type: 'any' },
                                      description: 'Any extra configuration.',
                                      optional: true,
                                      type: 'record',
                                    },
                                    fieldProps: {
                                      def: { keyType: 'string', type: 'any' },
                                      description:
                                        'The props object expected by the component indicated in "componentUID". This object will be validated against the "propsDefinition" provided in the corresponding component register (see: FormerComponentRegister).',
                                      type: 'record',
                                    },
                                    inputName: {
                                      def: { min: 0 },
                                      description:
                                        'Name of the entry to be saved in form data.',
                                      type: 'string',
                                    },
                                    componentName: {
                                      def: [
                                        'Layout',
                                        'LoadableField',
                                        'Stepper',
                                        'Admin',
                                        'Hero',
                                        'Title',
                                        'CNPJTextField',
                                        'CPFTextField',
                                        'PhoneTextfield',
                                        'Datepicker',
                                        'Textfield',
                                        'Radio',
                                        'Select',
                                        'Checkbox',
                                        'AddressSelection',
                                      ],
                                      type: 'enum',
                                    },
                                    componentVersion: {
                                      def: {},
                                      defaultValue: '0.1.34',
                                      optional: true,
                                      type: 'string',
                                    },
                                    meta: {
                                      def: { keyType: 'string', type: 'any' },
                                      description:
                                        'Custom metadata to be sent in former answer.',
                                      optional: true,
                                      type: 'record',
                                    },
                                    validations: {
                                      description:
                                        'Validations to be used to validade input value',
                                      type: 'record',
                                      list: true,
                                      defaultValue: [],
                                      optional: true,
                                      def: { keyType: 'string', type: 'any' },
                                    },
                                    presentationOnly: {
                                      type: 'boolean',
                                      optional: true,
                                    },
                                    sizes: {
                                      def: [
                                        {
                                          def: {
                                            _kind: {
                                              def: {
                                                '__o.proto__': 'String',
                                                value: 'ColumnSizes',
                                              },
                                              defaultValue: 'ColumnSizes',
                                              optional: true,
                                              type: 'literal',
                                            },
                                            first: {
                                              def: [
                                                'xs',
                                                'sm',
                                                'md',
                                                'lg',
                                                'xl',
                                              ],
                                              optional: true,
                                              type: 'enum',
                                            },
                                            fluid: {
                                              type: 'boolean',
                                              optional: true,
                                            },
                                            last: {
                                              def: [
                                                'xs',
                                                'sm',
                                                'md',
                                                'lg',
                                                'xl',
                                              ],
                                              optional: true,
                                              type: 'enum',
                                            },
                                            lg: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            lgOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            md: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            mdOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            sm: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            smOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            xl: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            xlOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            xs: {
                                              def: [
                                                { def: 1, type: 'literal' },
                                                { def: 2, type: 'literal' },
                                                { def: 3, type: 'literal' },
                                                { def: 4, type: 'literal' },
                                                { def: 5, type: 'literal' },
                                                { def: 6, type: 'literal' },
                                                { def: 7, type: 'literal' },
                                                { def: 8, type: 'literal' },
                                                { def: 9, type: 'literal' },
                                                { def: 10, type: 'literal' },
                                                { def: 11, type: 'literal' },
                                                { def: 12, type: 'literal' },
                                                { def: '1', type: 'literal' },
                                                { def: '2', type: 'literal' },
                                                { def: '3', type: 'literal' },
                                                { def: '4', type: 'literal' },
                                                { def: '5', type: 'literal' },
                                                { def: '6', type: 'literal' },
                                                { def: '7', type: 'literal' },
                                                { def: '8', type: 'literal' },
                                                { def: '9', type: 'literal' },
                                                { def: '10', type: 'literal' },
                                                { def: '11', type: 'literal' },
                                                { def: '12', type: 'literal' },
                                              ],
                                              optional: true,
                                              type: 'union',
                                            },
                                            xsOffset: {
                                              type: 'int',
                                              optional: true,
                                            },
                                            __dschm__: {
                                              def: { id: null },
                                              type: 'meta',
                                            },
                                          },
                                          description:
                                            'Sizes of a Column in different screens. See: http://flexboxgrid.com/',
                                          type: 'object',
                                        },
                                        { type: 'undefined' },
                                      ],
                                      optional: true,
                                      type: 'union',
                                    },
                                    tagName: {
                                      def: {},
                                      description: 'HTML tag element to render',
                                      optional: true,
                                      type: 'string',
                                    },
                                    __dschm__: {
                                      def: { id: 'FormerRow_cols' },
                                      type: 'meta',
                                    },
                                  },
                                  type: 'object',
                                },
                              },
                            },
                            type: 'array',
                          },
                          rowID: { def: { min: 1 }, type: 'string' },
                          sizes: {
                            def: [
                              {
                                def: {
                                  around: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  between: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  bottom: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  center: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  end: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  middle: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  reverse: { type: 'boolean', optional: true },
                                  start: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  top: {
                                    def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                    optional: true,
                                    type: 'enum',
                                  },
                                  __dschm__: {
                                    def: { id: 'RowSizes' },
                                    type: 'meta',
                                  },
                                },
                                type: 'object',
                              },
                              { type: 'undefined' },
                            ],
                            optional: true,
                            type: 'union',
                          },
                          tagName: { type: 'string', optional: true },
                          __dschm__: { def: { id: 'FormerRow' }, type: 'meta' },
                        },
                        type: 'object',
                      },
                    },
                  },
                  type: 'array',
                },
                uid: {
                  def: { autoCreate: true },
                  description:
                    'Uniq identifier for this form, should be generated using the utility createUID(), otherwise will be autogenerated.',
                  optional: true,
                  type: 'ulid',
                },
                __dschm__: { def: { id: 'FormerDefinition' }, type: 'meta' },
              },
              type: 'object',
            },
            status: {
              def: ['PUBLISHED', 'DRAFT', 'REMOVED', 'PAUSED'],
              defaultValue: 'DRAFT',
              type: 'enum',
            },
            requireLogin: {
              def: {},
              defaultValue: true,
              optional: true,
              type: 'boolean',
            },
            extraManagers: { type: 'ID', list: true, optional: true },
            answersCount: { type: 'int', optional: true },
            meta: {
              def: { of: 'any' },
              hidden: true,
              optional: true,
              type: 'array',
            },
            userResponse: {
              def: {
                createdAt: { type: 'date' },
                id: { type: 'string' },
                ulid: { type: 'ulid' },
                updatedAt: { type: 'date' },
                campaignID: {
                  def: {},
                  description: 'Campaign ULID',
                  type: 'ID',
                },
                response: {
                  type: 'record',
                  def: { keyType: 'string', type: 'any' },
                },
                meta: {
                  def: { of: 'any' },
                  hidden: true,
                  optional: true,
                  type: 'array',
                },
                version: { type: 'int', optional: true },
                __dschm__: { def: { id: 'AnswerEntity' }, type: 'meta' },
              },
              optional: true,
              type: 'object',
            },
            version: { type: 'int', optional: true },
            __dschm__: { def: { id: 'CampaignEntity' }, type: 'meta' },
          },
          type: 'object',
        },
      },
      type: 'object',
    } as const),
    
    input: GraphType.getOrSet('campaignCreateOneInput', {
      def: {
        title: { def: { min: 3, max: 1000 }, type: 'string' },
        campaignID: { def: { autoCreate: true }, type: 'ulid', optional: true },
        form: {
          def: {
            _kind: {
              def: { '__o.proto__': 'String', value: 'FormerDefinition' },
              defaultValue: 'FormerDefinition',
              optional: true,
              type: 'literal',
            },
            meta: {
              def: { keyType: 'string', type: 'any' },
              description:
                'Any custom JSON data to be sent in the form answer.',
              optional: true,
              type: 'record',
            },
            rows: {
              def: {
                min: 1,
                of: {
                  __isGraphType: true,
                  _optionalId: 'FormerRow',
                  touched: true,
                  __hidden: false,
                  beforeInitialize: [],
                  definition: {
                    def: {
                      _kind: {
                        def: { '__o.proto__': 'String', value: 'FormerRow' },
                        defaultValue: 'FormerRow',
                        optional: true,
                        type: 'literal',
                      },
                      className: { type: 'string', optional: true },
                      cols: {
                        def: {
                          of: {
                            __isGraphType: true,
                            _optionalId: 'FormerColumn',
                            touched: true,
                            __hidden: false,
                            beforeInitialize: [null],
                            definition: {
                              def: {
                                _kind: {
                                  def: {
                                    '__o.proto__': 'String',
                                    value: 'FormerColumn',
                                  },
                                  defaultValue: 'FormerColumn',
                                  description:
                                    'used to pre-validate object type',
                                  optional: true,
                                  type: 'literal',
                                },
                                question: { type: 'string', optional: true },
                                required: { optional: true, type: 'boolean' },
                                className: { type: 'string', optional: true },
                                colID: { def: { min: 1 }, type: 'string' },
                                extraConfig: {
                                  def: { keyType: 'string', type: 'any' },
                                  description: 'Any extra configuration.',
                                  optional: true,
                                  type: 'record',
                                },
                                fieldProps: {
                                  def: { keyType: 'string', type: 'any' },
                                  description:
                                    'The props object expected by the component indicated in "componentUID". This object will be validated against the "propsDefinition" provided in the corresponding component register (see: FormerComponentRegister).',
                                  type: 'record',
                                },
                                inputName: {
                                  def: { min: 0 },
                                  description:
                                    'Name of the entry to be saved in form data.',
                                  type: 'string',
                                },
                                componentName: {
                                  def: [
                                    'Layout',
                                    'LoadableField',
                                    'Stepper',
                                    'Admin',
                                    'Hero',
                                    'Title',
                                    'CNPJTextField',
                                    'CPFTextField',
                                    'PhoneTextfield',
                                    'Datepicker',
                                    'Textfield',
                                    'Radio',
                                    'Select',
                                    'Checkbox',
                                    'AddressSelection',
                                  ],
                                  type: 'enum',
                                },
                                componentVersion: {
                                  def: {},
                                  defaultValue: '0.1.34',
                                  optional: true,
                                  type: 'string',
                                },
                                meta: {
                                  def: { keyType: 'string', type: 'any' },
                                  description:
                                    'Custom metadata to be sent in former answer.',
                                  optional: true,
                                  type: 'record',
                                },
                                validations: {
                                  description:
                                    'Validations to be used to validade input value',
                                  type: 'record',
                                  list: true,
                                  defaultValue: [],
                                  optional: true,
                                  def: { keyType: 'string', type: 'any' },
                                },
                                presentationOnly: {
                                  type: 'boolean',
                                  optional: true,
                                },
                                sizes: {
                                  def: [
                                    {
                                      def: {
                                        _kind: {
                                          def: {
                                            '__o.proto__': 'String',
                                            value: 'ColumnSizes',
                                          },
                                          defaultValue: 'ColumnSizes',
                                          optional: true,
                                          type: 'literal',
                                        },
                                        first: {
                                          def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                          optional: true,
                                          type: 'enum',
                                        },
                                        fluid: {
                                          type: 'boolean',
                                          optional: true,
                                        },
                                        last: {
                                          def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                          optional: true,
                                          type: 'enum',
                                        },
                                        lg: {
                                          def: [
                                            { def: 1, type: 'literal' },
                                            { def: 2, type: 'literal' },
                                            { def: 3, type: 'literal' },
                                            { def: 4, type: 'literal' },
                                            { def: 5, type: 'literal' },
                                            { def: 6, type: 'literal' },
                                            { def: 7, type: 'literal' },
                                            { def: 8, type: 'literal' },
                                            { def: 9, type: 'literal' },
                                            { def: 10, type: 'literal' },
                                            { def: 11, type: 'literal' },
                                            { def: 12, type: 'literal' },
                                            { def: '1', type: 'literal' },
                                            { def: '2', type: 'literal' },
                                            { def: '3', type: 'literal' },
                                            { def: '4', type: 'literal' },
                                            { def: '5', type: 'literal' },
                                            { def: '6', type: 'literal' },
                                            { def: '7', type: 'literal' },
                                            { def: '8', type: 'literal' },
                                            { def: '9', type: 'literal' },
                                            { def: '10', type: 'literal' },
                                            { def: '11', type: 'literal' },
                                            { def: '12', type: 'literal' },
                                          ],
                                          optional: true,
                                          type: 'union',
                                        },
                                        lgOffset: {
                                          type: 'int',
                                          optional: true,
                                        },
                                        md: {
                                          def: [
                                            { def: 1, type: 'literal' },
                                            { def: 2, type: 'literal' },
                                            { def: 3, type: 'literal' },
                                            { def: 4, type: 'literal' },
                                            { def: 5, type: 'literal' },
                                            { def: 6, type: 'literal' },
                                            { def: 7, type: 'literal' },
                                            { def: 8, type: 'literal' },
                                            { def: 9, type: 'literal' },
                                            { def: 10, type: 'literal' },
                                            { def: 11, type: 'literal' },
                                            { def: 12, type: 'literal' },
                                            { def: '1', type: 'literal' },
                                            { def: '2', type: 'literal' },
                                            { def: '3', type: 'literal' },
                                            { def: '4', type: 'literal' },
                                            { def: '5', type: 'literal' },
                                            { def: '6', type: 'literal' },
                                            { def: '7', type: 'literal' },
                                            { def: '8', type: 'literal' },
                                            { def: '9', type: 'literal' },
                                            { def: '10', type: 'literal' },
                                            { def: '11', type: 'literal' },
                                            { def: '12', type: 'literal' },
                                          ],
                                          optional: true,
                                          type: 'union',
                                        },
                                        mdOffset: {
                                          type: 'int',
                                          optional: true,
                                        },
                                        sm: {
                                          def: [
                                            { def: 1, type: 'literal' },
                                            { def: 2, type: 'literal' },
                                            { def: 3, type: 'literal' },
                                            { def: 4, type: 'literal' },
                                            { def: 5, type: 'literal' },
                                            { def: 6, type: 'literal' },
                                            { def: 7, type: 'literal' },
                                            { def: 8, type: 'literal' },
                                            { def: 9, type: 'literal' },
                                            { def: 10, type: 'literal' },
                                            { def: 11, type: 'literal' },
                                            { def: 12, type: 'literal' },
                                            { def: '1', type: 'literal' },
                                            { def: '2', type: 'literal' },
                                            { def: '3', type: 'literal' },
                                            { def: '4', type: 'literal' },
                                            { def: '5', type: 'literal' },
                                            { def: '6', type: 'literal' },
                                            { def: '7', type: 'literal' },
                                            { def: '8', type: 'literal' },
                                            { def: '9', type: 'literal' },
                                            { def: '10', type: 'literal' },
                                            { def: '11', type: 'literal' },
                                            { def: '12', type: 'literal' },
                                          ],
                                          optional: true,
                                          type: 'union',
                                        },
                                        smOffset: {
                                          type: 'int',
                                          optional: true,
                                        },
                                        xl: {
                                          def: [
                                            { def: 1, type: 'literal' },
                                            { def: 2, type: 'literal' },
                                            { def: 3, type: 'literal' },
                                            { def: 4, type: 'literal' },
                                            { def: 5, type: 'literal' },
                                            { def: 6, type: 'literal' },
                                            { def: 7, type: 'literal' },
                                            { def: 8, type: 'literal' },
                                            { def: 9, type: 'literal' },
                                            { def: 10, type: 'literal' },
                                            { def: 11, type: 'literal' },
                                            { def: 12, type: 'literal' },
                                            { def: '1', type: 'literal' },
                                            { def: '2', type: 'literal' },
                                            { def: '3', type: 'literal' },
                                            { def: '4', type: 'literal' },
                                            { def: '5', type: 'literal' },
                                            { def: '6', type: 'literal' },
                                            { def: '7', type: 'literal' },
                                            { def: '8', type: 'literal' },
                                            { def: '9', type: 'literal' },
                                            { def: '10', type: 'literal' },
                                            { def: '11', type: 'literal' },
                                            { def: '12', type: 'literal' },
                                          ],
                                          optional: true,
                                          type: 'union',
                                        },
                                        xlOffset: {
                                          type: 'int',
                                          optional: true,
                                        },
                                        xs: {
                                          def: [
                                            { def: 1, type: 'literal' },
                                            { def: 2, type: 'literal' },
                                            { def: 3, type: 'literal' },
                                            { def: 4, type: 'literal' },
                                            { def: 5, type: 'literal' },
                                            { def: 6, type: 'literal' },
                                            { def: 7, type: 'literal' },
                                            { def: 8, type: 'literal' },
                                            { def: 9, type: 'literal' },
                                            { def: 10, type: 'literal' },
                                            { def: 11, type: 'literal' },
                                            { def: 12, type: 'literal' },
                                            { def: '1', type: 'literal' },
                                            { def: '2', type: 'literal' },
                                            { def: '3', type: 'literal' },
                                            { def: '4', type: 'literal' },
                                            { def: '5', type: 'literal' },
                                            { def: '6', type: 'literal' },
                                            { def: '7', type: 'literal' },
                                            { def: '8', type: 'literal' },
                                            { def: '9', type: 'literal' },
                                            { def: '10', type: 'literal' },
                                            { def: '11', type: 'literal' },
                                            { def: '12', type: 'literal' },
                                          ],
                                          optional: true,
                                          type: 'union',
                                        },
                                        xsOffset: {
                                          type: 'int',
                                          optional: true,
                                        },
                                        __dschm__: {
                                          def: { id: null },
                                          type: 'meta',
                                        },
                                      },
                                      description:
                                        'Sizes of a Column in different screens. See: http://flexboxgrid.com/',
                                      type: 'object',
                                    },
                                    { type: 'undefined' },
                                  ],
                                  optional: true,
                                  type: 'union',
                                },
                                tagName: {
                                  def: {},
                                  description: 'HTML tag element to render',
                                  optional: true,
                                  type: 'string',
                                },
                                __dschm__: { def: { id: null }, type: 'meta' },
                              },
                              type: 'object',
                            },
                          },
                        },
                        type: 'array',
                      },
                      rowID: { def: { min: 1 }, type: 'string' },
                      sizes: {
                        def: [
                          {
                            def: {
                              around: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              between: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              bottom: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              center: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              end: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              middle: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              reverse: { type: 'boolean', optional: true },
                              start: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              top: {
                                def: ['xs', 'sm', 'md', 'lg', 'xl'],
                                optional: true,
                                type: 'enum',
                              },
                              __dschm__: {
                                def: { id: 'RowSizes' },
                                type: 'meta',
                              },
                            },
                            type: 'object',
                          },
                          { type: 'undefined' },
                        ],
                        optional: true,
                        type: 'union',
                      },
                      tagName: { type: 'string', optional: true },
                      __dschm__: { def: { id: 'FormerRow' }, type: 'meta' },
                    },
                    type: 'object',
                  },
                },
              },
              type: 'array',
            },
            uid: {
              def: { autoCreate: true },
              description:
                'Uniq identifier for this form, should be generated using the utility createUID(), otherwise will be autogenerated.',
              optional: true,
              type: 'ulid',
            },
            __dschm__: {
              def: { id: 'campaignCreateOneInput_form' },
              type: 'meta',
            },
          },
          type: 'object',
        },
        status: { type: 'string', optional: true },
        requireLogin: {
          def: {},
          defaultValue: true,
          optional: true,
          type: 'boolean',
        },
        extraManagers: { type: 'ID', list: true, optional: true },
        answersCount: {
          def: {},
          defaultValue: 0,
          hidden: true,
          optional: true,
          type: 'int',
        },
        meta: {
          def: { of: 'any' },
          hidden: true,
          optional: true,
          type: 'array',
        },
      },
      type: 'object',
    } as const),
    
    operation: {
      query:
        'mutation campaignCreateOne($campaignCreateOne_title: String!, $campaignCreateOne_campaignID: ULID, $campaignCreateOne_form: campaignCreateOneInput_formInput!, $campaignCreateOne_status: String, $campaignCreateOne_requireLogin: Boolean = true, $campaignCreateOne_extraManagers: [ID]) {\n  campaignCreateOne(\n    title: $campaignCreateOne_title\n    campaignID: $campaignCreateOne_campaignID\n    form: $campaignCreateOne_form\n    status: $campaignCreateOne_status\n    requireLogin: $campaignCreateOne_requireLogin\n    extraManagers: $campaignCreateOne_extraManagers\n  ) {\n    cursor\n    node {\n      createdAt\n      id\n      ulid\n      updatedAt\n      title\n      campaignID\n      form {\n        _kind\n        meta\n        rows {\n          _kind\n          className\n          cols {\n            _kind\n            question\n            required\n            className\n            colID\n            extraConfig\n            fieldProps\n            inputName\n            componentName\n            componentVersion\n            meta\n            validations\n            presentationOnly\n            sizes\n            tagName\n          }\n          rowID\n          sizes\n          tagName\n        }\n        uid\n      }\n      status\n      requireLogin\n      extraManagers\n      answersCount\n      userResponse {\n        createdAt\n        id\n        ulid\n        updatedAt\n        campaignID\n        response\n        version\n      }\n      version\n    }\n  }\n}\n',
      varNames: {
        title: {
          comments: '',
          name: 'title',
          type: 'String!',
          varName: 'campaignCreateOne_title',
        },
        campaignID: {
          comments: '',
          name: 'campaignID',
          type: 'ULID',
          varName: 'campaignCreateOne_campaignID',
        },
        form: {
          comments: '',
          name: 'form',
          type: 'campaignCreateOneInput_formInput!',
          varName: 'campaignCreateOne_form',
        },
        status: {
          comments: '',
          name: 'status',
          type: 'String',
          varName: 'campaignCreateOne_status',
        },
        requireLogin: {
          comments: '',
          defaultValue: 'true',
          name: 'requireLogin',
          type: 'Boolean',
          varName: 'campaignCreateOne_requireLogin',
        },
        extraManagers: {
          comments: '',
          name: 'extraManagers',
          type: '[ID]',
          varName: 'campaignCreateOne_extraManagers',
        },
      },
    } as const,
  },
  
  answerCreateOne: {
    name: 'answerCreateOne',
    kind: 'mutation',
    payload: GraphType.getOrSet('Answer_Edge', {
      def: {
        cursor: { type: 'string' },
        node: {
          def: {
            createdAt: { type: 'date' },
            id: { type: 'string' },
            ulid: { type: 'ulid' },
            updatedAt: { type: 'date' },
            campaignID: { def: {}, description: 'Campaign ULID', type: 'ID' },
            response: {
              type: 'record',
              def: { keyType: 'string', type: 'any' },
            },
            meta: {
              def: { of: 'any' },
              hidden: true,
              optional: true,
              type: 'array',
            },
            version: { type: 'int', optional: true },
            __dschm__: { def: { id: 'AnswerEntity' }, type: 'meta' },
          },
          type: 'object',
        },
      },
      type: 'object',
    } as const),
    
    input: GraphType.getOrSet('answerCreateOneInput', {
      def: {
        campaignID: { def: {}, description: 'Campaign ULID', type: 'ID' },
        response: { type: 'record', def: { keyType: 'string', type: 'any' } },
        meta: {
          def: { of: 'any' },
          hidden: true,
          optional: true,
          type: 'array',
        },
      },
      type: 'object',
    } as const),
    
    operation: {
      query:
        'mutation answerCreateOne($answerCreateOne_campaignID: ID!, $answerCreateOne_response: answerCreateOneInput_response!) {\n  answerCreateOne(\n    campaignID: $answerCreateOne_campaignID\n    response: $answerCreateOne_response\n  ) {\n    cursor\n    node {\n      createdAt\n      id\n      ulid\n      updatedAt\n      campaignID\n      response\n      version\n    }\n  }\n}\n',
      varNames: {
        campaignID: {
          comments: '\n#Campaign ULID\n',
          name: 'campaignID',
          type: 'ID!',
          varName: 'answerCreateOne_campaignID',
        },
        response: {
          comments: '',
          name: 'response',
          type: 'answerCreateOneInput_response!',
          varName: 'answerCreateOne_response',
        },
      },
    } as const,
  },
  
  userAddressesFindMany: {
    name: 'userAddressesFindMany',
    kind: 'query',
    payload: GraphType.getOrSet('AddressList', {
      def: {
        of: {
          __isGraphType: true,
          _optionalId: 'Address',
          touched: true,
          __hidden: false,
          beforeInitialize: [],
          definition: {
            def: {
              id: { type: 'float', optional: true },
              user_id: { type: 'float', optional: true },
              location_id: { type: 'float', optional: true },
              contact: { type: 'string', optional: true },
              phone: { type: 'string', optional: true },
              address_line: { type: 'string', optional: true },
              floor: { type: 'any', optional: true },
              apartment: { type: 'string', optional: true },
              street_number: { type: 'string', optional: true },
              street_name: { type: 'string', optional: true },
              zip_code: { type: 'string', optional: true },
              city: {
                def: {
                  id: { type: 'string', optional: true },
                  name: { type: 'string', optional: true },
                  __dschm__: { def: { id: 'AddressLocale' }, type: 'meta' },
                },
                optional: true,
                type: 'object',
              },
              state: {
                def: {
                  id: { type: 'string', optional: true },
                  name: { type: 'string', optional: true },
                  __dschm__: { def: { id: 'AddressLocale' }, type: 'meta' },
                },
                optional: true,
                type: 'object',
              },
              country: {
                def: {
                  id: { type: 'string', optional: true },
                  name: { type: 'string', optional: true },
                  __dschm__: { def: { id: 'AddressLocale' }, type: 'meta' },
                },
                optional: true,
                type: 'object',
              },
              neighborhood: {
                def: {
                  id: { type: 'string', optional: true },
                  name: { type: 'string', optional: true },
                  __dschm__: { def: { id: 'AddressLocale' }, type: 'meta' },
                },
                optional: true,
                type: 'object',
              },
              municipality: {
                def: {
                  id: { type: 'string', optional: true },
                  name: { type: 'string', optional: true },
                  __dschm__: { def: { id: 'AddressLocale' }, type: 'meta' },
                },
                optional: true,
                type: 'object',
              },
              search_location: {
                def: {
                  state: {
                    def: {
                      id: { type: 'string', optional: true },
                      name: { type: 'string', optional: true },
                      __dschm__: { def: { id: 'AddressLocale' }, type: 'meta' },
                    },
                    optional: true,
                    type: 'object',
                  },
                  city: {
                    def: {
                      id: { type: 'string', optional: true },
                      name: { type: 'string', optional: true },
                      __dschm__: { def: { id: 'AddressLocale' }, type: 'meta' },
                    },
                    optional: true,
                    type: 'object',
                  },
                  neighborhood: {
                    def: {
                      id: { type: 'string', optional: true },
                      name: { type: 'string', optional: true },
                      __dschm__: { def: { id: 'AddressLocale' }, type: 'meta' },
                    },
                    optional: true,
                    type: 'object',
                  },
                  __dschm__: { def: { id: 'SearchLocation' }, type: 'meta' },
                },
                optional: true,
                type: 'object',
              },
              types: { type: 'string', list: true, optional: true },
              comment: { type: 'string', optional: true },
              between: { type: 'any', optional: true },
              references: { type: 'any', optional: true },
              aditional_info: { type: 'string', optional: true },
              geolocation_type: { type: 'string', optional: true },
              geolocation_last_updated: { type: 'any', optional: true },
              geolocation_source: { type: 'string', optional: true },
              latitude: { type: 'float', optional: true },
              longitude: { type: 'float', optional: true },
              status: { type: 'string', optional: true },
              date_created: { type: 'any', optional: true },
              normalized: { type: 'boolean', optional: true },
              last_updated: { type: 'any', optional: true },
              open_hours: {
                def: {
                  monday: {
                    def: {
                      from: { type: 'string', optional: true },
                      to: { type: 'string', optional: true },
                      __dschm__: {
                        def: { id: 'AddressWeekDay' },
                        type: 'meta',
                      },
                    },
                    list: true,
                    optional: true,
                    type: 'object',
                  },
                  tuesday: {
                    def: {
                      from: { type: 'string', optional: true },
                      to: { type: 'string', optional: true },
                      __dschm__: {
                        def: { id: 'AddressWeekDay' },
                        type: 'meta',
                      },
                    },
                    list: true,
                    optional: true,
                    type: 'object',
                  },
                  wednesday: {
                    def: {
                      from: { type: 'string', optional: true },
                      to: { type: 'string', optional: true },
                      __dschm__: {
                        def: { id: 'AddressWeekDay' },
                        type: 'meta',
                      },
                    },
                    list: true,
                    optional: true,
                    type: 'object',
                  },
                  thursday: {
                    def: {
                      from: { type: 'string', optional: true },
                      to: { type: 'string', optional: true },
                      __dschm__: {
                        def: { id: 'AddressWeekDay' },
                        type: 'meta',
                      },
                    },
                    list: true,
                    optional: true,
                    type: 'object',
                  },
                  friday: {
                    def: {
                      from: { type: 'string', optional: true },
                      to: { type: 'string', optional: true },
                      __dschm__: {
                        def: { id: 'AddressWeekDay' },
                        type: 'meta',
                      },
                    },
                    list: true,
                    optional: true,
                    type: 'object',
                  },
                  saturday: {
                    def: {
                      from: { type: 'string', optional: true },
                      to: { type: 'string', optional: true },
                      __dschm__: {
                        def: { id: 'AddressWeekDay' },
                        type: 'meta',
                      },
                    },
                    list: true,
                    optional: true,
                    type: 'object',
                  },
                  sunday: {
                    def: {
                      from: { type: 'string', optional: true },
                      to: { type: 'string', optional: true },
                      __dschm__: {
                        def: { id: 'AddressWeekDay' },
                        type: 'meta',
                      },
                    },
                    list: true,
                    optional: true,
                    type: 'object',
                  },
                  on_holidays: {
                    def: {
                      hours: { type: 'any', list: true, optional: true },
                      status: { type: 'string' },
                      __dschm__: { def: { id: 'OnHolidays' }, type: 'meta' },
                    },
                    optional: true,
                    type: 'object',
                  },
                  __dschm__: { def: { id: 'OpenHours' }, type: 'meta' },
                },
                optional: true,
                type: 'object',
              },
              address_type: { type: 'string', optional: true },
              scoring: { type: 'float', optional: true },
              __dschm__: { def: { id: 'Address' }, type: 'meta' },
            },
            type: 'object',
          },
        },
      },
      type: 'array',
    } as const),
    
    input: GraphType.getOrSet('userAddressesFindManyInput', {
      def: { siteId: { type: 'string' } },
      type: 'object',
    } as const),
    
    operation: {
      query:
        'query userAddressesFindMany($userAddressesFindMany_siteId: String!) {\n  userAddressesFindMany(siteId: $userAddressesFindMany_siteId) {\n    id\n    user_id\n    location_id\n    contact\n    phone\n    address_line\n    floor\n    apartment\n    street_number\n    street_name\n    zip_code\n    city {\n      id\n      name\n    }\n    state {\n      id\n      name\n    }\n    country {\n      id\n      name\n    }\n    neighborhood {\n      id\n      name\n    }\n    municipality {\n      id\n      name\n    }\n    search_location {\n      state {\n        id\n        name\n      }\n      city {\n        id\n        name\n      }\n      neighborhood {\n        id\n        name\n      }\n    }\n    types\n    comment\n    between\n    references\n    aditional_info\n    geolocation_type\n    geolocation_last_updated\n    geolocation_source\n    latitude\n    longitude\n    status\n    date_created\n    normalized\n    last_updated\n    open_hours {\n      monday {\n        from\n        to\n      }\n      tuesday {\n        from\n        to\n      }\n      wednesday {\n        from\n        to\n      }\n      thursday {\n        from\n        to\n      }\n      friday {\n        from\n        to\n      }\n      saturday {\n        from\n        to\n      }\n      sunday {\n        from\n        to\n      }\n      on_holidays {\n        hours\n        status\n      }\n    }\n    address_type\n    scoring\n  }\n}\n',
      varNames: {
        siteId: {
          comments: '',
          name: 'siteId',
          type: 'String!',
          varName: 'userAddressesFindMany_siteId',
        },
      },
    } as const,
  },
} as const;

export type GraphqlClientHelpers = typeof graphqlClientHelpers;
export type GraphQLEntry = GraphqlClientHelpers[keyof GraphqlClientHelpers];

export type GraphQLFetchParams<K extends GraphQLEntry['name']> = {
  operationInfo: GraphqlClientHelpers[K];
  operationName: K;
  getBody: (
    args: ExpectedGraphQLClient[K]['args']
  ) => {
    query: string;
    variables: Record<string, any>;
    operationName: K;
  };
  parseArgs: (args: ExpectedGraphQLClient[K]['args']) => Record<string, any>;
  mountBodyString(args: ExpectedGraphQLClient[K]['args']): string;
};

export function getGraphQLFetchHelpers<MethodName extends GraphQLEntry['name']>(
  methodName: MethodName
): GraphQLFetchParams<MethodName> {
  const helpers = graphqlClientHelpers[methodName];
  
  function parseArgs(args: any) {
    const vars: Record<string, any> = {};
    const parsedArgs: any = helpers.input.parse(args || {}, (_, error) => {
      return `\nGraphQLClientArgumentsError: method ${methodName}: \n${error.message}`;
    });
    
    Object.entries(helpers.operation.varNames).forEach(
      ([inputVarName, { varName }]) => {
        vars[varName] = parsedArgs[inputVarName];
      }
    );
    
    return vars;
  }
  
  function getBody(args: any) {
    const variables = parseArgs(args);
    return {
      query: helpers.operation.query,
      variables,
      operationName: methodName,
    };
  }
  
  function mountBodyString(args: any) {
    const body = getBody(args);
    return JSON.stringify(body);
  }
  
  return {
    operationInfo: helpers,
    operationName: methodName,
    parseArgs,
    getBody,
    mountBodyString,
  };
}

import type { Compute } from '@backland/utils';

export type ULID = string;

export type UseGraphQLConfig<
  K extends GraphQLEntry['name']
> = ExpectedGraphQLClient[K]['args'] extends undefined
  ? { data?: Record<string, never> }
  : { data: ExpectedGraphQLClient[K]['args'] };

const fetchHelpers: Record<string, GraphQLFetchParams<any>> = {};

export function parseFormClientBody<K extends GraphQLEntry['name']>(
  method: K,
  config?: UseGraphQLConfig<K>
) {
  const helpers = (() => {
    return (fetchHelpers[method] =
      fetchHelpers[method] || getGraphQLFetchHelpers(method));
  })();
  
  return {
    ...config,
    data: helpers.getBody(config?.data || ({} as any)),
  };
}

export type GraphQLMethodResponse<
  MethodName extends GraphQLEntry['name']
> = Compute<
  Exclude<
    Exclude<
      GraphQLClientResponse<
        ExpectedGraphQLClient[MethodName]['payload']
      >['data'],
      null
    >['data'],
    null
  >
>;

