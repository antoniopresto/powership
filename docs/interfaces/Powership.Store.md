[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / Store

# Interface: Store<Dict, K, V\>

[Powership](../modules/Powership.md).Store

## Type parameters

| Name | Type |
| :------ | :------ |
| `Dict` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |
| `K` | extends `Extract`<keyof `Dict`, `string`\> = `Extract`<keyof `Dict`, `string`\> |
| `V` | extends `Dict`[`Extract`<keyof `Dict`, `string`\>] = `Dict`[`Extract`<keyof `Dict`, `string`\>] |

## Hierarchy

- **`Store`**

  ↳ [`IAppConfig`](Powership.IAppConfig.md)

## Table of contents

### Properties

- [delete](Powership.Store.md#delete)
- [entries](Powership.Store.md#entries)
- [hashBy](Powership.Store.md#hashby)
- [hooks](Powership.Store.md#hooks)
- [keys](Powership.Store.md#keys)
- [length](Powership.Store.md#length)
- [onGet](Powership.Store.md#onget)
- [onMissingKeyError](Powership.Store.md#onmissingkeyerror)
- [onRemove](Powership.Store.md#onremove)
- [onSet](Powership.Store.md#onset)
- [values](Powership.Store.md#values)

### Methods

- [add](Powership.Store.md#add)
- [clear](Powership.Store.md#clear)
- [get](Powership.Store.md#get)
- [getOptional](Powership.Store.md#getoptional)
- [groupBy](Powership.Store.md#groupby)
- [has](Powership.Store.md#has)
- [keyBy](Powership.Store.md#keyby)
- [recordBy](Powership.Store.md#recordby)
- [remove](Powership.Store.md#remove)
- [set](Powership.Store.md#set)

## Properties

### delete

• **delete**: <Key\>(`key`: `Key`, `eventOptions?`: [`StoreEventOptions`](../modules/Powership.md#storeeventoptions)<[`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>) => { `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `Key` ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase) ; `value`: `undefined` \| `Dict`[`Key`]  }

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
| `eventOptions?` | [`StoreEventOptions`](../modules/Powership.md#storeeventoptions)<[`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\> |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `exists` | `undefined` \| `boolean` |
| `index` | `undefined` \| `number` |
| `key` | `undefined` \| `Key` |
| `length` | `undefined` \| `number` |
| `meta` | [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase) |
| `value` | `undefined` \| `Dict`[`Key`] |

#### Defined in

packages/utils/lib/Store.d.ts:56

___

### entries

• **entries**: [`K`, `V`][]

#### Defined in

packages/utils/lib/Store.d.ts:52

___

### hashBy

• **hashBy**: ``null`` \| `string`[]

#### Defined in

packages/utils/lib/Store.d.ts:38

___

### hooks

• **hooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | `SyncPlugin`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `K` ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase) ; `value`: `undefined` \| `V`  }, `undefined`\> |
| `missingKeyError` | `SyncPlugin`<{ `[K: string]`: `unknown`; `message`: `string`  }, `unknown`\> |
| `remove` | `SyncPlugin`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `K` ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase) ; `value`: `undefined` \| `V`  }, `undefined`\> |
| `set` | `SyncPlugin`<[`StoreEvent`](../modules/Powership.md#storeevent)<`K`, `V`, [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>, `undefined`\> |

#### Defined in

packages/utils/lib/Store.d.ts:39

___

### keys

• **keys**: `K`[]

#### Defined in

packages/utils/lib/Store.d.ts:54

___

### length

• **length**: `number`

#### Defined in

packages/utils/lib/Store.d.ts:70

___

### onGet

• **onGet**: `SyncPluginRegister`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `K` ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase) ; `value`: `undefined` \| `V`  }, `undefined`\>

#### Defined in

packages/utils/lib/Store.d.ts:48

___

### onMissingKeyError

• **onMissingKeyError**: `SyncPluginRegister`<{ `[K: string]`: `unknown`; `message`: `string`  }, `unknown`\>

#### Defined in

packages/utils/lib/Store.d.ts:51

___

### onRemove

• **onRemove**: `SyncPluginRegister`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `K` ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase) ; `value`: `undefined` \| `V`  }, `undefined`\>

#### Defined in

packages/utils/lib/Store.d.ts:50

___

### onSet

• **onSet**: `SyncPluginRegister`<[`StoreEvent`](../modules/Powership.md#storeevent)<`K`, `V`, [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>, `undefined`\>

#### Defined in

packages/utils/lib/Store.d.ts:49

___

### values

• **values**: `V`[]

#### Defined in

packages/utils/lib/Store.d.ts:53

## Methods

### add

▸ **add**(`value`, `eventOptions?`): [`StoreEvent`](../modules/Powership.md#storeevent)<keyof `Dict`, `Dict`[keyof `Dict`], [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Dict`[keyof `Dict`] |
| `eventOptions?` | [`StoreEventOptions`](../modules/Powership.md#storeeventoptions)<[`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\> |

#### Returns

[`StoreEvent`](../modules/Powership.md#storeevent)<keyof `Dict`, `Dict`[keyof `Dict`], [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>

#### Defined in

packages/utils/lib/Store.d.ts:58

___

### clear

▸ **clear**(): `number`

#### Returns

`number`

#### Defined in

packages/utils/lib/Store.d.ts:62

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
| `options?` | [`StoreEventOptions`](../modules/Powership.md#storeeventoptions)<[`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\> |

#### Returns

`Dict`[`Key`]

#### Defined in

packages/utils/lib/Store.d.ts:59

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
| `options?` | [`StoreEventOptions`](../modules/Powership.md#storeeventoptions)<[`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\> |

#### Returns

`undefined` \| `Dict`[`Key`]

#### Defined in

packages/utils/lib/Store.d.ts:60

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
| `options?` | [`GroupByOptions`](Powership.GroupByOptions.md) |

#### Returns

`Object`

#### Defined in

packages/utils/lib/Store.d.ts:63

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
| `options?` | [`StoreEventOptions`](../modules/Powership.md#storeeventoptions)<[`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\> |

#### Returns

`undefined` \| `Key`

#### Defined in

packages/utils/lib/Store.d.ts:61

___

### keyBy

▸ **keyBy**(`groups`, `options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `groups` | `Join`<`NestedPaths`<`Dict`[keyof `Dict`]\>, ``"."``\> \| `Join`<`NestedPaths`<`Dict`[keyof `Dict`]\>, ``"."``\>[] |
| `options?` | [`GroupByOptions`](Powership.GroupByOptions.md) |

#### Returns

`Object`

#### Defined in

packages/utils/lib/Store.d.ts:67

___

### recordBy

▸ **recordBy**<`Group`\>(`groups`, `options?`): [`Store`](Powership.Store.md)<[`RecordBy`](../modules/Powership.md#recordby)<`Dict`, `Group`\>, `Extract`<[`GetFieldByDotNotation`](../modules/Powership.TU.md#getfieldbydotnotation)<`Dict`[keyof `Dict`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>, [`RecordBy`](../modules/Powership.md#recordby)<`Dict`, `Group`\>[`Extract`<[`GetFieldByDotNotation`](../modules/Powership.TU.md#getfieldbydotnotation)<`Dict`[keyof `Dict`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Group` | extends ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `groups` | `Group` \| `Group`[] |
| `options?` | [`GroupByOptions`](Powership.GroupByOptions.md) |

#### Returns

[`Store`](Powership.Store.md)<[`RecordBy`](../modules/Powership.md#recordby)<`Dict`, `Group`\>, `Extract`<[`GetFieldByDotNotation`](../modules/Powership.TU.md#getfieldbydotnotation)<`Dict`[keyof `Dict`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>, [`RecordBy`](../modules/Powership.md#recordby)<`Dict`, `Group`\>[`Extract`<[`GetFieldByDotNotation`](../modules/Powership.TU.md#getfieldbydotnotation)<`Dict`[keyof `Dict`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>]\>

#### Defined in

packages/utils/lib/Store.d.ts:66

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
| `eventOptions?` | [`StoreEventOptions`](../modules/Powership.md#storeeventoptions)<[`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `exists` | `undefined` \| `boolean` |
| `index` | `undefined` \| `number` |
| `key` | `undefined` \| `Key` |
| `length` | `undefined` \| `number` |
| `meta` | [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase) |
| `value` | `undefined` \| `Dict`[`Key`] |

#### Defined in

packages/utils/lib/Store.d.ts:55

___

### set

▸ **set**<`Key`\>(`key`, `value`, `eventOptions?`): [`StoreEvent`](../modules/Powership.md#storeevent)<`Key`, `Dict`[`Key`], [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `value` | `Dict`[`Key`] |
| `eventOptions?` | [`StoreEventOptions`](../modules/Powership.md#storeeventoptions)<[`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\> |

#### Returns

[`StoreEvent`](../modules/Powership.md#storeevent)<`Key`, `Dict`[`Key`], [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>

#### Defined in

packages/utils/lib/Store.d.ts:57
