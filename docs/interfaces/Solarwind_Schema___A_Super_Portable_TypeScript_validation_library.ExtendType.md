[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind Schema - A Super Portable TypeScript validation library](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md) / ExtendType

# Interface: ExtendType<Input\>

[Solarwind Schema - A Super Portable TypeScript validation library](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md).ExtendType

## Type parameters

| Name |
| :------ |
| `Input` |

## Table of contents

### Properties

- [definition](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#definition)

### Methods

- [def](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#def)
- [extend](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#extend)
- [graphType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#graphtype)
- [list](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#list)
- [objectType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#objecttype)
- [optional](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#optional)
- [required](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#required)
- [single](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#single)

## Properties

### definition

• **definition**: [`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>

#### Defined in

[packages/schema/src/extendType.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L21)

## Methods

### def

▸ **def**(): [`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>

#### Returns

[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>

#### Defined in

[packages/schema/src/extendType.ts:23](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L23)

___

### extend

▸ **extend**<`V`\>(`value`): [`ExtendType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<`Omit`<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, keyof `V`\> & `V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`FinalFieldDefinition`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` \| (`current`: [`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>) => `V` |

#### Returns

[`ExtendType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<`Omit`<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, keyof `V`\> & `V`\>

#### Defined in

[packages/schema/src/extendType.ts:25](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L25)

___

### graphType

▸ **graphType**(`name?`): [`GraphType`](../classes/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, [`FinalFieldDefinition`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`GraphType`](../classes/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, [`FinalFieldDefinition`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)\>\>

#### Defined in

[packages/schema/src/extendType.ts:29](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L29)

___

### list

▸ **list**(): [`ExtendType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`MakeTypeList`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#maketypelist)<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>\>\>

#### Returns

[`ExtendType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`MakeTypeList`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#maketypelist)<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>\>\>

#### Defined in

[packages/schema/src/extendType.ts:46](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L46)

___

### objectType

▸ **objectType**(`name?`): [`ObjectType`](../classes/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition);  }  }\>[``"def"``], `_HandleInput`<`Cast`<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition);  }  }\>[``"def"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`ObjectType`](../classes/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition);  }  }\>[``"def"``], `_HandleInput`<`Cast`<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition);  }  }\>[``"def"``]\>\>

#### Defined in

[packages/schema/src/extendType.ts:33](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L33)

___

### optional

▸ **optional**(): [`ExtendType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `optional`: ``true``  }\>\>

#### Returns

[`ExtendType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `optional`: ``true``  }\>\>

#### Defined in

[packages/schema/src/extendType.ts:42](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L42)

___

### required

▸ **required**(): [`ExtendType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `optional`: ``false``  }\>\>

#### Returns

[`ExtendType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `optional`: ``false``  }\>\>

#### Defined in

[packages/schema/src/extendType.ts:44](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L44)

___

### single

▸ **single**(): [`ExtendType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `list`: ``false``  }\>\>

#### Returns

[`ExtendType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `list`: ``false``  }\>\>

#### Defined in

[packages/schema/src/extendType.ts:48](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L48)
