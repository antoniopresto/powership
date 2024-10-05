[Powership](../README.md) / [Modules](../modules.md) / [Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md) / ExtendObjectDefinition

# Interface: ExtendObjectDefinition<Input, Origin\>

[Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md).ExtendObjectDefinition

## Type parameters

| Name |
| :------ |
| `Input` |
| `Origin` |

## Table of contents

### Properties

- [definition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#definition)

### Methods

- [def](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#def)
- [exclude](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#exclude)
- [extendObjectDefinition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#extendobjectdefinition)
- [graphType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#graphtype)
- [objectType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#objecttype)
- [only](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#only)
- [optional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#optional)
- [pick](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#pick)
- [required](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#required)

## Properties

### definition

• **definition**: [`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:23](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/extendObjectDefinition.ts#L23)

## Methods

### def

▸ **def**(): [`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>

#### Returns

[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:25](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/extendObjectDefinition.ts#L25)

___

### exclude

▸ **exclude**<`K`\>(`keys`): [`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Omit`<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K` \| `K`[] |

#### Returns

[`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Omit`<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:27](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/extendObjectDefinition.ts#L27)

___

### extendObjectDefinition

▸ **extendObjectDefinition**<`V`\>(`value`): [`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Merge`<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, [`DescribeObjectDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeobjectdefinition)<`V`\>, ``"flat"``, `BuiltIn`, `undefined`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`ObjectDefinitionInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectdefinitioninput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` \| (`current`: [`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>) => `V` |

#### Returns

[`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Merge`<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, [`DescribeObjectDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeobjectdefinition)<`V`\>, ``"flat"``, `BuiltIn`, `undefined`\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:31](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/extendObjectDefinition.ts#L31)

___

### graphType

▸ **graphType**(`name`): [`GraphType`](../classes/Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<{ `object`: [`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`GraphType`](../classes/Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<{ `object`: [`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>  }\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:38](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/extendObjectDefinition.ts#L38)

___

### objectType

▸ **objectType**(`name?`): [`ObjectType`](../classes/Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `_HandleInput`<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`ObjectType`](../classes/Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `_HandleInput`<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>\>\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:40](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/extendObjectDefinition.ts#L40)

___

### only

▸ **only**<`K`\>(`keys`): [`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K` \| `K`[] |

#### Returns

[`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:42](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/extendObjectDefinition.ts#L42)

___

### optional

▸ **optional**(): [`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, { `optional`: ``true``  }\>  }, `Origin`\>

#### Returns

[`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, { `optional`: ``true``  }\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:54](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/extendObjectDefinition.ts#L54)

▸ **optional**<`Op`\>(`keys`): [`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `Op`, { `optional`: ``true``  }\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Op` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Op` \| `Op`[] |

#### Returns

[`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `Op`, { `optional`: ``true``  }\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:59](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/extendObjectDefinition.ts#L59)

___

### pick

▸ **pick**<`K`\>(`keys`): [`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

Alias to `only`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K` \| `K`[] |

#### Returns

[`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:50](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/extendObjectDefinition.ts#L50)

___

### required

▸ **required**(): [`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, { `optional`: ``false``  }\>  }, `Origin`\>

#### Returns

[`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, { `optional`: ``false``  }\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:66](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/extendObjectDefinition.ts#L66)

▸ **required**<`Op`\>(`keys`): [`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `Op`, { `optional`: ``false``  }\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Op` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Op` \| `Op`[] |

#### Returns

[`ExtendObjectDefinition`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `Op`, { `optional`: ``false``  }\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:71](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/extendObjectDefinition.ts#L71)
