import type { GraphQLSchema, GraphQLSchemaConfig } from 'graphql';
import { GraphQLObjectType } from 'graphql';
import groupBy from 'lodash/groupBy';

import type { DarchGraphQLResolver } from './DarchType';
import { ObjectType } from './ObjectType';

export type CreateGraphQLObjectOptions = Partial<GraphQLSchemaConfig>;

export function createGraphQLSchema(
  resolvers?: DarchGraphQLResolver[],
  config?: CreateGraphQLObjectOptions
): GraphQLSchema;

export function createGraphQLSchema(
  config?: CreateGraphQLObjectOptions
): GraphQLSchema;

export function createGraphQLSchema(...args: any[]): GraphQLSchema {
  const {
    graphql: { GraphQLSchema },
    DarchType,
  } = ObjectType.serverUtils();

  const registeredResolvers = [...DarchType.DarchType.resolvers.values()];

  const resolvers = Array.isArray(args[0]) ? args[0] : registeredResolvers;

  const config = Array.isArray(args[0]) ? args[1] : args[0];

  const grouped = groupBy(resolvers, (item) => item.kind);

  function createFields(kind: string) {
    const fields = {};
    if (grouped[kind]) {
      grouped[kind].forEach((item) => {
        fields[item.name] = item;
      });
    }
    return fields;
  }

  return new GraphQLSchema({
    query: grouped.query
      ? new GraphQLObjectType({
          name: 'Query',
          fields: createFields('query'),
        })
      : undefined,

    mutation: grouped.mutation
      ? new GraphQLObjectType({
          name: 'Mutation',
          fields: createFields('mutation'),
        })
      : undefined,

    subscription: grouped.subscription
      ? new GraphQLObjectType({
          name: 'Subscription',
          fields: createFields('subscription'),
        })
      : undefined,

    ...config,
  });
}
