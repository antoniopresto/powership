[Powership](../README.md) / [Modules](../modules.md) / [Powership](Powership.md) / [TU](Powership.TU.md) / T

# Namespace: T

[Powership](Powership.md).[TU](Powership.TU.md).T

## Table of contents

### Type Aliases

- [As](Powership.TU.T.md#as)
- [Cast](Powership.TU.T.md#cast)
- [Merge](Powership.TU.T.md#merge)
- [Naked](Powership.TU.T.md#naked)

## Type Aliases

### As

Ƭ **As**<`T`, `L`\>: `A.Cast`<`T`, `L`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `L` |

#### Defined in

packages/utils/out/typings/ts-toolbet.d.ts:17

___

### Cast

Ƭ **Cast**<`T`, `L`\>: `A.Cast`<`T`, `L`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `L` |

#### Defined in

packages/utils/out/typings/ts-toolbet.d.ts:19

___

### Merge

Ƭ **Merge**<`O`, `O1`, `depth`, `ignore`, `fill`\>: `O` extends `object` ? `O1` extends `object` ? `O.Merge`<`Omit`<`O`, keyof `O1`\>, `O1`, `depth`, `ignore`, `fill`\> : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | `O` |
| `O1` | `O1` |
| `depth` | extends `Depth` = ``"flat"`` |
| `ignore` | extends `object` = `BuiltIn` |
| `fill` | extends `any` = `undefined` |

#### Defined in

packages/utils/out/typings/ts-toolbet.d.ts:18

___

### Naked

Ƭ **Naked**<`L`\>: `Overwrite`<`Required`<`L`\>, `L`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends `List` |

#### Defined in

packages/utils/out/typings/ts-toolbet.d.ts:20
