[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / ExtendType

# Interface: ExtendType<Input\>

[Backland](../modules/Backland.md).ExtendType

## Type parameters

| Name |
| :------ |
| `Input` |

## Table of contents

### Properties

- [definition](Backland.ExtendType.md#definition)

### Methods

- [def](Backland.ExtendType.md#def)
- [extend](Backland.ExtendType.md#extend)
- [graphType](Backland.ExtendType.md#graphtype)
- [list](Backland.ExtendType.md#list)
- [objectType](Backland.ExtendType.md#objecttype)
- [optional](Backland.ExtendType.md#optional)
- [required](Backland.ExtendType.md#required)
- [single](Backland.ExtendType.md#single)

## Properties

### definition

• **definition**: [`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>

#### Defined in

packages/schema/lib/extendType.d.ts:6

## Methods

### def

▸ **def**(): [`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>

#### Returns

[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>

#### Defined in

packages/schema/lib/extendType.d.ts:7

___

### extend

▸ **extend**<`V`\>(`value`): [`ExtendType`](Backland.ExtendType.md)<`Omit`<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, keyof `V`\> & `V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`FinalFieldDefinition`](../modules/Backland.md#finalfielddefinition) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` \| (`current`: [`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>) => `V` |

#### Returns

[`ExtendType`](Backland.ExtendType.md)<`Omit`<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, keyof `V`\> & `V`\>

#### Defined in

packages/schema/lib/extendType.d.ts:8

___

### graphType

▸ **graphType**(`name?`): [`GraphType`](../classes/Backland.GraphType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, [`FinalFieldDefinition`](../modules/Backland.md#finalfielddefinition)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`GraphType`](../classes/Backland.GraphType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, [`FinalFieldDefinition`](../modules/Backland.md#finalfielddefinition)\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:9

___

### list

▸ **list**(): [`ExtendType`](Backland.ExtendType.md)<[`MakeTypeList`](../modules/Backland.md#maketypelist)<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>\>\>

#### Returns

[`ExtendType`](Backland.ExtendType.md)<[`MakeTypeList`](../modules/Backland.md#maketypelist)<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:17

___

### objectType

▸ **objectType**(`name?`): [`ObjectType`](../classes/Backland.ObjectType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Backland.md#finalfielddefinition);  }  }\>[``"def"``], `_HandleInput`<`Cast`<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Backland.md#finalfielddefinition);  }  }\>[``"def"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`ObjectType`](../classes/Backland.ObjectType.md)<`Cast`<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Backland.md#finalfielddefinition);  }  }\>[``"def"``], `_HandleInput`<`Cast`<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, { `def`: { `[K: string]`: [`FinalFieldDefinition`](../modules/Backland.md#finalfielddefinition);  }  }\>[``"def"``]\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:10

___

### optional

▸ **optional**(): [`ExtendType`](Backland.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Backland.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, { `optional`: ``true``  }\>\>

#### Returns

[`ExtendType`](Backland.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Backland.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, { `optional`: ``true``  }\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:15

___

### required

▸ **required**(): [`ExtendType`](Backland.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Backland.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, { `optional`: ``false``  }\>\>

#### Returns

[`ExtendType`](Backland.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Backland.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, { `optional`: ``false``  }\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:16

___

### single

▸ **single**(): [`ExtendType`](Backland.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Backland.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, { `list`: ``false``  }\>\>

#### Returns

[`ExtendType`](Backland.ExtendType.md)<[`DescribeAndOverrideField`](../modules/Backland.md#describeandoverridefield)<[`DescribeWithoutSeal`](../modules/Backland.md#describewithoutseal)<`Input`\>, { `list`: ``false``  }\>\>

#### Defined in

packages/schema/lib/extendType.d.ts:18
