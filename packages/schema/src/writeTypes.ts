import path from 'path';

import { Emitter, mitt } from '@darch/utils/lib/mitt';
import { ensureFileSync, writeFileSync } from 'fs-extra';

import { Darch } from './Darch';
import { AnyResolver } from './GraphType/createResolver';
import { GraphTypeLike } from './fields/IObjectLike';
import { LiteralField } from './fields/LitarealField';

const { serialize } = LiteralField.utils;

export const DarchWatchTypesPubSub: Emitter<{
  created: {
    graphType?: GraphTypeLike;
    resolver?: AnyResolver;
  };
}> = mitt();

let timeoutRef: any;
let timeoutMS = 2000;
function run() {
  clearTimeout(timeoutRef);

  if (process.env.darch_emit_interval) {
    timeoutMS =
      +process.env.darch_emit_interval > 0
        ? +process.env.darch_emit_interval
        : timeoutMS;

    timeoutRef = setTimeout(() => {
      writeTypes().catch((err) => {
        console.error('writeTypes:', err.message);
      });
    }, timeoutMS);
  }
}

const typesRecord: Record<string, GraphTypeLike> = {};
const resolversRecord: Record<string, AnyResolver> = {};

DarchWatchTypesPubSub.on('created', async (event) => {
  if (event.graphType) {
    typesRecord[`${event.graphType.id}`] = event.graphType;
  }

  if (event.resolver) {
    resolversRecord[`${event.resolver.name}`] = event.resolver;
  }

  run();
});

process.on('unhandledRejection', () => {
  clearTimeout(timeoutRef);
});

export async function writeTypes() {
  const dest = path.resolve(
    process.cwd(),
    'node_modules/@types/darch__schema/index.d.ts'
  );

  const jsonDest = path.resolve(
    process.cwd(),
    'node_modules/@types/darch__schema/package.json'
  );

  ensureFileSync(dest);
  ensureFileSync(jsonDest);
  writeFileSync(jsonDest, JSON.stringify(packageJSON(), null, 2));

  const creators = Object.keys(typesRecord).map((name) => {
    let txt = '';

    const fn = [
      `function createType(name: "${name}",`,
      `definition: RuntimeDefinitions["${name}TypeDef"]):`,
      `GraphType<RuntimeDefinitions["${name}"],`,
      `RuntimeTypes["${name}"], "${name}">`,
      '\n',
    ].join(' ');

    const getTypeFn = [
      `function getType(name: "${name}"): GraphType<RuntimeDefinitions["${name}"], RuntimeTypes["${name}"], "${name}">`,
    ].join(' ');

    txt += `\n export ${fn};\n`;
    txt += `\n export ${getTypeFn};\n`;

    txt += `\n export const Darch = { createType, getType };\n`;

    return txt;
  });

  const resolvers = Object.keys(resolversRecord).map((name) => {
    let txt = '';

    const fn = [
      `function createResolver<Context, Source>(`,
      `options: ResolverConfig<Context, Source, RuntimeTypes["${name}Payload"], RuntimeTypes["${name}Input"], "${name}">`,
      `): Resolver<Context, Source, RuntimeTypes["${name}Payload"], RuntimeTypes["${name}Input"], "${name}">`,
    ].join(' ');

    const getTypeFn = [
      `function getResolver(name: "${name}"): Resolver<Context, Source, RuntimeTypes["${name}Payload"], RuntimeTypes["${name}Input"], "${name}">`,
    ].join(' ');

    txt += `\n export ${fn};\n`;
    txt += `\n export ${getTypeFn};\n`;

    txt += `\n export const Darch = { createResolver, getResolver };\n`;

    return txt;
  });

  const typesInterface = await Darch.objectToTypescript(
    'RuntimeTypes',
    typesRecord
  );

  let definitions = Object.entries(typesRecord).reduce((acc, [id, next]) => {
    acc += `\n"${id}": ${serialize(next.definition)}\n;`;
    acc += `\n"${id}TypeDef": ${serialize(next.definitionInput)}\n;`;
    return acc;
  }, '');

  definitions = `export interface RuntimeDefinitions {\n${definitions}\n}`;

  let content = template({
    typesInterface,
    creators,
    resolvers,
    definitions,
  });

  content = await Darch.prettier.format(content, {
    parser: 'typescript',
    singleQuote: true,
  });

  writeFileSync(dest, content);
}

