import { formatGraphQL } from '@backland/utils';
import { getByPath } from '@backland/utils';
import { hashString } from '@backland/utils';
import {
  GraphQLArgument,
  GraphQLField,
  GraphQLSchema,
  GraphQLType,
  isListType,
  isNonNullType,
  isObjectType,
  isUnionType,
} from 'graphql';

import { ResolverKind, resolverKinds } from '../createGraphQLSchema';
import { LiteralField } from '../fields/LiteralField';

export type ParseQueryFieldOptions = {
  breadcrumb?: string[];
  depthLimit: number;
  format?: boolean;
  graphQLField: GraphQLField<any, any>;
  includeDeprecatedFields?: boolean;
  kind?: 'query' | 'mutation' | 'subscription';
  queryKind:
    | 'mainQuery' /* the top query */
    | 'fieldQuery' /* the inner field query, child of the mainQuery */;
};

type FieldPayload = {
  args: GraphQLArgument[] | readonly GraphQLArgument[];
  children: FieldPayload[];
  deprecationReason: string | undefined;
  description: string | undefined;
  fields: Record<string, FieldPayload>;
  hash: string;
  innerTypeString: string;
  isObject: boolean;
  isUnion: boolean;
  readableHash: string;
};

type ProcessFieldPayload = Record<string, FieldPayload>;

export type SchemaQueryTemplatesResult = {
  fullQuery: string;
  queryByResolver: {
    [K in ResolverKind]: Record<string, PrintQueryResult>;
  };
};

export type SchemaQueryTemplatesOptions = {
  depthLimit?: number;
  includeDeprecatedFields?: boolean;
};

export function getSchemaQueryTemplates(
  schema: GraphQLSchema,
  options: SchemaQueryTemplatesOptions = {}
): SchemaQueryTemplatesResult {
  const { depthLimit = 5000, includeDeprecatedFields = true } = options;

  const query = schema.getQueryType();
  const mutation = schema.getMutationType();
  const subscription = schema.getSubscriptionType();

  let fullQuery = '';

  const queryByResolver: SchemaQueryTemplatesResult['queryByResolver'] = {
    mutation: {},
    query: {},
    subscription: {},
  };

  const items = [
    query ? { kind: resolverKinds.query, value: query } : undefined,
    mutation ? { kind: resolverKinds.mutation, value: mutation } : undefined,
    subscription
      ? { kind: resolverKinds.subscription, value: subscription }
      : undefined,
  ].filter(Boolean);

  items.forEach((item) => {
    if (!item) return;
    const { value, kind } = item;

    Object.values(value.getFields()).forEach((graphQLField) => {
      const item = getQueryTemplates({
        depthLimit,
        graphQLField,
        includeDeprecatedFields,
        kind,
        queryKind: 'mainQuery',
      });

      queryByResolver[kind][graphQLField.name] = item;
      fullQuery += `${item.fullQuery}`;
    });
  });

  return {
    fullQuery: fullQuery.trim(),
    queryByResolver,
  };
}

/**
 * Generate the query for the specified field
 * @param params
 */
