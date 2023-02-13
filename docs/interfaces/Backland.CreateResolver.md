[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / CreateResolver

# Interface: CreateResolver<Context\>

[Backland](../modules/Backland.md).CreateResolver

## Type parameters

| Name |
| :------ |
| `Context` |

## Callable

### CreateResolver

▸ **CreateResolver**<`ResultType`, `ArgsType`\>(`config`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](../modules/Backland.md#objectfieldinput) |
| `ArgsType` | extends [`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args?`: `ArgsType` \| `Readonly`<`ArgsType`\> ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve?`: `undefined` ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](../modules/Backland.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `resolver` | <Returns, Root\>(`handler`: (`root`: `Root`, `args`: [`_ResolverArgs`](../modules/Backland.md#_resolverargs)<`ArgsType`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\>) => { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](../modules/Backland.md#_resolverargs)<`ArgsType`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } |

#### Defined in

packages/schema/lib/Resolver.d.ts:40

### CreateResolver

▸ **CreateResolver**<`ResultType`, `Returns`\>(`config`): { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](../modules/Backland.md#objectfieldinput) |
| `Returns` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args?`: `undefined` ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](../modules/Backland.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

{ `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Defined in

packages/schema/lib/Resolver.d.ts:49

### CreateResolver

▸ **CreateResolver**<`ResultType`, `ArgsType`, `Returns`\>(`config`): { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](../modules/Backland.md#_resolverargs)<`ArgsType`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](../modules/Backland.md#objectfieldinput) |
| `ArgsType` | extends [`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md) |
| `Returns` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args`: `ArgsType` \| `Readonly`<`ArgsType`\> ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](../modules/Backland.md#_resolverargs)<`ArgsType`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](../modules/Backland.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

{ `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](../modules/Backland.md#_resolverargs)<`ArgsType`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Defined in

packages/schema/lib/Resolver.d.ts:58
