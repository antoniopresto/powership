[Powership](../README.md) / [Modules](../modules.md) / [Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md) / ExtendType

# Interface: ExtendType<Input\>

[Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md).ExtendType

## Type parameters

| Name |
| :------ |
| `Input` |

## Table of contents

### Properties

- [definition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#definition)

### Methods

- [def](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#def)
- [extend](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#extend)
- [graphType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#graphtype)
- [list](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#list)
- [objectType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#objecttype)
- [optional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#optional)
- [required](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#required)
- [single](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#single)

## Properties

### definition

• **definition**: [`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>

#### Defined in

packages/schema/src/extendType.ts:21

## Methods

### def

▸ **def**(): [`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>

#### Returns

[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>

#### Defined in

packages/schema/src/extendType.ts:23

___

### extend

▸ **extend**<`V`\>(`value`): [`ExtendType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<`Omit`<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, keyof `V`\> & `V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`FinalFieldDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` \| (`current`: [`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>) => `V` |

#### Returns

[`ExtendType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<`Omit`<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, keyof `V`\> & `V`\>

#### Defined in

packages/schema/src/extendType.ts:25

___

### graphType

▸ **graphType**(`name?`): [`GraphType`](../classes/Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, [`FinalFieldDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`GraphType`](../classes/Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, [`FinalFieldDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)\>\>

#### Defined in

packages/schema/src/extendType.ts:29

___

### list

▸ **list**(): [`ExtendType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`MakeTypeList`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#maketypelist)<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>\>\>

#### Returns

[`ExtendType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`MakeTypeList`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#maketypelist)<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>\>\>

#### Defined in

packages/schema/src/extendType.ts:46

___

### objectType

▸ **objectType**(`name?`): [`ObjectType`](../classes/Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition);  }  }\>[``"def"``], `_HandleInput`<`Cast`<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition);  }  }\>[``"def"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`ObjectType`](../classes/Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition);  }  }\>[``"def"``], `_HandleInput`<`Cast`<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition);  }  }\>[``"def"``]\>\>

#### Defined in

packages/schema/src/extendType.ts:33

___

### optional

▸ **optional**(): [`ExtendType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `optional`: ``true``  }\>\>

#### Returns

[`ExtendType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `optional`: ``true``  }\>\>

#### Defined in

packages/schema/src/extendType.ts:42

___

### required

▸ **required**(): [`ExtendType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `optional`: ``false``  }\>\>

#### Returns

[`ExtendType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `optional`: ``false``  }\>\>

#### Defined in

packages/schema/src/extendType.ts:44

___

### single

▸ **single**(): [`ExtendType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `list`: ``false``  }\>\>

#### Returns

[`ExtendType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `list`: ``false``  }\>\>

#### Defined in

packages/schema/src/extendType.ts:48
