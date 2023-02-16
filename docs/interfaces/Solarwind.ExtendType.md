[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / ExtendType

# Interface: ExtendType<Input\>

[Solarwind](../modules/Solarwind.md).ExtendType

## Type parameters

| Name |
| :------ |
| `Input` |

## Table of contents

### Properties

- [definition](Solarwind.ExtendType.md#definition)

### Methods

- [def](Solarwind.ExtendType.md#def)
- [extend](Solarwind.ExtendType.md#extend)
- [graphType](Solarwind.ExtendType.md#graphtype)
- [list](Solarwind.ExtendType.md#list)
- [objectType](Solarwind.ExtendType.md#objecttype)
- [optional](Solarwind.ExtendType.md#optional)
- [required](Solarwind.ExtendType.md#required)
- [single](Solarwind.ExtendType.md#single)

## Properties

### definition

• **definition**: [`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>

#### Defined in

packages/schema/lib/extendType.d.ts:6

## Methods

### def

▸ **def**(): [`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>

#### Returns

[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>

#### Defined in

packages/schema/lib/extendType.d.ts:7

___

### extend

▸ **extend**<`V`\>(`value`): [`ExtendType`](Solarwind.ExtendType.md)<`Omit`<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, keyof `V`\> & `V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`FinalFieldDefinition`](../modules/Solarwind.md#finalfielddefinition) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` \| (`current`: [`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>) => `V` |

#### Returns

[`ExtendType`](Solarwind.ExtendType.md)<`Omit`<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, keyof `V`\> & `V`\>

#### Defined in

packages/schema/lib/extendType.d.ts:8

___

### graphType

▸ **graphType**(`name?`): [`GraphType`](../classes/Solarwind.GraphType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, [`FinalFieldDefinition`](../modules/Solarwind.md#finalfielddefinition)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`GraphType`](../classes/Solarwind.GraphType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, [`FinalFieldDefinition`](../modules/Solarwind.md#finalfielddefinition)\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:9

___

### list

▸ **list**(): [`ExtendType`](Solarwind.ExtendType.md)<[`MakeTypeList`](../modules/Solarwind.md#maketypelist)<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>\>\>

#### Returns

[`ExtendType`](Solarwind.ExtendType.md)<[`MakeTypeList`](../modules/Solarwind.md#maketypelist)<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:17

___

### objectType

▸ **objectType**(`name?`): [`ObjectType`](../classes/Solarwind.ObjectType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Solarwind.md#finalfielddefinition);  }  }\>[``"def"``], `_HandleInput`<`Cast`<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Solarwind.md#finalfielddefinition);  }  }\>[``"def"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`ObjectType`](../classes/Solarwind.ObjectType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Solarwind.md#finalfielddefinition);  }  }\>[``"def"``], `_HandleInput`<`Cast`<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Solarwind.md#finalfielddefinition);  }  }\>[``"def"``]\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:10

___

### optional

▸ **optional**(): [`ExtendType`](Solarwind.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, { `optional`: ``true``  }\>\>

#### Returns

[`ExtendType`](Solarwind.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, { `optional`: ``true``  }\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:15

___

### required

▸ **required**(): [`ExtendType`](Solarwind.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, { `optional`: ``false``  }\>\>

#### Returns

[`ExtendType`](Solarwind.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, { `optional`: ``false``  }\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:16

___

### single

▸ **single**(): [`ExtendType`](Solarwind.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, { `list`: ``false``  }\>\>

#### Returns

[`ExtendType`](Solarwind.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Solarwind.md#describewithoutseal)<`Input`\>, { `list`: ``false``  }\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:18
