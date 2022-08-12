import { getByPath } from '@darch/utils/lib/getByPath';
import { hashString } from '@darch/utils/lib/hashString';
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

import { Darch } from '../Darch';
import { ResolverKind, resolverKinds } from '../createGraphQLSchema';
import { LiteralField } from '../fields/LitarealField';

export type ParseQueryFieldOptions = {
  graphQLField: GraphQLField<any, any>;
  breadcrumb?: string[];
  queryKind:
    | 'mainQuery' /* the top query */
    | 'fieldQuery' /* the inner field query, child of the mainQuery */;
  kind?: 'query' | 'mutation' | 'subscription';
  includeDeprecatedFields?: boolean;
  depthLimit: number;
  format?: boolean;
};

type FieldPayload = {
  isObject: boolean;
  isUnion: boolean;
  innerTypeString: string;
  hash: string;
  readableHash: string;
  description: string | undefined;
  deprecationReason: string | undefined;
  children: FieldPayload[];
  args: GraphQLArgument[] | readonly GraphQLArgument[];
  fields: Record<string, FieldPayload>;
};

type ProcessFieldPayload = Record<string, FieldPayload>;

export type SchemaQueryTemplatesResult = {
  fullQuery: string;
  queryByResolver: {
    [K in ResolverKind]: Record<string, PrintQueryResult>;
  };
};

export function getSchemaQueryTemplates(
  schema: GraphQLSchema,
  options: { depthLimit?: number; includeDeprecatedFields?: boolean } = {}
): SchemaQueryTemplatesResult {
  const { depthLimit = 10, includeDeprecatedFields = true } = options;

  const query = schema.getQueryType();
  const mutation = schema.getMutationType();
  const subscription = schema.getSubscriptionType();

  let fullQuery = '';

  const queryByResolver: SchemaQueryTemplatesResult['queryByResolver'] = {
    query: {},
    mutation: {},
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
        kind,
        graphQLField,
        queryKind: 'mainQuery',
        includeDeprecatedFields,
        depthLimit,
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
    graphQLField,
    cache,
    includeDeprecatedFields,
  });

  const fieldStrings = fieldsToString({
    field: payload,
    cache,
    breadcrumb,
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

    const queryName = ` ${name} `;
    fullQuery += `${kind} ${queryName}${topArgsString} { ${name} ${innerArgsString} ${innerQuery}}`;
  } else {
    fullQuery += `${kind} ${fieldQuery}`;
  }

  const fragments = prettifyQuery(
    Object.values(fieldStrings.fragments).join('\n'),
    'mainQuery'
  );
  fullQuery = fragments + fullQuery;

  if (format) {
    fullQuery = prettifyQuery(fullQuery, 'mainQuery');
    fieldQuery = fragments + prettifyQuery(fieldQuery, 'fieldQuery');
  }

  return { ...fieldStrings, fullQuery, fieldQuery, fields: payload };
}

export interface PrintQueryResult extends FieldsToStringResult {
  fullQuery: string;
  fieldQuery: string;
  fields: FieldPayload;
}

function getFieldPayload({
  graphQLField,
  cache,
}: {
  graphQLField: GraphQLField<any, any>;
  cache: ProcessFieldPayload;
}): FieldPayload {
  const { args, type } = graphQLField;
  const { innerType } = getInnerType(type);
  const innerTypeString = innerType.toJSON();

  const { hash: key, readableHash } = hashField(graphQLField);

  if (cache[key]) return cache[key];

  const payload: FieldPayload = (cache[key] = {
    args,
    isObject: false,
    isUnion: false,
    children: [],
    innerTypeString: innerTypeString,
    hash: key,
    readableHash,
    description: getByPath(innerType, 'description'),
    deprecationReason: getByPath(innerType, 'deprecationReason'),
    fields: {},
  });

  if (isObjectType(innerType)) {
    payload.isObject = true;

    Object.entries(innerType.getFields()).forEach(([name, field]) => {
      payload.fields[name] = getFieldPayload({
        graphQLField: field,
        cache,
      });
    });
  }

  if (isUnionType(innerType)) {
    const unionTypes = innerType.getTypes();
    payload.isUnion = true;

    unionTypes.forEach((unionType) => {
      const unionItem = getFieldPayload({
        graphQLField: {
          type: unionType,
          args: [],
          name: unionType.name,
          description: unionType.description,
          deprecationReason: getByPath(unionType, 'deprecationReason'),
          extensions: unionType.extensions,
          astNode: unionType.astNode as any,
        },
        cache,
      });

      payload.children.push(unionItem);
    });
  }

  return payload;
}

