[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / StrictMap

# Class: StrictMap<K, V\>

[Powership](../modules/Powership.md).StrictMap

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Table of contents

### Constructors

- [constructor](Powership.StrictMap.md#constructor)

### Properties

- [clear](Powership.StrictMap.md#clear)
- [delete](Powership.StrictMap.md#delete)
- [entries](Powership.StrictMap.md#entries)
- [has](Powership.StrictMap.md#has)
- [keys](Powership.StrictMap.md#keys)
- [nativeMap](Powership.StrictMap.md#nativemap)
- [set](Powership.StrictMap.md#set)
- [values](Powership.StrictMap.md#values)

### Accessors

- [size](Powership.StrictMap.md#size)

### Methods

- [ensure](Powership.StrictMap.md#ensure)
- [get](Powership.StrictMap.md#get)

## Constructors

### constructor

• **new StrictMap**<`K`, `V`\>()

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Defined in

packages/utils/out/StrictMap.d.ts:6

## Properties

### clear

• **clear**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

packages/utils/out/StrictMap.d.ts:13

___

### delete

• **delete**: (`key`: `K`) => `boolean`

#### Type declaration

▸ (`key`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

##### Returns

`boolean`

#### Defined in

packages/utils/out/StrictMap.d.ts:14

___

### entries

• **entries**: () => `IterableIterator`<[`K`, `V`]\>

#### Type declaration

▸ (): `IterableIterator`<[`K`, `V`]\>

##### Returns

`IterableIterator`<[`K`, `V`]\>

#### Defined in

packages/utils/out/StrictMap.d.ts:12

___

### has

• **has**: (`key`: `any`) => `boolean`

#### Type declaration

▸ (`key`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

##### Returns

`boolean`

#### Defined in

packages/utils/out/StrictMap.d.ts:10

___

### keys

• **keys**: () => `IterableIterator`<`K`\>

#### Type declaration

▸ (): `IterableIterator`<`K`\>

##### Returns

`IterableIterator`<`K`\>

#### Defined in

packages/utils/out/StrictMap.d.ts:11

___

### nativeMap

• **nativeMap**: `Map`<`K`, `V`\>

#### Defined in

packages/utils/out/StrictMap.d.ts:5

___

### set

• **set**: (`key`: `K`, `value`: `V`) => `Map`<`K`, `V`\>

#### Type declaration

▸ (`key`, `value`): `Map`<`K`, `V`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

##### Returns

`Map`<`K`, `V`\>

#### Defined in

packages/utils/out/StrictMap.d.ts:9

___

### values

• **values**: () => `IterableIterator`<`V`\>

#### Type declaration

▸ (): `IterableIterator`<`V`\>

##### Returns

`IterableIterator`<`V`\>

#### Defined in

packages/utils/out/StrictMap.d.ts:15

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

packages/utils/out/StrictMap.d.ts:16

## Methods

### ensure

▸ **ensure**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`void`

#### Defined in

packages/utils/out/StrictMap.d.ts:7

___

### get

▸ **get**(`key`, `options?`): `NonNullable`<`V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `options?` | [`StrictMapOptions`](../interfaces/Powership.StrictMapOptions.md)<`K`, `V`\> |

#### Returns

`NonNullable`<`V`\>

#### Defined in

packages/utils/out/StrictMap.d.ts:8
