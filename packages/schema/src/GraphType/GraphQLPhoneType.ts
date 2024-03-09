import { GraphQLError, GraphQLScalarType, Kind } from 'graphql';

import {
  PhoneValidationOptions,
  validatePhoneNumber,
} from '../fields/PhoneField';

export type GraphQLPhoneTypeOptions = PhoneValidationOptions & {
  description?: string;
  name?: string;
};

const validator = (ast, options: GraphQLPhoneTypeOptions) => {
  const { kind, value } = ast;

  if (kind !== Kind.STRING) {
    throw new GraphQLError(
      `Query error: Can only parse strings got a: ${kind}`,
      [ast],
    );
  }

  return validatePhoneNumber(value, options);
};

export class GraphQLPhoneType extends GraphQLScalarType {
  constructor(options: GraphQLPhoneTypeOptions = {}) {
    const { name = 'Phone', description } = options || {};

    super({
      description,
      name,
      parseLiteral: (ast) => validator(ast, options),
      parseValue: (value) => {
        const ast = {
          kind: Kind.STRING,
          value,
        };
        return validator(ast, options);
      },
      serialize: (value) => {
        const ast = {
          kind: Kind.STRING,
          value,
        };
        return validator(ast, options);
      },
    });
  }
}
