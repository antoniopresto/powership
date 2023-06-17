/**
 * Used to represent an object as another object field
 */

import { TypeLike } from '@swind/utils';

import { CircularDeps } from '../CircularDeps';

import { FieldType, FieldTypeParser, isFieldInstance } from './FieldType';
import { SchemaDefinition } from './_parseFields';

type AnyObjectField = TypeLike<(typeof ObjectField)['prototype']>;

export class ObjectField<
  DefinitionInput extends SchemaDefinition
> extends FieldType<unknown, 'object', DefinitionInput> {
  parse: FieldTypeParser<unknown>;

  utils: {
    object: any;
  };

  static is(t: any): t is AnyObjectField {
    return isFieldInstance(t) && t.typeName === 'object';
  }

  constructor(def: DefinitionInput) {
    super({ def: def, name: 'object' });

    this.utils = {
      // @ts-ignore circular
      object: CircularDeps.createObjectType(def as any) as any,
    };

    this.parse = this.applyParser({
      parse: (input, _options) => {
        return this.utils.object.parse(input, _options);
      },
    });
  }

  static create = <DefinitionInput extends SchemaDefinition>(
    def: DefinitionInput
  ) => {
    return new ObjectField<DefinitionInput>(def);
  };
}
