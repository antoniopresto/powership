[Solarwind](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / Store

# Interface: Store<Dict, K, V\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).Store

## Type parameters

| Name | Type |
| :------ | :------ |
| `Dict` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |
| `K` | extends `Extract`<keyof `Dict`, `string`\> = `Extract`<keyof `Dict`, `string`\> |
| `V` | extends `Dict`[`Extract`<keyof `Dict`, `string`\>] = `Dict`[`Extract`<keyof `Dict`, `string`\>] |

## Hierarchy

- **`Store`**

  ↳ [`IAppConfig`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md)

## Table of contents

### Properties

- [delete](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#delete)
- [entries](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#entries)
- [hashBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#hashby)
- [hooks](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#hooks)
- [keys](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#keys)
- [length](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#length)
- [onGet](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#onget)
- [onMissingKeyError](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#onmissingkeyerror)
- [onRemove](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#onremove)
- [onSet](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#onset)
- [values](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#values)

### Methods

- [add](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#add)
- [clear](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#clear)
- [get](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#get)
- [getOptional](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#getoptional)
- [groupBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#groupby)
- [has](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#has)
- [keyBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#keyby)
- [recordBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#recordby)
- [remove](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#remove)
- [set](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#set)

## Properties

### delete

• **delete**: <Key\>(`key`: `Key`, `eventOptions?`: [`StoreEventOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeeventoptions)<[`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>) => { `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `Key` ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) ; `value`: `undefined` \| `Dict`[`Key`]  }

#### Type declaration

▸ <`Key`\>(`key`, `eventOptions?`): `Object`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `eventOptions?` | [`StoreEventOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeeventoptions)<[`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\> |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `exists` | `undefined` \| `boolean` |
| `index` | `undefined` \| `number` |
| `key` | `undefined` \| `Key` |
| `length` | `undefined` \| `number` |
| `meta` | [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) |
| `value` | `undefined` \| `Dict`[`Key`] |

#### Defined in

[packages/utils/src/Store.ts:94](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L94)

___

### entries

• **entries**: [`K`, `V`][]

#### Defined in

[packages/utils/src/Store.ts:85](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L85)

___

### hashBy

• **hashBy**: ``null`` \| `string`[]

#### Defined in

[packages/utils/src/Store.ts:70](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L70)

___

### hooks

• **hooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | `Parallel`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `K` ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) ; `value`: `undefined` \| `V`  }, `undefined`\> |
| `missingKeyError` | `Parallel`<{ `[K: string]`: `unknown`; `message`: `string`  }, `unknown`\> |
| `remove` | `Parallel`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `K` ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) ; `value`: `undefined` \| `V`  }, `undefined`\> |
| `set` | `Parallel`<[`StoreEvent`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeevent)<`K`, `V`, [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>, `undefined`\> |

#### Defined in

[packages/utils/src/Store.ts:72](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L72)

___

### keys

• **keys**: `K`[]

#### Defined in

[packages/utils/src/Store.ts:87](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L87)

___

### length

• **length**: `number`

#### Defined in

[packages/utils/src/Store.ts:137](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L137)

___

### onGet

• **onGet**: `TParallelRegister`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `K` ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) ; `value`: `undefined` \| `V`  }, `undefined`\>

#### Defined in

[packages/utils/src/Store.ts:81](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L81)

___

### onMissingKeyError

• **onMissingKeyError**: `TParallelRegister`<{ `[K: string]`: `unknown`; `message`: `string`  }, `unknown`\>

#### Defined in

[packages/utils/src/Store.ts:84](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L84)

___

### onRemove

• **onRemove**: `TParallelRegister`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `K` ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) ; `value`: `undefined` \| `V`  }, `undefined`\>

#### Defined in

[packages/utils/src/Store.ts:83](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L83)

___

### onSet

• **onSet**: `TParallelRegister`<[`StoreEvent`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeevent)<`K`, `V`, [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>, `undefined`\>

#### Defined in

[packages/utils/src/Store.ts:82](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L82)

___

### values

• **values**: `V`[]

#### Defined in

[packages/utils/src/Store.ts:86](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L86)

## Methods

### add

▸ **add**(`value`, `eventOptions?`): [`StoreEvent`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeevent)<keyof `Dict`, `Dict`[keyof `Dict`], [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Dict`[keyof `Dict`] |
| `eventOptions?` | [`StoreEventOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeeventoptions)<[`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\> |

#### Returns

[`StoreEvent`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeevent)<keyof `Dict`, `Dict`[keyof `Dict`], [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>

#### Defined in

[packages/utils/src/Store.ts:102](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L102)

___

### clear

▸ **clear**(): `number`

#### Returns

`number`

#### Defined in

[packages/utils/src/Store.ts:116](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L116)

___

### get

▸ **get**<`Key`\>(`key`, `options?`): `Dict`[`Key`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `options?` | [`StoreEventOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeeventoptions)<[`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\> |

#### Returns

`Dict`[`Key`]

#### Defined in

[packages/utils/src/Store.ts:107](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L107)

___

### getOptional

▸ **getOptional**<`Key`\>(`key`, `options?`): `undefined` \| `Dict`[`Key`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `options?` | [`StoreEventOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeeventoptions)<[`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\> |

#### Returns

`undefined` \| `Dict`[`Key`]

#### Defined in

[packages/utils/src/Store.ts:109](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L109)

___

### groupBy

▸ **groupBy**<`Group`\>(`groups`, `options?`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Group` | extends ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `groups` | `Group` \| `Group`[] |
| `options?` | [`GroupByOptions`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GroupByOptions.md) |

#### Returns

`Object`

#### Defined in

[packages/utils/src/Store.ts:118](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L118)

___

### has

▸ **has**<`Key`\>(`key`, `options?`): `undefined` \| `Key`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `options?` | [`StoreEventOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeeventoptions)<[`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\> |

#### Returns

`undefined` \| `Key`

#### Defined in

[packages/utils/src/Store.ts:114](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L114)

___

### keyBy

▸ **keyBy**(`groups`, `options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `groups` | `Join`<`NestedPaths`<`Dict`[keyof `Dict`]\>, ``"."``\> \| `Join`<`NestedPaths`<`Dict`[keyof `Dict`]\>, ``"."``\>[] |
| `options?` | [`GroupByOptions`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GroupByOptions.md) |

#### Returns

`Object`

#### Defined in

[packages/utils/src/Store.ts:130](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L130)

___

### recordBy

▸ **recordBy**<`Group`\>(`groups`, `options?`): [`Store`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md)<[`RecordBy`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#recordby)<`Dict`, `Group`\>, `Extract`<[`GetFieldByDotNotation`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getfieldbydotnotation)<`Dict`[keyof `Dict`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>, [`RecordBy`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#recordby)<`Dict`, `Group`\>[`Extract`<[`GetFieldByDotNotation`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getfieldbydotnotation)<`Dict`[keyof `Dict`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Group` | extends ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `groups` | `Group` \| `Group`[] |
| `options?` | [`GroupByOptions`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GroupByOptions.md) |

#### Returns

[`Store`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md)<[`RecordBy`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#recordby)<`Dict`, `Group`\>, `Extract`<[`GetFieldByDotNotation`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getfieldbydotnotation)<`Dict`[keyof `Dict`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>, [`RecordBy`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#recordby)<`Dict`, `Group`\>[`Extract`<[`GetFieldByDotNotation`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getfieldbydotnotation)<`Dict`[keyof `Dict`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>]\>

#### Defined in

[packages/utils/src/Store.ts:125](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L125)

___

### remove

▸ **remove**<`Key`\>(`key`, `eventOptions?`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `eventOptions?` | [`StoreEventOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeeventoptions)<[`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `exists` | `undefined` \| `boolean` |
| `index` | `undefined` \| `number` |
| `key` | `undefined` \| `Key` |
| `length` | `undefined` \| `number` |
| `meta` | [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) |
| `value` | `undefined` \| `Dict`[`Key`] |

#### Defined in

[packages/utils/src/Store.ts:89](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L89)

___

### set

▸ **set**<`Key`\>(`key`, `value`, `eventOptions?`): [`StoreEvent`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeevent)<`Key`, `Dict`[`Key`], [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `value` | `Dict`[`Key`] |
| `eventOptions?` | [`StoreEventOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeeventoptions)<[`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\> |

#### Returns

[`StoreEvent`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeevent)<`Key`, `Dict`[`Key`], [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>

#### Defined in

[packages/utils/src/Store.ts:96](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L96)