export function processField(config: {
  graphQLField: GraphQLField<any, any>;
  parent?: { name: string };
  includeDeprecatedFields: boolean;
  cache?: ProcessFieldPayload;
}): { cache: ProcessFieldPayload; payload: FieldPayload } {
  const { includeDeprecatedFields, cache = {}, graphQLField } = config;

  const { innerType: type } = getInnerType(graphQLField.type);

  const { hash: key } = hashField(graphQLField);

  if (cache[key] !== undefined) {
    return { cache, payload: cache[key] };
  }

  const payload = getFieldPayload({
    graphQLField,
    cache,
  });

  if (isObjectType(type)) {
    const gqlTypeFields = type.getFields();

    const fields = Object.entries(gqlTypeFields).filter(([_, child]) => {
      return includeDeprecatedFields || !child.deprecationReason;
    });

    fields.forEach(([_, field]) => {
      const item = getFieldPayload({
        graphQLField: field,
        cache,
      });

      if (!item.isObject) {
        return;
      }

      processField({
        graphQLField: field,
        includeDeprecatedFields,
        cache,
      });
    });
  }

  return { cache, payload };
}

type FieldsToStringResult = {
  query: string;
  fragments: Record<string, string>;
  argsParsed: ParsedArgs;
  allArgs: Record<string, ParsedArgs>;
};

type FieldsToStringCache = {
  [K: string]: FieldsToStringResult;
};

function fieldsToString(config: {
  field: FieldPayload;
  cache: ProcessFieldPayload;
  isTopQuery: boolean;
  breadcrumb: string[];
  fieldsToStringCache?: FieldsToStringCache;
  allArgs?: FieldsToStringResult['allArgs'];
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
    query: '',
    fragments: {},
    argsParsed,
    allArgs,
  };

  fieldsToStringCache[hash] = self;

  if (field.isObject) {
    Object.entries(fields || {}).forEach(([name, field]) => {
      const _breadcrumb = [...breadcrumb, name];
      const fragmentName = field.hash + `Fragment`;

      if (!field.isObject && !field.isUnion) {
        const {
          argsParsed: {
            strings: { innerArgsString },
          },
        } = fieldsToString({
          field,
          cache,
          breadcrumb: _breadcrumb,
          isTopQuery: false,
          fieldsToStringCache,
          allArgs,
        });

        self.query += ` ${name}${innerArgsString} `;
        return;
      }

      if (field.isObject) {
        const child = fieldsToString({
          field,
          cache,
          breadcrumb: _breadcrumb,
          isTopQuery: false,
          fieldsToStringCache,
          allArgs,
        });

        const {
          argsParsed: {
            strings: { topArgsString, innerArgsString },
          },
        } = child;

        self.query += ` ${name}${innerArgsString} { `;
        self.query += ` ...${fragmentName} `;
        self.query += ` } `;

        self.fragments[
          fragmentName
        ] = `fragment ${fragmentName}${topArgsString} on ${field.innerTypeString} { ${child.query} }\n`;
      }

      if (field.isUnion) {
        let childQuery = '';
        const argsStrings: string[] = [];
        const topArgsStrings: string[] = [];

        field.children.forEach((item) => {
          const u_field = cache[item.hash];

          const child = fieldsToString({
            field: u_field,
            isTopQuery: false,
            breadcrumb: _breadcrumb,
            cache,
            fieldsToStringCache,
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

        self.query += ` ...${fragmentName}${
          topArgsStrings ? `${topArgsStrings.join()}` : ''
        } `;

        self.query += ` } `;

        self.fragments[
          fragmentName
        ] = `fragment ${fragmentName}  on ${field.innerTypeString} { __typeName ${childQuery} }\n`;
      }
    });
  } else {
    const {
      argsParsed: {
        strings: { innerArgsString },
      },
    } = fieldsToString({
      field,
      cache,
      breadcrumb,
      isTopQuery: false,
      fieldsToStringCache,
      allArgs,
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
    name: string;
    varName: string;
    defaultValue: string | undefined;
    type: string;
  }[];
};

function parseArgs(config: ArgsToStringConfig): ParsedArgs {
  const { args, breadcrumb } = config;

  const vars: ParsedArgs['vars'] = [];

  if (!args?.length) {
    return {
      vars,
      strings: parsedArgsToString(vars),
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
      name,
      varName,
      defaultValue: _defaultValue,
      type: type.toString(),
    });
  });

  return { vars, strings: parsedArgsToString(vars) };
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
    topArgsStringPart,
    topArgsString: topArgsStringPart.length ? `(${topArgsStringPart})` : '',
    innerArgsString: innerArgsStringPart.length
      ? `(${innerArgsStringPart})`
      : '',
    innerArgsStringPart: innerArgsStringPart,
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
    value = Darch.prettier.format(isMainQuery ? value : `{${value}}`, {
      parser: 'graphql',
      printWidth: 120,
    });
  } catch (e: any) {
    throw new Error(`Failed to prettify:\n${value}\n\n\n${e.stack}`);
  }

  if (isMainQuery) return value;

  return value
    .trim() //
    .replace(/^{/, '')
    .replace(/}$/, '');
}
