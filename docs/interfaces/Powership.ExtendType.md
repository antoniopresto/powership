[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / ExtendType

# Interface: ExtendType<Input\>

[Powership](../modules/Powership.md).ExtendType

## Type parameters

| Name |
| :------ |
| `Input` |

## Table of contents

### Properties

- [definition](Powership.ExtendType.md#definition)

### Methods

- [def](Powership.ExtendType.md#def)
- [extend](Powership.ExtendType.md#extend)
- [graphType](Powership.ExtendType.md#graphtype)
- [list](Powership.ExtendType.md#list)
- [objectType](Powership.ExtendType.md#objecttype)
- [optional](Powership.ExtendType.md#optional)
- [required](Powership.ExtendType.md#required)
- [single](Powership.ExtendType.md#single)

## Properties

### definition

• **definition**: [`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>

#### Defined in

packages/schema/lib/extendType.d.ts:6

## Methods

### def

▸ **def**(): [`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>

#### Returns

[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>

#### Defined in

packages/schema/lib/extendType.d.ts:7

___

### extend

▸ **extend**<`V`\>(`value`): [`ExtendType`](Powership.ExtendType.md)<`Omit`<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, keyof `V`\> & `V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`FinalFieldDefinition`](../modules/Powership.md#finalfielddefinition) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` \| (`current`: [`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>) => `V` |

#### Returns

[`ExtendType`](Powership.ExtendType.md)<`Omit`<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, keyof `V`\> & `V`\>

#### Defined in

packages/schema/lib/extendType.d.ts:8

___

### graphType

▸ **graphType**(`name?`): [`GraphType`](../classes/Powership.GraphType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, [`FinalFieldDefinition`](../modules/Powership.md#finalfielddefinition)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`GraphType`](../classes/Powership.GraphType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, [`FinalFieldDefinition`](../modules/Powership.md#finalfielddefinition)\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:9

___

### list

▸ **list**(): [`ExtendType`](Powership.ExtendType.md)<[`MakeTypeList`](../modules/Powership.md#maketypelist)<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>\>\>

#### Returns

[`ExtendType`](Powership.ExtendType.md)<[`MakeTypeList`](../modules/Powership.md#maketypelist)<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:17

___

### objectType

▸ **objectType**(`name?`): [`ObjectType`](../classes/Powership.ObjectType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Powership.md#finalfielddefinition);  }  }\>[``"def"``], `_HandleInput`<`Cast`<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Powership.md#finalfielddefinition);  }  }\>[``"def"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`ObjectType`](../classes/Powership.ObjectType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Powership.md#finalfielddefinition);  }  }\>[``"def"``], `_HandleInput`<`Cast`<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Powership.md#finalfielddefinition);  }  }\>[``"def"``]\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:10

___

### optional

▸ **optional**(): [`ExtendType`](Powership.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, { `optional`: ``true``  }\>\>

#### Returns

[`ExtendType`](Powership.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, { `optional`: ``true``  }\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:15

___

### required

▸ **required**(): [`ExtendType`](Powership.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, { `optional`: ``false``  }\>\>

#### Returns

[`ExtendType`](Powership.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, { `optional`: ``false``  }\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:16

___

### single

▸ **single**(): [`ExtendType`](Powership.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, { `list`: ``false``  }\>\>

#### Returns

[`ExtendType`](Powership.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Powership.md#describewithoutseal)<`Input`\>, { `list`: ``false``  }\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:18
