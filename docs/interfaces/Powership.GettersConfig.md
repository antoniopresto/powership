[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / GettersConfig

# Interface: GettersConfig<Parent, Value\>

[Powership](../modules/Powership.md).GettersConfig

## Type parameters

| Name |
| :------ |
| `Parent` |
| `Value` |

## Hierarchy

- [`GetterAttributes`](Powership.GetterAttributes.md)

  ↳ **`GettersConfig`**

## Table of contents

### Properties

- [cache](Powership.GettersConfig.md#cache)
- [configurable](Powership.GettersConfig.md#configurable)
- [enumerable](Powership.GettersConfig.md#enumerable)
- [get](Powership.GettersConfig.md#get)
- [writable](Powership.GettersConfig.md#writable)

## Properties

### cache

• `Optional` **cache**: `boolean`

#### Inherited from

[GetterAttributes](Powership.GetterAttributes.md).[cache](Powership.GetterAttributes.md#cache)

#### Defined in

packages/utils/out/getters/defineGetters.d.ts:5

___

### configurable

• `Optional` **configurable**: `boolean`

#### Inherited from

[GetterAttributes](Powership.GetterAttributes.md).[configurable](Powership.GetterAttributes.md#configurable)

#### Defined in

packages/utils/out/getters/defineGetters.d.ts:3

___

### enumerable

• `Optional` **enumerable**: `boolean`

#### Inherited from

[GetterAttributes](Powership.GetterAttributes.md).[enumerable](Powership.GetterAttributes.md#enumerable)

#### Defined in

packages/utils/out/getters/defineGetters.d.ts:2

___

### get

• **get**: (`parent`: `Parent`) => `Value`

#### Type declaration

▸ (`parent`): `Value`

##### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Parent` |

##### Returns

`Value`

#### Defined in

packages/utils/out/getters/defineGetters.d.ts:8

___

### writable

• `Optional` **writable**: `boolean`

#### Inherited from

[GetterAttributes](Powership.GetterAttributes.md).[writable](Powership.GetterAttributes.md#writable)

#### Defined in

packages/utils/out/getters/defineGetters.d.ts:4
