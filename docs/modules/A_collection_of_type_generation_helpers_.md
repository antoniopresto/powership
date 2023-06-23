[Powership](../README.md) / [Modules](../modules.md) / A collection of type generation helpers.

# Module: A collection of type generation helpers.

## Table of contents

### Functions

- [jsonToSchemaDefinition](A_collection_of_type_generation_helpers_.md#jsontoschemadefinition)
- [jsonToType](A_collection_of_type_generation_helpers_.md#jsontotype)
- [powershipUtilsResolver](A_collection_of_type_generation_helpers_.md#powershiputilsresolver)

## Functions

### jsonToSchemaDefinition

▸ **jsonToSchemaDefinition**(`options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.examples` | `undefined` \| `boolean` |
| `options.fieldCase` | `undefined` \| ``"undefined"`` \| ``"keep"`` \| ``"capitalized"`` \| ``"lowercase"`` \| ``"random"`` \| ``"slugify"`` \| ``"camelCase"`` |
| `options.json` | `Object` |
| `options.name` | `undefined` \| `string` |
| `options.url` | `undefined` \| `string` |

#### Returns

`Object`

#### Defined in

packages/helpers/src/jsonToType.ts:57

___

### jsonToType

▸ **jsonToType**(`init`): `GraphType`<{ `object`: { `$string`: ``"unknown"``  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `Object` |
| `init.examples` | `undefined` \| `boolean` |
| `init.fieldCase` | `undefined` \| ``"undefined"`` \| ``"keep"`` \| ``"capitalized"`` \| ``"lowercase"`` \| ``"random"`` \| ``"slugify"`` \| ``"camelCase"`` |
| `init.json` | `Object` |
| `init.name` | `undefined` \| `string` |
| `init.url` | `undefined` \| `string` |

#### Returns

`GraphType`<{ `object`: { `$string`: ``"unknown"``  }  }\>

#### Defined in

packages/helpers/src/jsonToType.ts:42

___

### powershipUtilsResolver

▸ **powershipUtilsResolver**(`input`, `onPageInit?`): `Promise`<{ `body`: `string` = html; `headers`: { `Content-Type`: `string` = 'text/html' } ; `statusCode`: `number` = 200 }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.examples` | `undefined` \| `boolean` |
| `input.fieldCase` | `undefined` \| ``"undefined"`` \| ``"keep"`` \| ``"capitalized"`` \| ``"lowercase"`` \| ``"random"`` \| ``"slugify"`` \| ``"camelCase"`` |
| `input.json` | `Object` |
| `input.name` | `undefined` \| `string` |
| `input.url` | `undefined` \| `string` |
| `onPageInit?` | (`options`: `RenderHighlightPageInit`) => `RenderHighlightPageInit` |

#### Returns

`Promise`<{ `body`: `string` = html; `headers`: { `Content-Type`: `string` = 'text/html' } ; `statusCode`: `number` = 200 }\>

#### Defined in

packages/helpers/src/powershipUtilsResolver.ts:16
