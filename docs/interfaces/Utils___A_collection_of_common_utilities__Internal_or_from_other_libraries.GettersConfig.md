[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / GettersConfig

# Interface: GettersConfig<Parent, Value\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).GettersConfig

## Type parameters

| Name |
| :------ |
| `Parent` |
| `Value` |

## Hierarchy

- [`GetterAttributes`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GetterAttributes.md)

  ↳ **`GettersConfig`**

## Table of contents

### Properties

- [cache](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GettersConfig.md#cache)
- [configurable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GettersConfig.md#configurable)
- [enumerable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GettersConfig.md#enumerable)
- [get](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GettersConfig.md#get)
- [writable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GettersConfig.md#writable)

## Properties

### cache

• `Optional` **cache**: `boolean`

#### Inherited from

[GetterAttributes](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GetterAttributes.md).[cache](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GetterAttributes.md#cache)

#### Defined in

[packages/utils/src/getters/defineGetters.ts:5](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/getters/defineGetters.ts#L5)

___

### configurable

• `Optional` **configurable**: `boolean`

#### Inherited from

[GetterAttributes](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GetterAttributes.md).[configurable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GetterAttributes.md#configurable)

#### Defined in

[packages/utils/src/getters/defineGetters.ts:3](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/getters/defineGetters.ts#L3)

___

### enumerable

• `Optional` **enumerable**: `boolean`

#### Inherited from

[GetterAttributes](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GetterAttributes.md).[enumerable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GetterAttributes.md#enumerable)

#### Defined in

[packages/utils/src/getters/defineGetters.ts:2](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/getters/defineGetters.ts#L2)

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

[packages/utils/src/getters/defineGetters.ts:9](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/getters/defineGetters.ts#L9)

___

### writable

• `Optional` **writable**: `boolean`

#### Inherited from

[GetterAttributes](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GetterAttributes.md).[writable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GetterAttributes.md#writable)

#### Defined in

[packages/utils/src/getters/defineGetters.ts:4](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/getters/defineGetters.ts#L4)