export function getQueryTemplates(
  params: ParseQueryFieldOptions
): PrintQueryResult {
  const { kind = 'query' } = params;
  const { name } = params.graphQLField;

  const {
    breadcrumb = [name],
    graphQLField,
    queryKind,
    includeDeprecatedFields = true,
    format = true,
  } = params;

  const cache: ProcessFieldPayload = {};

  const { payload } = processField({
    cache,
    graphQLField,
    includeDeprecatedFields,
  });

  const fieldStrings = fieldsToString({
    breadcrumb,
    cache,
    field: payload,
    isTopQuery: false,
  });

  const innerQuery = payload.isObject ? `{${fieldStrings.query}}` : '';

  let fullQuery = '';
  let fieldQuery = `${name} ${fieldStrings.argsParsed.strings.innerArgsString} ${innerQuery}`;

  if (queryKind === 'mainQuery') {
    const { allArgs } = fieldStrings;
    const argValues = Object.values(allArgs);
    const topArgs = argValues
      .map((el) => el.strings.topArgsStringPart)
      .filter(Boolean);

    const innerArgs = argValues
      .map((el) => el.strings.innerArgsStringPart)
      .filter(Boolean);

    const topArgsString = topArgs.length ? `(${topArgs.join(',')})` : '';
    const innerArgsString = innerArgs.length ? `(${innerArgs.join(',')})` : '';

    fullQuery += `${kind} ${name}${topArgsString} { ${name} ${innerArgsString} ${innerQuery}}`;
  } else {
    fullQuery += `${kind} ${fieldQuery}`;
  }

  if (format) {
    fullQuery = prettifyQuery(fullQuery, 'mainQuery');
    fieldQuery = prettifyQuery(fieldQuery, 'fieldQuery');
  }

  fullQuery += `\n`;

  return { ...fieldStrings, fieldQuery, fields: payload, fullQuery };
}

export interface PrintQueryResult extends FieldsToStringResult {
  fieldQuery: string;
  fields: FieldPayload;
  fullQuery: string;
}

function getFieldPayload({
  graphQLField,
  cache,
}: {
  cache: ProcessFieldPayload;
  graphQLField: GraphQLField<any, any>;
}): FieldPayload {
  const { args, type } = graphQLField;
  const { innerType } = getInnerType(type);
  const innerTypeString = innerType.toJSON();

  const { hash: key, readableHash } = hashField(graphQLField);

  if (cache[key]) return cache[key];

  const payload: FieldPayload = (cache[key] = {
    args,
    children: [],
    deprecationReason: getByPath(innerType, 'deprecationReason'),
    description: getByPath(innerType, 'description'),
    fields: {},
    hash: key,
    innerTypeString: innerTypeString,
    isObject: false,
    isUnion: false,
    readableHash,
  });

  if (isObjectType(innerType)) {
    payload.isObject = true;

    Object.entries(innerType.getFields()).forEach(([name, field]) => {
      payload.fields[name] = getFieldPayload({
        cache,
        graphQLField: field,
      });
    });
  }

  if (isUnionType(innerType)) {
    const unionTypes = innerType.getTypes();
    payload.isUnion = true;

    unionTypes.forEach((unionType) => {
      const unionItem = getFieldPayload({
        cache,
        graphQLField: {
          args: [],
          astNode: unionType.astNode as any,
          deprecationReason: getByPath(unionType, 'deprecationReason'),
          description: unionType.description,
          extensions: unionType.extensions,
          name: unionType.name,
          type: unionType,
        },
      });

      payload.children.push(unionItem);
    });
  }

  return payload;
}

export function processField(config: {
  cache?: ProcessFieldPayload;
  graphQLField: GraphQLField<any, any>;
  includeDeprecatedFields: boolean;
  parent?: { name: string };
}): { cache: ProcessFieldPayload; payload: FieldPayload } {
  const { includeDeprecatedFields, cache = {}, graphQLField } = config;

  const { innerType: type } = getInnerType(graphQLField.type);

  const { hash: key } = hashField(graphQLField);

  if (cache[key] !== undefined) {
    return { cache, payload: cache[key] };
  }

  const payload = getFieldPayload({
    cache,
    graphQLField,
  });

  if (isObjectType(type)) {
    const gqlTypeFields = type.getFields();

    const fields = Object.entries(gqlTypeFields).filter(([_, child]) => {
      return includeDeprecatedFields || !child.deprecationReason;
    });

    fields.forEach(([_, field]) => {
      const item = getFieldPayload({
        cache,
        graphQLField: field,
      });

      if (!item.isObject) {
        return;
      }

      processField({
        cache,
        graphQLField: field,
        includeDeprecatedFields,
      });
    });
  }

  return { cache, payload };
}

