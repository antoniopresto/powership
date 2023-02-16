import { AnyFunction, ulid } from '@swind/utils';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { isHttpError } from '../BaseRequestHandler';

// Mark field/type/schema
export const Processed = Symbol();

// Modifies errors before sending to the user
export let defaultHandler = function (err: any) {
  if (isHttpError(err)) {
    return err;
  }
  const errId = `gql#${ulid()}`;
  err.message = `${err.message}: ${errId}`;
  console.error((err && err.stack) || err);
  err.message = `Internal Error: ${errId}`;
  return err;
};

// Changes the default error handler function
export function setDefaultHandler(handlerFn: any) {
  defaultHandler = handlerFn;
}

// Masks graphql schemas, types or individual fields
export function maskErrors(thing: any, fn = defaultHandler) {
  if (thing instanceof GraphQLSchema) {
    maskSchema(thing, fn);
  } else if (thing instanceof GraphQLObjectType) {
    maskType(thing, fn);
  } else {
    maskField(thing, fn);
  }
}

function maskField(field: any, fn: AnyFunction) {
  const resolveFn = field.resolve;
  if (field[Processed] || !resolveFn) {
    return;
  }

  field[Processed] = true;
  field.resolve = async function (...args: any) {
    try {
      const out = resolveFn.call(this, ...args);
      return await Promise.resolve(out);
    } catch (e) {
      throw fn(e, args);
    }
  };

  // save the original resolve function
  field.resolve._resolveFn = resolveFn;
}

function maskType(type: any, fn: AnyFunction) {
  if (type[Processed] || !type.getFields) {
    return;
  }

  const fields = type.getFields();
  for (const fieldName in fields) {
    if (!Object.hasOwnProperty.call(fields, fieldName)) {
      continue;
    }

    maskField(fields[fieldName], fn);
  }
}

function maskSchema(schema: any, fn: AnyFunction) {
  const types = schema.getTypeMap();
  for (const typeName in types) {
    if (!Object.hasOwnProperty.call(types, typeName)) {
      continue;
    }

    maskType(types[typeName], fn);
  }
}
