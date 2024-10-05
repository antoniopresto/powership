[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / IAppConfig

# Interface: IAppConfig<Definition\>

[Powership](../modules/Powership.md).IAppConfig

## Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`AppConfigInterface`](Powership.AppConfigInterface.md) = [`AppConfigInterface`](Powership.AppConfigInterface.md) |

## Hierarchy

- [`Store`](Powership.Store.md)<`Definition`\>

  ↳ **`IAppConfig`**

## Table of contents

### Properties

- [delete](Powership.IAppConfig.md#delete)
- [entries](Powership.IAppConfig.md#entries)
- [hashBy](Powership.IAppConfig.md#hashby)
- [hooks](Powership.IAppConfig.md#hooks)
- [keys](Powership.IAppConfig.md#keys)
- [length](Powership.IAppConfig.md#length)
- [onGet](Powership.IAppConfig.md#onget)
- [onMissingKeyError](Powership.IAppConfig.md#onmissingkeyerror)
- [onRemove](Powership.IAppConfig.md#onremove)
- [onSet](Powership.IAppConfig.md#onset)
- [values](Powership.IAppConfig.md#values)

### Methods

- [add](Powership.IAppConfig.md#add)
- [clear](Powership.IAppConfig.md#clear)
- [get](Powership.IAppConfig.md#get)
- [getOptional](Powership.IAppConfig.md#getoptional)
- [groupBy](Powership.IAppConfig.md#groupby)
- [has](Powership.IAppConfig.md#has)
- [keyBy](Powership.IAppConfig.md#keyby)
- [recordBy](Powership.IAppConfig.md#recordby)
- [remove](Powership.IAppConfig.md#remove)
- [set](Powership.IAppConfig.md#set)

## Properties

### delete

• **delete**: <Key\>(`key`: `Key`, `eventOptions?`: [`StoreEventOptions`](../modules/Powership.md#storeeventoptions)<[`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>) => { `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `Key` ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase) ; `value`: `undefined` \| `Definition`[`Key`]  }

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
| `value` | `undefined` \| `Definition`[`Key`] |

#### Inherited from

[Store](Powership.Store.md).[delete](Powership.Store.md#delete)

#### Defined in

packages/utils/out/Store.d.ts:56

___

### entries

• **entries**: [`Extract`<keyof `Definition`, `string`\>, `Definition`[`Extract`<keyof `Definition`, `string`\>]][]

#### Inherited from

[Store](Powership.Store.md).[entries](Powership.Store.md#entries)

#### Defined in

packages/utils/out/Store.d.ts:52

___

### hashBy

• **hashBy**: ``null`` \| `string`[]

#### Inherited from

[Store](Powership.Store.md).[hashBy](Powership.Store.md#hashby)

#### Defined in

packages/utils/out/Store.d.ts:38

___

### hooks

• **hooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | `SyncPlugin`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `Extract`<keyof `Definition`, `string`\> ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase) ; `value`: `undefined` \| `Definition`[`Extract`<keyof `Definition`, `string`\>]  }, `undefined`\> |
| `missingKeyError` | `SyncPlugin`<{ `[K: string]`: `unknown`; `message`: `string`  }, `unknown`\> |
| `remove` | `SyncPlugin`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `Extract`<keyof `Definition`, `string`\> ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase) ; `value`: `undefined` \| `Definition`[`Extract`<keyof `Definition`, `string`\>]  }, `undefined`\> |
| `set` | `SyncPlugin`<[`StoreEvent`](../modules/Powership.md#storeevent)<`Extract`<keyof `Definition`, `string`\>, `Definition`[`Extract`<keyof `Definition`, `string`\>], [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>, `undefined`\> |

#### Inherited from

[Store](Powership.Store.md).[hooks](Powership.Store.md#hooks)

#### Defined in

packages/utils/out/Store.d.ts:39

___

### keys

• **keys**: `Extract`<keyof `Definition`, `string`\>[]

#### Inherited from

[Store](Powership.Store.md).[keys](Powership.Store.md#keys)

#### Defined in

packages/utils/out/Store.d.ts:54

___

### length

• **length**: `number`

#### Inherited from

[Store](Powership.Store.md).[length](Powership.Store.md#length)

#### Defined in

packages/utils/out/Store.d.ts:70

___

### onGet

• **onGet**: `SyncPluginRegister`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `Extract`<keyof `Definition`, `string`\> ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase) ; `value`: `undefined` \| `Definition`[`Extract`<keyof `Definition`, `string`\>]  }, `undefined`\>

#### Inherited from

[Store](Powership.Store.md).[onGet](Powership.Store.md#onget)

#### Defined in

packages/utils/out/Store.d.ts:48

___

### onMissingKeyError

• **onMissingKeyError**: `SyncPluginRegister`<{ `[K: string]`: `unknown`; `message`: `string`  }, `unknown`\>

#### Inherited from

[Store](Powership.Store.md).[onMissingKeyError](Powership.Store.md#onmissingkeyerror)

#### Defined in

packages/utils/out/Store.d.ts:51

___

### onRemove

• **onRemove**: `SyncPluginRegister`<{ `exists`: `undefined` \| `boolean` ; `index`: `undefined` \| `number` ; `key`: `undefined` \| `Extract`<keyof `Definition`, `string`\> ; `length`: `undefined` \| `number` ; `meta`: [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase) ; `value`: `undefined` \| `Definition`[`Extract`<keyof `Definition`, `string`\>]  }, `undefined`\>

#### Inherited from

[Store](Powership.Store.md).[onRemove](Powership.Store.md#onremove)

#### Defined in

packages/utils/out/Store.d.ts:50

___

### onSet

• **onSet**: `SyncPluginRegister`<[`StoreEvent`](../modules/Powership.md#storeevent)<`Extract`<keyof `Definition`, `string`\>, `Definition`[`Extract`<keyof `Definition`, `string`\>], [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>, `undefined`\>

#### Inherited from

[Store](Powership.Store.md).[onSet](Powership.Store.md#onset)

#### Defined in

packages/utils/out/Store.d.ts:49

___

### values

• **values**: `Definition`[`Extract`<keyof `Definition`, `string`\>][]

#### Inherited from

[Store](Powership.Store.md).[values](Powership.Store.md#values)

#### Defined in

packages/utils/out/Store.d.ts:53

## Methods

### add

▸ **add**(`value`, `eventOptions?`): [`StoreEvent`](../modules/Powership.md#storeevent)<keyof `Definition`, `Definition`[keyof `Definition`], [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Definition`[keyof `Definition`] |
| `eventOptions?` | [`StoreEventOptions`](../modules/Powership.md#storeeventoptions)<[`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\> |

#### Returns

[`StoreEvent`](../modules/Powership.md#storeevent)<keyof `Definition`, `Definition`[keyof `Definition`], [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>

#### Inherited from

[Store](Powership.Store.md).[add](Powership.Store.md#add)

#### Defined in

packages/utils/out/Store.d.ts:58

___

### clear

▸ **clear**(): `number`

#### Returns

`number`

#### Inherited from

[Store](Powership.Store.md).[clear](Powership.Store.md#clear)

#### Defined in

packages/utils/out/Store.d.ts:62

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
| `options?` | [`StoreEventOptions`](../modules/Powership.md#storeeventoptions)<[`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\> |

#### Returns

`Definition`[`Key`]

#### Inherited from

[Store](Powership.Store.md).[get](Powership.Store.md#get)

#### Defined in

packages/utils/out/Store.d.ts:59

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
| `options?` | [`StoreEventOptions`](../modules/Powership.md#storeeventoptions)<[`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\> |

#### Returns

`undefined` \| `Definition`[`Key`]

#### Inherited from

[Store](Powership.Store.md).[getOptional](Powership.Store.md#getoptional)

#### Defined in

packages/utils/out/Store.d.ts:60

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

#### Inherited from

[Store](Powership.Store.md).[groupBy](Powership.Store.md#groupby)

#### Defined in

packages/utils/out/Store.d.ts:63

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

#### Inherited from

[Store](Powership.Store.md).[has](Powership.Store.md#has)

#### Defined in

packages/utils/out/Store.d.ts:61

___

### keyBy

▸ **keyBy**(`groups`, `options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `groups` | `Join`<`NestedPaths`<`Definition`[keyof `Definition`]\>, ``"."``\> \| `Join`<`NestedPaths`<`Definition`[keyof `Definition`]\>, ``"."``\>[] |
| `options?` | [`GroupByOptions`](Powership.GroupByOptions.md) |

#### Returns

`Object`

#### Inherited from

[Store](Powership.Store.md).[keyBy](Powership.Store.md#keyby)

#### Defined in

packages/utils/out/Store.d.ts:67

___

### recordBy

▸ **recordBy**<`Group`\>(`groups`, `options?`): [`Store`](Powership.Store.md)<[`RecordBy`](../modules/Powership.md#recordby)<`Definition`, `Group`\>, `Extract`<[`GetFieldByDotNotation`](../modules/Powership.TU.md#getfieldbydotnotation)<`Definition`[keyof `Definition`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>, [`RecordBy`](../modules/Powership.md#recordby)<`Definition`, `Group`\>[`Extract`<[`GetFieldByDotNotation`](../modules/Powership.TU.md#getfieldbydotnotation)<`Definition`[keyof `Definition`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>]\>

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

[`Store`](Powership.Store.md)<[`RecordBy`](../modules/Powership.md#recordby)<`Definition`, `Group`\>, `Extract`<[`GetFieldByDotNotation`](../modules/Powership.TU.md#getfieldbydotnotation)<`Definition`[keyof `Definition`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>, [`RecordBy`](../modules/Powership.md#recordby)<`Definition`, `Group`\>[`Extract`<[`GetFieldByDotNotation`](../modules/Powership.TU.md#getfieldbydotnotation)<`Definition`[keyof `Definition`], `Group`\> extends `Key` ? `Key` extends `string` \| `number` ? `Key` : `string` : `never`, `string`\>]\>

#### Inherited from

[Store](Powership.Store.md).[recordBy](Powership.Store.md#recordby)

#### Defined in

packages/utils/out/Store.d.ts:66

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
| `value` | `undefined` \| `Definition`[`Key`] |

#### Inherited from

[Store](Powership.Store.md).[remove](Powership.Store.md#remove)

#### Defined in

packages/utils/out/Store.d.ts:55

___

### set

▸ **set**<`Key`\>(`key`, `value`, `eventOptions?`): [`StoreEvent`](../modules/Powership.md#storeevent)<`Key`, `Definition`[`Key`], [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `value` | `Definition`[`Key`] |
| `eventOptions?` | [`StoreEventOptions`](../modules/Powership.md#storeeventoptions)<[`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\> |

#### Returns

[`StoreEvent`](../modules/Powership.md#storeevent)<`Key`, `Definition`[`Key`], [`EventMetadataBase`](../modules/Powership.md#eventmetadatabase)\>

#### Inherited from

[Store](Powership.Store.md).[set](Powership.Store.md#set)

#### Defined in

packages/utils/out/Store.d.ts:57
