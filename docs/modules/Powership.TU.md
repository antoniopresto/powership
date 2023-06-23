[Powership](../README.md) / [Modules](../modules.md) / [Powership](Powership.md) / TU

# Namespace: TU

[Powership](Powership.md).TU

## Table of contents

### Namespaces

- [T](Powership.TU.T.md)

### Interfaces

- [SerializableList](../interfaces/Powership.TU.SerializableList.md)
- [Stringifiable](../interfaces/Powership.TU.Stringifiable.md)

### Type Aliases

- [A\_Z](Powership.TU.md#a_z)
- [AnyArray](Powership.TU.md#anyarray)
- [AnyFunction](Powership.TU.md#anyfunction)
- [AnyList](Powership.TU.md#anylist)
- [AnyRecord](Powership.TU.md#anyrecord)
- [ArrayKeys](Powership.TU.md#arraykeys)
- [ArrayType](Powership.TU.md#arraytype)
- [As](Powership.TU.md#as)
- [BinAny](Powership.TU.md#binany)
- [BinKnown](Powership.TU.md#binknown)
- [Cast](Powership.TU.md#cast)
- [Compute](Powership.TU.md#compute)
- [DeepArrayKeys](Powership.TU.md#deeparraykeys)
- [Entries](Powership.TU.md#entries)
- [ForceString](Powership.TU.md#forcestring)
- [GetFieldByDotNotation](Powership.TU.md#getfieldbydotnotation)
- [GetFieldByDotPath](Powership.TU.md#getfieldbydotpath)
- [IfExtends](Powership.TU.md#ifextends)
- [IsAny](Powership.TU.md#isany)
- [IsKnown](Powership.TU.md#isknown)
- [IsNever](Powership.TU.md#isnever)
- [IsNullable](Powership.TU.md#isnullable)
- [IsOptional](Powership.TU.md#isoptional)
- [IsUnknown](Powership.TU.md#isunknown)
- [IterationMap](Powership.TU.md#iterationmap)
- [MaybeArray](Powership.TU.md#maybearray)
- [MaybePromise](Powership.TU.md#maybepromise)
- [Merge](Powership.TU.md#merge)
- [Naked](Powership.TU.md#naked)
- [Name](Powership.TU.md#name)
- [NextIndex](Powership.TU.md#nextindex)
- [NotString](Powership.TU.md#notstring)
- [NullableToPartial](Powership.TU.md#nullabletopartial)
- [ObjectPath](Powership.TU.md#objectpath)
- [ObjectUnion](Powership.TU.md#objectunion)
- [OnlyKnown](Powership.TU.md#onlyknown)
- [PartialRequired](Powership.TU.md#partialrequired)
- [PathType](Powership.TU.md#pathtype)
- [Paths](Powership.TU.md#paths)
- [Pick](Powership.TU.md#pick)
- [PrevIndex](Powership.TU.md#previndex)
- [PromiseType](Powership.TU.md#promisetype)
- [Serializable](Powership.TU.md#serializable)
- [Simplify](Powership.TU.md#simplify)
- [TypeLike](Powership.TU.md#typelike)
- [UnionToIntersection](Powership.TU.md#uniontointersection)
- [UnknownRecord](Powership.TU.md#unknownrecord)
- [Writeable](Powership.TU.md#writeable)
- [\_PathType](Powership.TU.md#_pathtype)

### Variables

- [A\_Z](Powership.TU.md#a_z-1)
- [noop](Powership.TU.md#noop)

### Functions

- [tuple](Powership.TU.md#tuple)
- [tupleEnum](Powership.TU.md#tupleenum)
- [tupleNum](Powership.TU.md#tuplenum)

## Type Aliases

### A\_Z

Ƭ **A\_Z**: typeof [`A_Z`](Powership.TU.md#a_z-1)[`number`]

#### Defined in

packages/utils/lib/typings/index.d.ts:95

packages/utils/lib/typings/index.d.ts:96

___

### AnyArray

Ƭ **AnyArray**<`T`\>: `ReadonlyArray`<`T`\> \| `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

packages/utils/lib/typings/index.d.ts:37

___

### AnyFunction

Ƭ **AnyFunction**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

packages/utils/lib/typings/index.d.ts:46

___

### AnyList

Ƭ **AnyList**<`T`\>: [`AnyArray`](Powership.TU.md#anyarray)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

packages/utils/lib/typings/index.d.ts:38

___

### AnyRecord

Ƭ **AnyRecord**: `Record`<`string`, `any`\>

#### Defined in

packages/utils/lib/typings/index.d.ts:33

___

### ArrayKeys

Ƭ **ArrayKeys**<`T`\>: `T` extends `any`[] \| `ReadonlyArray`<`any`\> ? `T` extends [`any`, ...(infer Tail)] ? [`ArrayKeys`](Powership.TU.md#arraykeys)<`Tail`\> \| `Tail`[``"length"``] : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:63

___

### ArrayType

Ƭ **ArrayType**<`T`\>: `T` extends infer N[] ? `N` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:32

___

### As

Ƭ **As**<`T`, `L`\>: `A.Cast`<`T`, `L`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `L` |

#### Defined in

packages/utils/lib/typings/ts-toolbet.d.ts:17

___

### BinAny

Ƭ **BinAny**<`T`, `True`, `False`\>: { `0`: `False` ; `1`: `True`  }[[`IsAny`](Powership.TU.md#isany)<`T`\> extends ``true`` ? ``0`` : ``1``]

#### Type parameters

| Name |
| :------ |
| `T` |
| `True` |
| `False` |

#### Defined in

packages/utils/lib/typings/index.d.ts:91

___

### BinKnown

Ƭ **BinKnown**<`T`, `True`, `False`\>: { `0`: `False` ; `1`: `True`  }[[`IsKnown`](Powership.TU.md#isknown)<`T`\>]

#### Type parameters

| Name |
| :------ |
| `T` |
| `True` |
| `False` |

#### Defined in

packages/utils/lib/typings/index.d.ts:87

___

### Cast

Ƭ **Cast**<`T`, `L`\>: `A.Cast`<`T`, `L`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `L` |

#### Defined in

packages/utils/lib/typings/ts-toolbet.d.ts:19

___

### Compute

Ƭ **Compute**<`T`, `Max`\>: [`IsKnown`](Powership.TU.md#isknown)<`T`\> extends ``1`` ? `ComputeDeep`<`T`, `Max`, ``0``, `never`\> : `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Max` | extends `number` = ``1`` |

#### Defined in

packages/utils/lib/typings/Compute.d.ts:17

___

### DeepArrayKeys

Ƭ **DeepArrayKeys**<`T`\>: { [K in keyof T]: \`${Extract<K, string\>}.${ObjectPath<T[K]\>}\` }[`number`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |

#### Defined in

packages/utils/lib/typings/index.d.ts:64

___

### Entries

Ƭ **Entries**<`T`\>: { [K in Extract<keyof T, string\>]-?: [K, T[K]] }[`Extract`<keyof `T`, `string`\>][]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:43

___

### ForceString

Ƭ **ForceString**<`T`\>: `T` extends `string` ? `T` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:50

___

### GetFieldByDotNotation

Ƭ **GetFieldByDotNotation**<`Obj`, `DotNotation`\>: `DotNotation` extends \`${number}\` ? `number` extends keyof `Obj` ? `Obj`[`number`] : `undefined` : `DotNotation` extends keyof `Obj` ? `Obj`[`DotNotation`] : `DotNotation` extends \`${infer Left}.${infer Right}\` ? `Left` extends keyof `Obj` ? [`GetFieldByDotNotation`](Powership.TU.md#getfieldbydotnotation)<`Exclude`<`Obj`[`Left`], `undefined`\>, `Right`\> \| `Extract`<`Obj`[`Left`], `undefined`\> : `undefined` : `undefined`

#### Type parameters

| Name |
| :------ |
| `Obj` |
| `DotNotation` |

#### Defined in

packages/utils/lib/typings/index.d.ts:109

___

### GetFieldByDotPath

Ƭ **GetFieldByDotPath**<`Obj`, `DotNotation`\>: [`GetFieldByDotNotation`](Powership.TU.md#getfieldbydotnotation)<`Obj`, `DotNotation`\>

**`Alias`**

to GetFieldByDotNotation

#### Type parameters

| Name |
| :------ |
| `Obj` |
| `DotNotation` |

#### Defined in

packages/utils/lib/typings/index.d.ts:70

___

### IfExtends

Ƭ **IfExtends**<`Param`, `Type`, `IfTrue`, `IfFalse`\>: `Param` extends `Type` ? `IfTrue` : `IfFalse`

#### Type parameters

| Name |
| :------ |
| `Param` |
| `Type` |
| `IfTrue` |
| `IfFalse` |

#### Defined in

packages/utils/lib/typings/index.d.ts:39

___

### IsAny

Ƭ **IsAny**<`T`\>: ``0`` extends ``1`` & `T` ? ``true`` : ``false``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:23

___

### IsKnown

Ƭ **IsKnown**<`T`\>: [`IsAny`](Powership.TU.md#isany)<`T`\> extends ``true`` ? ``0`` : [`IsNever`](Powership.TU.md#isnever)<`T`\> extends ``true`` ? ``0`` : [`IsUnknown`](Powership.TU.md#isunknown)<`T`\> extends ``true`` ? ``0`` : ``1``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:86

___

### IsNever

Ƭ **IsNever**<`T`\>: [`T`] extends [`never`] ? ``true`` : ``false``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:24

___

### IsNullable

Ƭ **IsNullable**<`T`\>: `Extract`<`T`, ``null`` \| `undefined`\> extends `never` ? ``false`` : ``true``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:25

___

### IsOptional

Ƭ **IsOptional**<`T`\>: `Extract`<`T`, `undefined`\> extends `never` ? ``false`` : ``true``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:26

___

### IsUnknown

Ƭ **IsUnknown**<`T`\>: [`IsNever`](Powership.TU.md#isnever)<`T`\> extends ``false`` ? `T` extends `unknown` ? `unknown` extends `T` ? [`IsAny`](Powership.TU.md#isany)<`T`\> extends ``false`` ? ``true`` : ``false`` : ``false`` : ``false`` : ``false``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:27

___

### IterationMap

Ƭ **IterationMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `-1` | [``-1``, ``"-"``, ``"-2"``, ``"0"``, ``"1"``] |
| `-10` | [``-10``, ``"-"``, ``"-11"``, ``"-9"``, ``"10"``] |
| `-100` | [``-100``, ``"-"``, ``"__"``, ``"-99"``, ``"100"``] |
| `-11` | [``-11``, ``"-"``, ``"-12"``, ``"-10"``, ``"11"``] |
| `-12` | [``-12``, ``"-"``, ``"-13"``, ``"-11"``, ``"12"``] |
| `-13` | [``-13``, ``"-"``, ``"-14"``, ``"-12"``, ``"13"``] |
| `-14` | [``-14``, ``"-"``, ``"-15"``, ``"-13"``, ``"14"``] |
| `-15` | [``-15``, ``"-"``, ``"-16"``, ``"-14"``, ``"15"``] |
| `-16` | [``-16``, ``"-"``, ``"-17"``, ``"-15"``, ``"16"``] |
| `-17` | [``-17``, ``"-"``, ``"-18"``, ``"-16"``, ``"17"``] |
| `-18` | [``-18``, ``"-"``, ``"-19"``, ``"-17"``, ``"18"``] |
| `-19` | [``-19``, ``"-"``, ``"-20"``, ``"-18"``, ``"19"``] |
| `-2` | [``-2``, ``"-"``, ``"-3"``, ``"-1"``, ``"2"``] |
| `-20` | [``-20``, ``"-"``, ``"-21"``, ``"-19"``, ``"20"``] |
| `-21` | [``-21``, ``"-"``, ``"-22"``, ``"-20"``, ``"21"``] |
| `-22` | [``-22``, ``"-"``, ``"-23"``, ``"-21"``, ``"22"``] |
| `-23` | [``-23``, ``"-"``, ``"-24"``, ``"-22"``, ``"23"``] |
| `-24` | [``-24``, ``"-"``, ``"-25"``, ``"-23"``, ``"24"``] |
| `-25` | [``-25``, ``"-"``, ``"-26"``, ``"-24"``, ``"25"``] |
| `-26` | [``-26``, ``"-"``, ``"-27"``, ``"-25"``, ``"26"``] |
| `-27` | [``-27``, ``"-"``, ``"-28"``, ``"-26"``, ``"27"``] |
| `-28` | [``-28``, ``"-"``, ``"-29"``, ``"-27"``, ``"28"``] |
| `-29` | [``-29``, ``"-"``, ``"-30"``, ``"-28"``, ``"29"``] |
| `-3` | [``-3``, ``"-"``, ``"-4"``, ``"-2"``, ``"3"``] |
| `-30` | [``-30``, ``"-"``, ``"-31"``, ``"-29"``, ``"30"``] |
| `-31` | [``-31``, ``"-"``, ``"-32"``, ``"-30"``, ``"31"``] |
| `-32` | [``-32``, ``"-"``, ``"-33"``, ``"-31"``, ``"32"``] |
| `-33` | [``-33``, ``"-"``, ``"-34"``, ``"-32"``, ``"33"``] |
| `-34` | [``-34``, ``"-"``, ``"-35"``, ``"-33"``, ``"34"``] |
| `-35` | [``-35``, ``"-"``, ``"-36"``, ``"-34"``, ``"35"``] |
| `-36` | [``-36``, ``"-"``, ``"-37"``, ``"-35"``, ``"36"``] |
| `-37` | [``-37``, ``"-"``, ``"-38"``, ``"-36"``, ``"37"``] |
| `-38` | [``-38``, ``"-"``, ``"-39"``, ``"-37"``, ``"38"``] |
| `-39` | [``-39``, ``"-"``, ``"-40"``, ``"-38"``, ``"39"``] |
| `-4` | [``-4``, ``"-"``, ``"-5"``, ``"-3"``, ``"4"``] |
| `-40` | [``-40``, ``"-"``, ``"-41"``, ``"-39"``, ``"40"``] |
| `-41` | [``-41``, ``"-"``, ``"-42"``, ``"-40"``, ``"41"``] |
| `-42` | [``-42``, ``"-"``, ``"-43"``, ``"-41"``, ``"42"``] |
| `-43` | [``-43``, ``"-"``, ``"-44"``, ``"-42"``, ``"43"``] |
| `-44` | [``-44``, ``"-"``, ``"-45"``, ``"-43"``, ``"44"``] |
| `-45` | [``-45``, ``"-"``, ``"-46"``, ``"-44"``, ``"45"``] |
| `-46` | [``-46``, ``"-"``, ``"-47"``, ``"-45"``, ``"46"``] |
| `-47` | [``-47``, ``"-"``, ``"-48"``, ``"-46"``, ``"47"``] |
| `-48` | [``-48``, ``"-"``, ``"-49"``, ``"-47"``, ``"48"``] |
| `-49` | [``-49``, ``"-"``, ``"-50"``, ``"-48"``, ``"49"``] |
| `-5` | [``-5``, ``"-"``, ``"-6"``, ``"-4"``, ``"5"``] |
| `-50` | [``-50``, ``"-"``, ``"-51"``, ``"-49"``, ``"50"``] |
| `-51` | [``-51``, ``"-"``, ``"-52"``, ``"-50"``, ``"51"``] |
| `-52` | [``-52``, ``"-"``, ``"-53"``, ``"-51"``, ``"52"``] |
| `-53` | [``-53``, ``"-"``, ``"-54"``, ``"-52"``, ``"53"``] |
| `-54` | [``-54``, ``"-"``, ``"-55"``, ``"-53"``, ``"54"``] |
| `-55` | [``-55``, ``"-"``, ``"-56"``, ``"-54"``, ``"55"``] |
| `-56` | [``-56``, ``"-"``, ``"-57"``, ``"-55"``, ``"56"``] |
| `-57` | [``-57``, ``"-"``, ``"-58"``, ``"-56"``, ``"57"``] |
| `-58` | [``-58``, ``"-"``, ``"-59"``, ``"-57"``, ``"58"``] |
| `-59` | [``-59``, ``"-"``, ``"-60"``, ``"-58"``, ``"59"``] |
| `-6` | [``-6``, ``"-"``, ``"-7"``, ``"-5"``, ``"6"``] |
| `-60` | [``-60``, ``"-"``, ``"-61"``, ``"-59"``, ``"60"``] |
| `-61` | [``-61``, ``"-"``, ``"-62"``, ``"-60"``, ``"61"``] |
| `-62` | [``-62``, ``"-"``, ``"-63"``, ``"-61"``, ``"62"``] |
| `-63` | [``-63``, ``"-"``, ``"-64"``, ``"-62"``, ``"63"``] |
| `-64` | [``-64``, ``"-"``, ``"-65"``, ``"-63"``, ``"64"``] |
| `-65` | [``-65``, ``"-"``, ``"-66"``, ``"-64"``, ``"65"``] |
| `-66` | [``-66``, ``"-"``, ``"-67"``, ``"-65"``, ``"66"``] |
| `-67` | [``-67``, ``"-"``, ``"-68"``, ``"-66"``, ``"67"``] |
| `-68` | [``-68``, ``"-"``, ``"-69"``, ``"-67"``, ``"68"``] |
| `-69` | [``-69``, ``"-"``, ``"-70"``, ``"-68"``, ``"69"``] |
| `-7` | [``-7``, ``"-"``, ``"-8"``, ``"-6"``, ``"7"``] |
| `-70` | [``-70``, ``"-"``, ``"-71"``, ``"-69"``, ``"70"``] |
| `-71` | [``-71``, ``"-"``, ``"-72"``, ``"-70"``, ``"71"``] |
| `-72` | [``-72``, ``"-"``, ``"-73"``, ``"-71"``, ``"72"``] |
| `-73` | [``-73``, ``"-"``, ``"-74"``, ``"-72"``, ``"73"``] |
| `-74` | [``-74``, ``"-"``, ``"-75"``, ``"-73"``, ``"74"``] |
| `-75` | [``-75``, ``"-"``, ``"-76"``, ``"-74"``, ``"75"``] |
| `-76` | [``-76``, ``"-"``, ``"-77"``, ``"-75"``, ``"76"``] |
| `-77` | [``-77``, ``"-"``, ``"-78"``, ``"-76"``, ``"77"``] |
| `-78` | [``-78``, ``"-"``, ``"-79"``, ``"-77"``, ``"78"``] |
| `-79` | [``-79``, ``"-"``, ``"-80"``, ``"-78"``, ``"79"``] |
| `-8` | [``-8``, ``"-"``, ``"-9"``, ``"-7"``, ``"8"``] |
| `-80` | [``-80``, ``"-"``, ``"-81"``, ``"-79"``, ``"80"``] |
| `-81` | [``-81``, ``"-"``, ``"-82"``, ``"-80"``, ``"81"``] |
| `-82` | [``-82``, ``"-"``, ``"-83"``, ``"-81"``, ``"82"``] |
| `-83` | [``-83``, ``"-"``, ``"-84"``, ``"-82"``, ``"83"``] |
| `-84` | [``-84``, ``"-"``, ``"-85"``, ``"-83"``, ``"84"``] |
| `-85` | [``-85``, ``"-"``, ``"-86"``, ``"-84"``, ``"85"``] |
| `-86` | [``-86``, ``"-"``, ``"-87"``, ``"-85"``, ``"86"``] |
| `-87` | [``-87``, ``"-"``, ``"-88"``, ``"-86"``, ``"87"``] |
| `-88` | [``-88``, ``"-"``, ``"-89"``, ``"-87"``, ``"88"``] |
| `-89` | [``-89``, ``"-"``, ``"-90"``, ``"-88"``, ``"89"``] |
| `-9` | [``-9``, ``"-"``, ``"-10"``, ``"-8"``, ``"9"``] |
| `-90` | [``-90``, ``"-"``, ``"-91"``, ``"-89"``, ``"90"``] |
| `-91` | [``-91``, ``"-"``, ``"-92"``, ``"-90"``, ``"91"``] |
| `-92` | [``-92``, ``"-"``, ``"-93"``, ``"-91"``, ``"92"``] |
| `-93` | [``-93``, ``"-"``, ``"-94"``, ``"-92"``, ``"93"``] |
| `-94` | [``-94``, ``"-"``, ``"-95"``, ``"-93"``, ``"94"``] |
| `-95` | [``-95``, ``"-"``, ``"-96"``, ``"-94"``, ``"95"``] |
| `-96` | [``-96``, ``"-"``, ``"-97"``, ``"-95"``, ``"96"``] |
| `-97` | [``-97``, ``"-"``, ``"-98"``, ``"-96"``, ``"97"``] |
| `-98` | [``-98``, ``"-"``, ``"-99"``, ``"-97"``, ``"98"``] |
| `-99` | [``-99``, ``"-"``, ``"-100"``, ``"-98"``, ``"99"``] |
| `0` | [``0``, ``"0"``, ``"-1"``, ``"1"``, ``"0"``] |
| `1` | [``1``, ``"+"``, ``"0"``, ``"2"``, ``"-1"``] |
| `10` | [``10``, ``"+"``, ``"9"``, ``"11"``, ``"-10"``] |
| `100` | [``100``, ``"+"``, ``"99"``, ``"__"``, ``"-100"``] |
| `11` | [``11``, ``"+"``, ``"10"``, ``"12"``, ``"-11"``] |
| `12` | [``12``, ``"+"``, ``"11"``, ``"13"``, ``"-12"``] |
| `13` | [``13``, ``"+"``, ``"12"``, ``"14"``, ``"-13"``] |
| `14` | [``14``, ``"+"``, ``"13"``, ``"15"``, ``"-14"``] |
| `15` | [``15``, ``"+"``, ``"14"``, ``"16"``, ``"-15"``] |
| `16` | [``16``, ``"+"``, ``"15"``, ``"17"``, ``"-16"``] |
| `17` | [``17``, ``"+"``, ``"16"``, ``"18"``, ``"-17"``] |
| `18` | [``18``, ``"+"``, ``"17"``, ``"19"``, ``"-18"``] |
| `19` | [``19``, ``"+"``, ``"18"``, ``"20"``, ``"-19"``] |
| `2` | [``2``, ``"+"``, ``"1"``, ``"3"``, ``"-2"``] |
| `20` | [``20``, ``"+"``, ``"19"``, ``"21"``, ``"-20"``] |
| `21` | [``21``, ``"+"``, ``"20"``, ``"22"``, ``"-21"``] |
| `22` | [``22``, ``"+"``, ``"21"``, ``"23"``, ``"-22"``] |
| `23` | [``23``, ``"+"``, ``"22"``, ``"24"``, ``"-23"``] |
| `24` | [``24``, ``"+"``, ``"23"``, ``"25"``, ``"-24"``] |
| `25` | [``25``, ``"+"``, ``"24"``, ``"26"``, ``"-25"``] |
| `26` | [``26``, ``"+"``, ``"25"``, ``"27"``, ``"-26"``] |
| `27` | [``27``, ``"+"``, ``"26"``, ``"28"``, ``"-27"``] |
| `28` | [``28``, ``"+"``, ``"27"``, ``"29"``, ``"-28"``] |
| `29` | [``29``, ``"+"``, ``"28"``, ``"30"``, ``"-29"``] |
| `3` | [``3``, ``"+"``, ``"2"``, ``"4"``, ``"-3"``] |
| `30` | [``30``, ``"+"``, ``"29"``, ``"31"``, ``"-30"``] |
| `31` | [``31``, ``"+"``, ``"30"``, ``"32"``, ``"-31"``] |
| `32` | [``32``, ``"+"``, ``"31"``, ``"33"``, ``"-32"``] |
| `33` | [``33``, ``"+"``, ``"32"``, ``"34"``, ``"-33"``] |
| `34` | [``34``, ``"+"``, ``"33"``, ``"35"``, ``"-34"``] |
| `35` | [``35``, ``"+"``, ``"34"``, ``"36"``, ``"-35"``] |
| `36` | [``36``, ``"+"``, ``"35"``, ``"37"``, ``"-36"``] |
| `37` | [``37``, ``"+"``, ``"36"``, ``"38"``, ``"-37"``] |
| `38` | [``38``, ``"+"``, ``"37"``, ``"39"``, ``"-38"``] |
| `39` | [``39``, ``"+"``, ``"38"``, ``"40"``, ``"-39"``] |
| `4` | [``4``, ``"+"``, ``"3"``, ``"5"``, ``"-4"``] |
| `40` | [``40``, ``"+"``, ``"39"``, ``"41"``, ``"-40"``] |
| `41` | [``41``, ``"+"``, ``"40"``, ``"42"``, ``"-41"``] |
| `42` | [``42``, ``"+"``, ``"41"``, ``"43"``, ``"-42"``] |
| `43` | [``43``, ``"+"``, ``"42"``, ``"44"``, ``"-43"``] |
| `44` | [``44``, ``"+"``, ``"43"``, ``"45"``, ``"-44"``] |
| `45` | [``45``, ``"+"``, ``"44"``, ``"46"``, ``"-45"``] |
| `46` | [``46``, ``"+"``, ``"45"``, ``"47"``, ``"-46"``] |
| `47` | [``47``, ``"+"``, ``"46"``, ``"48"``, ``"-47"``] |
| `48` | [``48``, ``"+"``, ``"47"``, ``"49"``, ``"-48"``] |
| `49` | [``49``, ``"+"``, ``"48"``, ``"50"``, ``"-49"``] |
| `5` | [``5``, ``"+"``, ``"4"``, ``"6"``, ``"-5"``] |
| `50` | [``50``, ``"+"``, ``"49"``, ``"51"``, ``"-50"``] |
| `51` | [``51``, ``"+"``, ``"50"``, ``"52"``, ``"-51"``] |
| `52` | [``52``, ``"+"``, ``"51"``, ``"53"``, ``"-52"``] |
| `53` | [``53``, ``"+"``, ``"52"``, ``"54"``, ``"-53"``] |
| `54` | [``54``, ``"+"``, ``"53"``, ``"55"``, ``"-54"``] |
| `55` | [``55``, ``"+"``, ``"54"``, ``"56"``, ``"-55"``] |
| `56` | [``56``, ``"+"``, ``"55"``, ``"57"``, ``"-56"``] |
| `57` | [``57``, ``"+"``, ``"56"``, ``"58"``, ``"-57"``] |
| `58` | [``58``, ``"+"``, ``"57"``, ``"59"``, ``"-58"``] |
| `59` | [``59``, ``"+"``, ``"58"``, ``"60"``, ``"-59"``] |
| `6` | [``6``, ``"+"``, ``"5"``, ``"7"``, ``"-6"``] |
| `60` | [``60``, ``"+"``, ``"59"``, ``"61"``, ``"-60"``] |
| `61` | [``61``, ``"+"``, ``"60"``, ``"62"``, ``"-61"``] |
| `62` | [``62``, ``"+"``, ``"61"``, ``"63"``, ``"-62"``] |
| `63` | [``63``, ``"+"``, ``"62"``, ``"64"``, ``"-63"``] |
| `64` | [``64``, ``"+"``, ``"63"``, ``"65"``, ``"-64"``] |
| `65` | [``65``, ``"+"``, ``"64"``, ``"66"``, ``"-65"``] |
| `66` | [``66``, ``"+"``, ``"65"``, ``"67"``, ``"-66"``] |
| `67` | [``67``, ``"+"``, ``"66"``, ``"68"``, ``"-67"``] |
| `68` | [``68``, ``"+"``, ``"67"``, ``"69"``, ``"-68"``] |
| `69` | [``69``, ``"+"``, ``"68"``, ``"70"``, ``"-69"``] |
| `7` | [``7``, ``"+"``, ``"6"``, ``"8"``, ``"-7"``] |
| `70` | [``70``, ``"+"``, ``"69"``, ``"71"``, ``"-70"``] |
| `71` | [``71``, ``"+"``, ``"70"``, ``"72"``, ``"-71"``] |
| `72` | [``72``, ``"+"``, ``"71"``, ``"73"``, ``"-72"``] |
| `73` | [``73``, ``"+"``, ``"72"``, ``"74"``, ``"-73"``] |
| `74` | [``74``, ``"+"``, ``"73"``, ``"75"``, ``"-74"``] |
| `75` | [``75``, ``"+"``, ``"74"``, ``"76"``, ``"-75"``] |
| `76` | [``76``, ``"+"``, ``"75"``, ``"77"``, ``"-76"``] |
| `77` | [``77``, ``"+"``, ``"76"``, ``"78"``, ``"-77"``] |
| `78` | [``78``, ``"+"``, ``"77"``, ``"79"``, ``"-78"``] |
| `79` | [``79``, ``"+"``, ``"78"``, ``"80"``, ``"-79"``] |
| `8` | [``8``, ``"+"``, ``"7"``, ``"9"``, ``"-8"``] |
| `80` | [``80``, ``"+"``, ``"79"``, ``"81"``, ``"-80"``] |
| `81` | [``81``, ``"+"``, ``"80"``, ``"82"``, ``"-81"``] |
| `82` | [``82``, ``"+"``, ``"81"``, ``"83"``, ``"-82"``] |
| `83` | [``83``, ``"+"``, ``"82"``, ``"84"``, ``"-83"``] |
| `84` | [``84``, ``"+"``, ``"83"``, ``"85"``, ``"-84"``] |
| `85` | [``85``, ``"+"``, ``"84"``, ``"86"``, ``"-85"``] |
| `86` | [``86``, ``"+"``, ``"85"``, ``"87"``, ``"-86"``] |
| `87` | [``87``, ``"+"``, ``"86"``, ``"88"``, ``"-87"``] |
| `88` | [``88``, ``"+"``, ``"87"``, ``"89"``, ``"-88"``] |
| `89` | [``89``, ``"+"``, ``"88"``, ``"90"``, ``"-89"``] |
| `9` | [``9``, ``"+"``, ``"8"``, ``"10"``, ``"-9"``] |
| `90` | [``90``, ``"+"``, ``"89"``, ``"91"``, ``"-90"``] |
| `91` | [``91``, ``"+"``, ``"90"``, ``"92"``, ``"-91"``] |
| `92` | [``92``, ``"+"``, ``"91"``, ``"93"``, ``"-92"``] |
| `93` | [``93``, ``"+"``, ``"92"``, ``"94"``, ``"-93"``] |
| `94` | [``94``, ``"+"``, ``"93"``, ``"95"``, ``"-94"``] |
| `95` | [``95``, ``"+"``, ``"94"``, ``"96"``, ``"-95"``] |
| `96` | [``96``, ``"+"``, ``"95"``, ``"97"``, ``"-96"``] |
| `97` | [``97``, ``"+"``, ``"96"``, ``"98"``, ``"-97"``] |
| `98` | [``98``, ``"+"``, ``"97"``, ``"99"``, ``"-98"``] |
| `99` | [``99``, ``"+"``, ``"98"``, ``"100"``, ``"-99"``] |
| `__` | [`number`, ``"-"`` \| ``"0"`` \| ``"+"``, ``"__"``, ``"__"``, ``"__"``] |

#### Defined in

packages/utils/lib/IterationMap.d.ts:1

___

### MaybeArray

Ƭ **MaybeArray**<`T`\>: `T` \| `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:31

___

### MaybePromise

Ƭ **MaybePromise**<`T`\>: `T` \| `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:29

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

packages/utils/lib/typings/ts-toolbet.d.ts:18

___

### Naked

Ƭ **Naked**<`L`\>: `Overwrite`<`Required`<`L`\>, `L`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends `List` |

#### Defined in

packages/utils/lib/typings/ts-toolbet.d.ts:20

___

### Name

Ƭ **Name**: \`${A\_Z}${string}\`

#### Defined in

packages/utils/lib/typings/index.d.ts:97

___

### NextIndex

Ƭ **NextIndex**<`Current`\>: `Current` extends `number` ? `I.Pos`<`Next`<`I.IterationOf`<`Current`\>\>\> : `never`

#### Type parameters

| Name |
| :------ |
| `Current` |

#### Defined in

packages/utils/lib/typings/Compute.d.ts:8

___

### NotString

Ƭ **NotString**<`T`\>: `string` extends `T` ? `never` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:51

___

### NullableToPartial

Ƭ **NullableToPartial**<`T`\>: [`UnionToIntersection`](Powership.TU.md#uniontointersection)<{ [K in keyof T as IsOptional<T[K]\> extends true ? never : K]-?: T[K] } \| { [K in keyof T as IsOptional<T[K]\> extends true ? K : never]?: T[K] }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:52

___

### ObjectPath

Ƭ **ObjectPath**<`Obj`, `Limit`, `Level`\>: `Level`[``"length"``] extends `Limit` ? `never` : `Obj` extends { `[K: string]`: `any`;  } ? { [K in keyof Obj]: K extends string \| number ? Obj[K] extends Object ? Obj[K] extends ReadonlyArray<any\> ? K \| \`${K}.${number}\` \| \`${K}.${number}.${ObjectPath<Obj[K][number]\>}\` : K \| \`${K}.${ObjectPath<Obj[K], Limit, [...Level, 1]\>}\` : K : never }[keyof `Obj`] : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Obj` | `Obj` |
| `Limit` | extends `number` = ``10`` |
| `Level` | extends `number`[] = [] |

#### Defined in

packages/utils/lib/typings/index.d.ts:71

___

### ObjectUnion

Ƭ **ObjectUnion**<`A`, `B`\>: { [K in keyof (A & B)]: (A & B)[K] }

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Defined in

packages/utils/lib/typings/index.d.ts:40

___

### OnlyKnown

Ƭ **OnlyKnown**<`T`\>: [`IsAny`](Powership.TU.md#isany)<`T`\> extends ``true`` ? `never` : [`IsNever`](Powership.TU.md#isnever)<`T`\> extends ``true`` ? `never` : [`IsUnknown`](Powership.TU.md#isunknown)<`T`\> extends ``true`` ? `never` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:28

___

### PartialRequired

Ƭ **PartialRequired**<`T`, `Optionals`\>: { [P in keyof T as P extends Optionals ? never : P]-?: T[P] } & { [K in Optionals]?: T[K] } & {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Optionals` | extends keyof `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:99

___

### PathType

Ƭ **PathType**<`Type`, `Property`\>: `Type` extends `unknown` ? [`_PathType`](Powership.TU.md#_pathtype)<`Type`, `Property`\> extends infer R ? [`R`] extends [`never`] ? `unknown` : `R` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `Property` | extends `string` |

#### Defined in

packages/utils/lib/typings/Path.d.ts:1

___

### Paths

Ƭ **Paths**<`T`, `D`\>: [`D`] extends [`never`] ? `never` : `T` extends `object` ? { [K in keyof T]-?: K extends string \| number ? \`${K}\` \| (Paths<T[K], Prev[D]\> extends infer R ? Join<K, R\> : never) : never }[keyof `T`] : `never` \| ``""``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `D` | extends `number` = ``10`` |

#### Defined in

packages/utils/lib/typings/Path.d.ts:6

___

### Pick

Ƭ **Pick**<`Obj`, `DotNotation`\>: [`GetFieldByDotNotation`](Powership.TU.md#getfieldbydotnotation)<`Obj`, `DotNotation`\>

**`Alias`**

to GetFieldByDotNotation

#### Type parameters

| Name |
| :------ |
| `Obj` |
| `DotNotation` |

#### Defined in

packages/utils/lib/typings/index.d.ts:108

___

### PrevIndex

Ƭ **PrevIndex**<`Current`\>: `Current` extends `number` ? `I.Pos`<`I.Prev`<`I.IterationOf`<`Current`\>\>\> : `never`

#### Type parameters

| Name |
| :------ |
| `Current` |

#### Defined in

packages/utils/lib/typings/Compute.d.ts:9

___

### PromiseType

Ƭ **PromiseType**<`P`\>: `P` extends `Promise`<infer T\> ? `T` : `never`

#### Type parameters

| Name |
| :------ |
| `P` |

#### Defined in

packages/utils/lib/typings/index.d.ts:30

___

### Serializable

Ƭ **Serializable**: ``null`` \| `undefined` \| [`Stringifiable`](../interfaces/Powership.TU.Stringifiable.md) \| [`SerializableList`](../interfaces/Powership.TU.SerializableList.md)

#### Defined in

packages/utils/lib/typings/index.d.ts:7

___

### Simplify

Ƭ **Simplify**<`T`\>: { [KeyType in keyof T]: T[KeyType] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:60

___

### TypeLike

Ƭ **TypeLike**<`T`, `Level`\>: `T` extends { `[K: string]`: `any`;  } ? { [K in keyof T]: T[K] extends Object ? Level["length"] extends 2 ? any : T[K] extends AnyFunction ? AnyFunction : TypeLike<T[K], [...Level, 0]\> : any } : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Level` | extends `ReadonlyArray`<`number`\> = [``0``] |

#### Defined in

packages/utils/lib/typings/index.d.ts:79

___

### UnionToIntersection

Ƭ **UnionToIntersection**<`T`\>: `T` extends `any` ? (`x`: `T`) => `any` : `never` extends (`x`: infer R) => `any` ? { [K in keyof R]: R[K] } : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:57

___

### UnknownRecord

Ƭ **UnknownRecord**: `Object`

#### Index signature

▪ [K: `string`]: `unknown`

#### Defined in

packages/utils/lib/typings/index.d.ts:34

___

### Writeable

Ƭ **Writeable**<`T`\>: { -readonly [P in keyof T]: T[P] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:47

___

### \_PathType

Ƭ **\_PathType**<`Type`, `Property`\>: `string` extends `Property` ? `never` : `Property` extends keyof `Type` ? `Type`[`Property`] : `Property` extends \`${infer Head}.$\` ? [`PathType`](Powership.TU.md#pathtype)<[`PathType`](Powership.TU.md#pathtype)<`Type`, `Head`\>, ``"$"``\> : `Property` extends ``"$"`` ? `Type` extends `ReadonlyArray`<infer T\> ? `T`[] : `Type` extends `object` ? { [K in Extract<keyof Type, string\>]: Type[K] }[`Extract`<keyof `Type`, `string`\>][] : `undefined` : `Property` extends ``""`` ? `Type` : `Property` extends \`${number}\` ? `Type` extends `ReadonlyArray`<infer ArrayType\> ? `ArrayType` : `undefined` : `Property` extends \`${infer Key}.${infer Rest}\` ? `Key` extends \`${number}\` ? `Type` extends `ReadonlyArray`<infer ArrayType\> ? [`PathType`](Powership.TU.md#pathtype)<`ArrayType`, `Rest`\> : `undefined` : `Key` extends keyof `Type` ? `Type`[`Key`] extends `Map`<`string`, infer MapType\> ? `MapType` : [`PathType`](Powership.TU.md#pathtype)<`Type`[`Key`], `Rest`\> : `undefined` : `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `Property` | extends `string` |

#### Defined in

packages/utils/lib/typings/Path.d.ts:2

## Variables

### A\_Z

• `Const` **A\_Z**: [``"A"``, ``"B"``, ``"C"``, ``"D"``, ``"E"``, ``"F"``, ``"G"``, ``"H"``, ``"I"``, ``"J"``, ``"K"``, ``"L"``, ``"M"``, ``"N"``, ``"O"``, ``"P"``, ``"Q"``, ``"R"``, ``"S"``, ``"T"``, ``"U"``, ``"V"``, ``"W"``, ``"X"``, ``"Y"``, ``"Z"``, ``"a"``, ``"b"``, ``"c"``, ``"d"``, ``"e"``, ``"f"``, ``"g"``, ``"h"``, ``"i"``, ``"j"``, ``"k"``, ``"l"``, ``"m"``, ``"n"``, ``"o"``, ``"p"``, ``"q"``, ``"r"``, ``"s"``, ``"t"``, ``"u"``, ``"v"``, ``"w"``, ``"x"``, ``"y"``, ``"z"``]

#### Defined in

packages/utils/lib/typings/index.d.ts:95

packages/utils/lib/typings/index.d.ts:96

___

### noop

• `Const` **noop**: `Object`

#### Defined in

packages/utils/lib/typings/index.d.ts:104

## Functions

### tuple

▸ **tuple**<`T`\>(`...args`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` |

#### Returns

`T`

#### Defined in

packages/utils/lib/typings/index.d.ts:6

___

### tupleEnum

▸ **tupleEnum**<`T`\>(`...values`): { readonly [K in string]: K } & `T`[`number`] extends ``"list"`` ? { `__list`: `any`[`any`][]  } : { `list`: `T`[`number`][]  } & `T`[`number`] extends ``"enum"`` ? { `__enum`: `any`[`any`]  } : { `enum`: `T`[`number`]  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `T` |

#### Returns

{ readonly [K in string]: K } & `T`[`number`] extends ``"list"`` ? { `__list`: `any`[`any`][]  } : { `list`: `T`[`number`][]  } & `T`[`number`] extends ``"enum"`` ? { `__enum`: `any`[`any`]  } : { `enum`: `T`[`number`]  }

#### Defined in

packages/utils/lib/typings/index.d.ts:14

___

### tupleNum

▸ **tupleNum**<`T`\>(`...args`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` |

#### Returns

`T`

#### Defined in

packages/utils/lib/typings/index.d.ts:13
