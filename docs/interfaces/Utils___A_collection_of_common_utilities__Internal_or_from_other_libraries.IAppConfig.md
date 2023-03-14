[Solarwind](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / IAppConfig

# Interface: IAppConfig<Definition\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).IAppConfig

## Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`AppConfigInterface`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.AppConfigInterface.md) = [`AppConfigInterface`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.AppConfigInterface.md) |

## Hierarchy

- [`Store`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md)<`Definition`\>

  ↳ **`IAppConfig`**

## Table of contents

### Properties

- [delete](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#delete)
- [entries](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#entries)
- [hashBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#hashby)
- [hooks](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#hooks)
- [keys](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#keys)
- [length](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#length)
- [onGet](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#onget)
- [onMissingKeyError](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#onmissingkeyerror)
- [onRemove](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#onremove)
- [onSet](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#onset)
- [values](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#values)

### Methods

- [add](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#add)
- [clear](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#clear)
- [get](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#get)
- [getOptional](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#getoptional)
- [groupBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#groupby)
- [has](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#has)
- [keyBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#keyby)
- [recordBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#recordby)
- [remove](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#remove)
- [set](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md#set)

## Properties

### delete

• **delete**: <Key\>(`key`: `Key`, `eventOptions?`: [`StoreEventOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeeventoptions)<[`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>) => { `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `Key` ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) ; `value`: `undefined` \| `Definition`[`Key`]  }

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
| `value` | `undefined` \| `Definition`[`Key`] |

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[delete](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#delete)

#### Defined in

[packages/utils/src/Store.ts:94](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L94)

___

### entries

• **entries**: [`Extract`<keyof `Definition`, `string`\>, `Definition`[`Extract`<keyof `Definition`, `string`\>]][]

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[entries](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#entries)

#### Defined in

[packages/utils/src/Store.ts:85](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L85)

___

### hashBy

• **hashBy**: ``null`` \| `string`[]

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[hashBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#hashby)

#### Defined in

[packages/utils/src/Store.ts:70](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L70)

___

### hooks

• **hooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | `Parallel`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `Extract`<keyof `Definition`, `string`\> ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) ; `value`: `undefined` \| `Definition`[`Extract`<keyof `Definition`, `string`\>]  }, `undefined`\> |
| `missingKeyError` | `Parallel`<{ `[K: string]`: `unknown`; `message`: `string`  }, `unknown`\> |
| `remove` | `Parallel`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `Extract`<keyof `Definition`, `string`\> ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) ; `value`: `undefined` \| `Definition`[`Extract`<keyof `Definition`, `string`\>]  }, `undefined`\> |
| `set` | `Parallel`<[`StoreEvent`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeevent)<`Extract`<keyof `Definition`, `string`\>, `Definition`[`Extract`<keyof `Definition`, `string`\>], [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>, `undefined`\> |

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[hooks](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#hooks)

#### Defined in

[packages/utils/src/Store.ts:72](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L72)

___

### keys

• **keys**: `Extract`<keyof `Definition`, `string`\>[]

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[keys](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#keys)

#### Defined in

[packages/utils/src/Store.ts:87](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L87)

___

### length

• **length**: `number`

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[length](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#length)

#### Defined in

[packages/utils/src/Store.ts:137](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L137)

___

### onGet

• **onGet**: `TParallelRegister`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `Extract`<keyof `Definition`, `string`\> ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) ; `value`: `undefined` \| `Definition`[`Extract`<keyof `Definition`, `string`\>]  }, `undefined`\>

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[onGet](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#onget)

#### Defined in

[packages/utils/src/Store.ts:81](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L81)

___

### onMissingKeyError

• **onMissingKeyError**: `TParallelRegister`<{ `[K: string]`: `unknown`; `message`: `string`  }, `unknown`\>

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[onMissingKeyError](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#onmissingkeyerror)

#### Defined in

[packages/utils/src/Store.ts:84](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L84)

___

### onRemove

• **onRemove**: `TParallelRegister`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `Extract`<keyof `Definition`, `string`\> ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) ; `value`: `undefined` \| `Definition`[`Extract`<keyof `Definition`, `string`\>]  }, `undefined`\>

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[onRemove](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#onremove)

#### Defined in

[packages/utils/src/Store.ts:83](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L83)

___

### onSet

• **onSet**: `TParallelRegister`<[`StoreEvent`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeevent)<`Extract`<keyof `Definition`, `string`\>, `Definition`[`Extract`<keyof `Definition`, `string`\>], [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>, `undefined`\>

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[onSet](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#onset)

#### Defined in

[packages/utils/src/Store.ts:82](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L82)

___

### values

• **values**: `Definition`[`Extract`<keyof `Definition`, `string`\>][]

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[values](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#values)

#### Defined in

[packages/utils/src/Store.ts:86](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L86)

## Methods

### add

▸ **add**(`value`, `eventOptions?`): [`StoreEvent`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeevent)<keyof `Definition`, `Definition`[keyof `Definition`], [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Definition`[keyof `Definition`] |
| `eventOptions?` | [`StoreEventOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeeventoptions)<[`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\> |

#### Returns

[`StoreEvent`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeevent)<keyof `Definition`, `Definition`[keyof `Definition`], [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[add](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#add)

#### Defined in

[packages/utils/src/Store.ts:102](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L102)

___

### clear

▸ **clear**(): `number`

#### Returns

`number`

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[clear](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#clear)

#### Defined in

[packages/utils/src/Store.ts:116](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L116)

___

### get

▸ **get**<`Key`\>(`key`, `options?`): `Definition`[`Key`]

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

`Definition`[`Key`]

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[get](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#get)

#### Defined in

[packages/utils/src/Store.ts:107](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L107)

___

### getOptional

▸ **getOptional**<`Key`\>(`key`, `options?`): `undefined` \| `Definition`[`Key`]

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

`undefined` \| `Definition`[`Key`]

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[getOptional](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#getoptional)

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

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[groupBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#groupby)

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

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[has](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#has)

#### Defined in

[packages/utils/src/Store.ts:114](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L114)

___

### keyBy

▸ **keyBy**(`groups`, `options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `groups` | `Join`<`NestedPaths`<`Definition`[keyof `Definition`]\>, ``"."``\> \| `Join`<`NestedPaths`<`Definition`[keyof `Definition`]\>, ``"."``\>[] |
| `options?` | [`GroupByOptions`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GroupByOptions.md) |

#### Returns

`Object`

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[keyBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#keyby)

#### Defined in

[packages/utils/src/Store.ts:130](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L130)

___

### recordBy

▸ **recordBy**<`Group`\>(`groups`, `options?`): [`Store`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md)<[`RecordBy`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#recordby)<`Definition`, `Group`\>, `Extract`<[`GetFieldByDotNotation`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getfieldbydotnotation)<`Definition`[keyof `Definition`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>, [`RecordBy`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#recordby)<`Definition`, `Group`\>[`Extract`<[`GetFieldByDotNotation`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getfieldbydotnotation)<`Definition`[keyof `Definition`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>]\>

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

[`Store`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md)<[`RecordBy`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#recordby)<`Definition`, `Group`\>, `Extract`<[`GetFieldByDotNotation`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getfieldbydotnotation)<`Definition`[keyof `Definition`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>, [`RecordBy`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#recordby)<`Definition`, `Group`\>[`Extract`<[`GetFieldByDotNotation`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getfieldbydotnotation)<`Definition`[keyof `Definition`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>]\>

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[recordBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#recordby)

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
| `value` | `undefined` \| `Definition`[`Key`] |

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[remove](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#remove)

#### Defined in

[packages/utils/src/Store.ts:89](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L89)

___

### set

▸ **set**<`Key`\>(`key`, `value`, `eventOptions?`): [`StoreEvent`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeevent)<`Key`, `Definition`[`Key`], [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `value` | `Definition`[`Key`] |
| `eventOptions?` | [`StoreEventOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeeventoptions)<[`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\> |

#### Returns

[`StoreEvent`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeevent)<`Key`, `Definition`[`Key`], [`EventMetadataBase`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)\>

#### Inherited from

[Store](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md).[set](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md#set)

#### Defined in

[packages/utils/src/Store.ts:96](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L96)