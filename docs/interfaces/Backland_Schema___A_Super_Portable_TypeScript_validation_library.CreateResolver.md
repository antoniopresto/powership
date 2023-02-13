[Backland](../README.md) / [Modules](../modules.md) / [Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md) / CreateResolver

# Interface: CreateResolver<Context\>

[Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md).CreateResolver

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
| `ResultType` | extends [`ObjectFieldInput`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `ArgsType` | extends [`ObjectDefinitionInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args?`: `ArgsType` \| `Readonly`<`ArgsType`\> ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve?`: `undefined` ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `resolver` | <Returns, Root\>(`handler`: (`root`: `Root`, `args`: [`_ResolverArgs`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_resolverargs)<`ArgsType`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\>) => { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_resolverargs)<`ArgsType`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } |

#### Defined in

[packages/schema/src/Resolver.ts:201](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L201)

### CreateResolver

▸ **CreateResolver**<`ResultType`, `Returns`\>(`config`): { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `Returns` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args?`: `undefined` ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

{ `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Defined in

[packages/schema/src/Resolver.ts:220](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L220)

### CreateResolver

▸ **CreateResolver**<`ResultType`, `ArgsType`, `Returns`\>(`config`): { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_resolverargs)<`ArgsType`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `ArgsType` | extends [`ObjectDefinitionInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md) |
| `Returns` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args`: `ArgsType` \| `Readonly`<`ArgsType`\> ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_resolverargs)<`ArgsType`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

{ `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_resolverargs)<`ArgsType`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Defined in

[packages/schema/src/Resolver.ts:235](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L235)
