import { delay } from '@swind/utils';

import { tsfyEntities } from '../tsfyEntities';
import { tsfyEntitiesWriter } from '../tsfyEntitiesWriter';

import { UserEntity } from './demo/UserEntity';

describe('tsfyEntity', () => {
  // afterEach();

  test('works', async () => {
    const sut = await tsfyEntities({ entities: [UserEntity] }).toString({
      prettier: true,
    });

    expect(sut.split('\n')).toEqual([
      'export type UserEntity_InputDefinition = { name: T197624; age: T188109 };',
      '',
      'export type UserEntity_Indexes = [T421047];',
      '',
      'export type TEntityUser_idField = {',
      '  description: \'The full string value of the first index following the RegExp format "^user⋮_id⋮.*"\';',
      '  name: "EntityUser_id";',
      '  type: "string";',
      '  def: T194747;',
      '};',
      '',
      'export type TEntityUser_idPKField = {',
      '  description: \'The _idPK field in the RegExp format "^user⋮_id⋮.*"\';',
      '  name: "EntityUser_idPK";',
      '  type: "string";',
      '  def: { regex: T981254 };',
      '};',
      '',
      'export type UserEntity_Options = {',
      '  type: "object";',
      '  def: {',
      '    createdAt: T106393;',
      '    id: { type: "string" };',
      '    ulid: { type: "ulid" };',
      '    updatedAt: { type: "date" };',
      '    name: { type: "string" };',
      '    age: { type: "int" };',
      '    createdBy: T312245;',
      '    updatedBy: { optional: true; type: "string" };',
      '    _id: TEntityUser_idField;',
      '    _idPK: TEntityUser_idPKField;',
      '  };',
      '};',
      '',
      'export type TUserType = GraphType<{',
      '  type: "object";',
      '  def: { name: T197624; age: T188109 };',
      '}>;',
      '',
      'export type UserEntity_EntityTypesContext = {',
      '  originDefinition: UserEntity_InputDefinition;',
      '  indexes: UserEntity_Indexes;',
      '  outputDefinition: UserEntity_Options;',
      '  options: {',
      '    name: "User";',
      '    allowExtraFields: true;',
      '    indexes: [T421047];',
      '    type: TUserType;',
      '  };',
      '  documentBase: UserEntity_DocumentBase;',
      '  documentCreationInput: EntityDocumentInput<UserEntity_DocumentBase>;',
      '  document: EntityDocument<UserEntity_DocumentBase>;',
      '};',
      '',
      'export interface UserEntity_DocumentBase {',
      '  name: string;',
      '  age: number;',
      '}',
      '',
      'declare function createEntity(config: {',
      '  name: "User";',
      '  [K: string]: unknown;',
      '}): TUserEntity;',
      '',
      'export type TUserEntity = EntityFromContext<UserEntity_EntityTypesContext>;',
      '',
      'type T197624 = { type: "string" };',
      'type T188109 = { type: "int" };',
      'type T845687 = [".name"];',
      'type T421047 = { name: "_id"; PK: T845687 };',
      'type T106393 = { type: "date" };',
      'type T312245 = { optional: true; type: "string" };',
      'type T981254 = ["^user⋮_id⋮.*"];',
      'type T194747 = { regex: T981254 };',
      '',
    ]);
  });

  test('writer', async () => {
    const sut = tsfyEntitiesWriter({ writeThrottleMS: 10 });
    sut.listen();

    sut.add(UserEntity);
    await delay(500);
  });
});
