/**
 * Used to represent an object as another object field
 */

import { Darch } from '../Darch';
import { Infer } from '../Infer';
import type { ObjectType } from '../ObjectType';

import { FieldType, FieldTypeParser, isFieldInstance } from './FieldType';
import type { ObjectDefinitionInput } from './_parseFields';

export class ObjectField<
  DefinitionInput extends ObjectDefinitionInput
> extends FieldType<Infer<DefinitionInput>, 'object', DefinitionInput> {
  parse: FieldTypeParser<Infer<DefinitionInput>>;

  utils: {
    object: ObjectType<DefinitionInput>;
  };

  static is(t: any): t is ObjectField<any> {
    return isFieldInstance(t) && t.typeName === 'object';
  }

  constructor(def: DefinitionInput) {
    super('object', def);

    this.utils = {
      // @ts-ignore
      object: Darch.createObjectType(def),
    };

    this.parse = this.applyParser({
      parse: (input) => {
        return this.utils.object.parse(input);
      },
    });
  }

  static create = <DefinitionInput extends ObjectDefinitionInput>(
    def: DefinitionInput
  ) => {
    return new ObjectField<DefinitionInput>(def);
  };
}