type FieldsToStringResult = {
  allArgs: Record<string, ParsedArgs>;
  argsParsed: ParsedArgs;
  query: string;
};

type FieldsToStringCache = {
  [K: string]: FieldsToStringResult;
};

function fieldsToString(config: {
  allArgs?: FieldsToStringResult['allArgs'];
  breadcrumb: string[];
  cache: ProcessFieldPayload;
  field: FieldPayload;
  fieldsToStringCache?: FieldsToStringCache;
  isTopQuery: boolean;
}): FieldsToStringResult {
  const {
    field, //
    cache,
    breadcrumb,
    fieldsToStringCache = {},
  } = config;

  const { fields, args, hash } = field;

  if (fieldsToStringCache[hash]) {
    return fieldsToStringCache[hash];
  }

  const allArgs = config.allArgs || {};

  const argsParsed = parseArgs({
    args,
    breadcrumb,
  });

  allArgs[hash] = argsParsed;

  const self: FieldsToStringResult = {
    allArgs,
    argsParsed,
    query: '',
  };

  fieldsToStringCache[hash] = self;

  if (field.isObject) {
    Object.entries(fields || {}).forEach(([name, field]) => {
      const _breadcrumb = [...breadcrumb, name];

      if (!field.isObject && !field.isUnion) {
        const {
          argsParsed: {
            strings: { innerArgsString },
          },
        } = fieldsToString({
          allArgs,
          breadcrumb: _breadcrumb,
          cache,
          field,
          fieldsToStringCache,
          isTopQuery: false,
        });

        self.query += ` ${name}${innerArgsString} `;
        return;
      }

      if (field.isObject) {
        const child = fieldsToString({
          allArgs,
          breadcrumb: _breadcrumb,
          cache,
          field,
          fieldsToStringCache,
          isTopQuery: false,
        });

        const {
          argsParsed: {
            strings: { innerArgsString },
          },
        } = child;

        self.query += ` ${name}${innerArgsString} { `;
        self.query += child.query;
        self.query += ` } `;
      }

      if (field.isUnion) {
        let childQuery = '';
        const argsStrings: string[] = [];
        const topArgsStrings: string[] = [];

        field.children.forEach((item) => {
          const u_field = cache[item.hash];

          const child = fieldsToString({
            breadcrumb: _breadcrumb,
            cache,
            field: u_field,
            fieldsToStringCache,
            isTopQuery: false,
          });

          const {
            argsParsed: {
              strings: { innerArgsStringPart, topArgsStringPart },
            },
          } = child;

          argsStrings.push(innerArgsStringPart);
          topArgsStrings.push(topArgsStringPart);

          childQuery += `... on ${item.innerTypeString} { ${child.query} }`;
        });

        self.query += ` ${name}${
          argsStrings ? `${argsStrings.join()}` : ''
        } { `;

        self.query += childQuery;

        self.query += ` } `;
      }
    });
  } else {
    const {
      argsParsed: {
        strings: { innerArgsString },
      },
    } = fieldsToString({
      allArgs,
      breadcrumb,
      cache,
      field,
      fieldsToStringCache,
      isTopQuery: false,
    });

    self.query += `${innerArgsString}`;
  }

  return self;
}

type ArgsToStringConfig = {
  args?: GraphQLArgument[] | ReadonlyArray<GraphQLArgument>;
  breadcrumb: string[];
};

type ParsedArgs = {
  strings: ParsedArgsStrings;
  vars: {
    comments: string;
    defaultValue: string | undefined;
    name: string;
    type: string;
    varName: string;
  }[];
};