function packageJSON() {
  return {
    name: '@types/darch__schema',
    version: '1',
    description: 'Darch runtime definitions',
    main: '',
    types: 'index.d.ts',
  };
}

function template({
  typesInterface,
  creators,
  resolvers,
  definitions,
}: {
  typesInterface: string;
  definitions: string;
  resolvers: string[];
  creators: string[];
}) {
  return `
declare module '@darch/schema' {
  import { Merge } from '@darch/utils/lib/typeUtils';

  import {
    GraphQLField,
    GraphQLFieldConfig,
    GraphQLResolveInfo,
  } from 'graphql';
  
  export type ValidationCustomMessage =
    | string
    | ((value: any, originalError: Error) => string | Error);
  
  export class GraphType<Definition, Type, Name> {
    static __isGraphType: true;
    readonly __isGraphType: true;
    
    static reset(): Promise<void>;
    readonly definition: Definition;
    
    readonly id: Name;
    
    clone<Ext, NewName>(
      name: NewName,
      extend?: Ext
    ): GraphType<Definition & Ext, Type, NewName>;
    
    constructor(definition: Definition);
    
    constructor(name: Name, definition: Definition);
    
    parse(input: any, customMessage?: ValidationCustomMessage): Type;
    
    graphQLType(...args: unknown[]): typeof import('graphql').GraphQLNamedType;
    
    graphQLInputType(
      ...args: unknown[]
    ): typeof import('graphql').GraphQLNamedInputType;
    
    graphQLInterface(
      ...args: unknown[]
    ): typeof import('graphql').GraphQLInterfaceType;
    
    addRelation<FieldTypeDef, Name, Context = unknown, ArgsDef>(
      options: Merge<
        { type: FieldTypeDef; name: Name },
        ResolverConfig<Context, unknown, FieldTypeDef, ArgsDef>
        >
    ): this;
    
    print(): string[];
    
    typescriptPrint(options?: unknown): Promise<string>;
  }
  
  export type ResolverKind = 'query' | 'mutation' | 'subscription';
  
  export interface ResolverConfig<Context, Source, Type, Args, Name>
    extends Omit<GraphQLFieldConfig<any, any>, 'resolve' | 'args' | 'type'> {
    name: Name;
    kind?: ResolverKind;
    args?: unknown;
    type: unknown;
    
    resolve(
      root: Source,
      args: Args,
      context: Context,
      info: GraphQLResolveInfo
    ): Type | Promise<Type>;
  }
  
  export interface Resolver<Context, Source, Type, Args, Name>
    extends Omit<GraphQLFieldConfig<any, any>, 'resolve' | 'args' | 'type'> {
    __isResolver: true;
    __isRelation: boolean;
    __graphTypeId: string;
    __relatedToGraphTypeId: string;
    
    resolve(
      root: Source,
      args: Args,
      context: Context,
      info: GraphQLResolveInfo
    ): Type | Promise<Type>;
    
    name: Name;
    kind: 'query' | 'subscription' | 'mutation';
    
    typeDef: any;
    argsDef: any;
    payloadType: GraphType<any, Type, any>;
    argsType: GraphType<any, Args, any>;
    type: any;
    args: any;
    
    asObjectField(name?: string): GraphQLField<any, any>;
  }

    ${creators.join('\n')}
    
    ${resolvers.join('\n')}
    
    ${definitions}
    
    ${typesInterface}
    
    
    export function createResolver<Context, Source>(
    options: ResolverConfig<
      Context,
      Source,
      unknown,
      unknown,
      string
    >
  ): Resolver<
      Context,
      Source,
      unknown,
      unknown,
      string
  >;
  
  export function createType(
    name: string,
    definition: unknown
  ): unknown;
  
 export function getType(name: string): unknown;
 export function getResolver(name: string): unknown;
}
`;
}
