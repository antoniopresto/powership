import { GraphQLError, GraphQLScalarType, Kind } from 'graphql';

import { DateField } from '../fields/DateField';

export const GraphQLDateType = new GraphQLScalarType({
  name: 'Date',
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }

    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Query error: Can only parse string or integer to Date but got a: ${ast.kind}`,
        [ast]
      );
    }

    const result = new Date(ast.value);
    if (Number.isNaN(result.getTime())) {
      throw new GraphQLError('Query error: Invalid date', [ast]);
    }

    return result;
  },
  parseValue(value: any) {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      throw new TypeError('Field error: value is an invalid Date');
    }

    return date;
  },
  serialize(value) {
    return DateField.serialize(value).toJSON();
  },
});
