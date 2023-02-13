[Backland](../README.md) / [Modules](../modules.md) / [Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md) / ExtendType

# Interface: ExtendType<Input\>

[Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md).ExtendType

## Type parameters

| Name |
| :------ |
| `Input` |

## Table of contents

### Properties

- [definition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#definition)

### Methods

- [def](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#def)
- [extend](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#extend)
- [graphType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#graphtype)
- [list](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#list)
- [objectType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#objecttype)
- [optional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#optional)
- [required](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#required)
- [single](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md#single)

## Properties

### definition

• **definition**: [`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>

#### Defined in

[packages/schema/src/extendType.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L21)

## Methods

### def

▸ **def**(): [`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>

#### Returns

[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>

#### Defined in

[packages/schema/src/extendType.ts:23](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L23)

___

### extend

▸ **extend**<`V`\>(`value`): [`ExtendType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<`Omit`<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, keyof `V`\> & `V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`FinalFieldDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` \| (`current`: [`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>) => `V` |

#### Returns

[`ExtendType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<`Omit`<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, keyof `V`\> & `V`\>

#### Defined in

[packages/schema/src/extendType.ts:25](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L25)

___

### graphType

▸ **graphType**(`name?`): [`GraphType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, [`FinalFieldDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`GraphType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, [`FinalFieldDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)\>\>

#### Defined in

[packages/schema/src/extendType.ts:29](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L29)

___

### list

▸ **list**(): [`ExtendType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`MakeTypeList`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#maketypelist)<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>\>\>

#### Returns

[`ExtendType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`MakeTypeList`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#maketypelist)<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>\>\>

#### Defined in

[packages/schema/src/extendType.ts:46](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L46)

___

### objectType

▸ **objectType**(`name?`): [`ObjectType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition);  }  }\>[``"def"``], `_HandleInput`<`Cast`<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition);  }  }\>[``"def"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`ObjectType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition);  }  }\>[``"def"``], `_HandleInput`<`Cast`<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition);  }  }\>[``"def"``]\>\>

#### Defined in

[packages/schema/src/extendType.ts:33](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L33)

___

### optional

▸ **optional**(): [`ExtendType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `optional`: ``true``  }\>\>

#### Returns

[`ExtendType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `optional`: ``true``  }\>\>

#### Defined in

[packages/schema/src/extendType.ts:42](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L42)

___

### required

▸ **required**(): [`ExtendType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `optional`: ``false``  }\>\>

#### Returns

[`ExtendType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `optional`: ``false``  }\>\>

#### Defined in

[packages/schema/src/extendType.ts:44](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L44)

___

### single

▸ **single**(): [`ExtendType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `list`: ``false``  }\>\>

#### Returns

[`ExtendType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`Input`\>, { `list`: ``false``  }\>\>

#### Defined in

[packages/schema/src/extendType.ts:48](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L48)