function parseArgs(config: ArgsToStringConfig): ParsedArgs {
  const { args, breadcrumb } = config;

  const vars: ParsedArgs['vars'] = [];

  if (!args?.length) {
    return {
      strings: parsedArgsToString(vars),
      vars,
    };
  }

  let prefix = breadcrumb.length ? breadcrumb.join('_') + '_' : '';

  args.forEach((arg) => {
    const { type, description, deprecationReason, defaultValue, name } = arg;
    const varName = `$${prefix}${name}`;
    const comments = descriptionsToComments(deprecationReason, description);

    let _defaultValue =
      arg.defaultValue !== undefined
        ? LiteralField.utils.serialize(defaultValue)
        : undefined;

    if (typeof defaultValue === 'string') {
      _defaultValue = JSON.stringify(_defaultValue);
    }

    vars.push({
      comments,
      defaultValue: _defaultValue,
      name,
      type: type.toString(),
      varName,
    });
  });

  return { strings: parsedArgsToString(vars), vars };
}

type ParsedArgsStrings = ReturnType<typeof parsedArgsToString>;
function parsedArgsToString(parsed: ParsedArgs['vars']) {
  const innerParts: string[] = [];
  const topParts: string[] = [];

  parsed.forEach(({ type, defaultValue, name, varName, comments }) => {
    topParts.push(`${comments}${varName}: ${type}`);
    innerParts.push(`${comments}${name}: ${varName}`);

    if (defaultValue !== undefined) {
      topParts.push(`= ${defaultValue}`);
    }
  });

  const topArgsStringPart = topParts.join(',').replace(',=', ' = ');
  const innerArgsStringPart = innerParts.join(',').replace(',=', ' = ');

  return {
    innerArgsString: innerArgsStringPart.length
      ? `(${innerArgsStringPart})`
      : '',
    innerArgsStringPart: innerArgsStringPart,
    topArgsString: topArgsStringPart.length ? `(${topArgsStringPart})` : '',
    topArgsStringPart,
  };
}

export function getInnerType(graphqlType: GraphQLType): {
  innerType: GraphQLType;
  innerTypeJSON: string;
  wrappers: string[];
  wrappersPath: string;
} {
  const wrappers: string[] = [];

  while ('ofType' in graphqlType) {
    if (isUnionType(graphqlType)) {
      wrappers.push('union');
    }

    if (!isNonNullType(graphqlType)) {
      wrappers.push('optional');
    }

    if (isListType(graphqlType)) {
      wrappers.push('list');
    }

    graphqlType = graphqlType.ofType;
  }

  const wrappersPath = wrappers.join('');
  const innerTypeJSON = graphqlType.toJSON();

  return {
    innerType: graphqlType,
    innerTypeJSON,
    wrappers,
    wrappersPath,
  };
}

function hashField(graphQLField: GraphQLField<any, any>) {
  const { wrappersPath, innerType } = getInnerType(graphQLField.type);

  let argString = '';

  graphQLField.args.forEach(
    ({ type, description, deprecationReason, defaultValue, name }) => {
      argString += [
        name,
        type.toString(),
        description,
        deprecationReason,
        defaultValue,
      ]
        .filter((el) => el !== null && el !== undefined)
        .join('');
    }
  );

  const suffix = `${wrappersPath}${argString}`;
  const hash = hashString(suffix);

  return {
    hash: `${innerType}${hash}`,
    readableHash: `${innerType}${suffix}`,
  };
}

function descriptionsToComments(...list: (string | undefined | null)[]) {
  const commentsList = [...list].filter(Boolean);
  let comments = '';

  if (commentsList.length) {
    return `\n#${commentsList.join('\n#')}\n`;
  }

  return comments;
}

function prettifyQuery(
  value: string,
  queryKind: ParseQueryFieldOptions['queryKind']
) {
  const isMainQuery = queryKind === 'mainQuery';

  value = value.trim();

  try {
    value = formatGraphQL(isMainQuery ? value : `{${value}}`);
  } catch (e: any) {
    // throw new Error(`Failed to prettify:\n${value}\n\n\n${e.stack}`);
  }

  if (isMainQuery) return value;

  return value
    .trim() //
    .replace(/^{/, '')
    .replace(/}$/, '');
}
