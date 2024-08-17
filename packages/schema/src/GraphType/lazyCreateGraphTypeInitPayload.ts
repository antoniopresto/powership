import { ObjectType } from '../ObjectType';
import { TAnyFieldType } from '../fields/FieldType';
import { FieldInput, ObjectFieldInput } from '../fields/_parseFields';

import {
  GraphType,
  GraphTypeArgs,
  LazyParseGraphTypePayload,
} from './GraphType';

// used to lazy parse args to improve circular types usage
export function lazyCreateGraphTypeInitPayload(
  args: GraphTypeArgs,
  onLoad?: (
    payload: LazyParseGraphTypePayload
  ) => LazyParseGraphTypePayload | void
) {
  let payload: LazyParseGraphTypePayload;

  let id: string | undefined = undefined;

  let definitionInput: ObjectFieldInput | (() => ObjectFieldInput);

  let idFromArgs;
  if (args.length === 2) {
    idFromArgs = id = args[0];
    definitionInput = args[1];
  } else {
    definitionInput = args[0];
  }

  function initializer(self: GraphType<FieldInput>): LazyParseGraphTypePayload {
    if (payload) return payload;

    const def =
      typeof definitionInput === 'function'
        ? // @ts-ignore
          definitionInput()
        : definitionInput;

    const field = powership.parseObjectField('temp', def, {
      returnInstance: true,
    }) as TAnyFieldType & { utils: { object?: any } };

    const objectType = ObjectType.is(field?.utils?.object)
      ? field.utils.object
      : undefined;

    if (objectType) {
      if (id && objectType.id && objectType.id !== id) {
        field.utils.object = objectType.clone((el) => el.objectType(id));
      } else if (id) {
        field.utils.object.identify(id);
      }
    }

    if (!id && objectType) {
      id = powership.getObjectDefinitionId(
        objectType.definition,
        true // make nullable, the error below about undefined name is more clear
      );
    }

    if (id && !field.id) {
      field.id = id;
    }

    payload = {
      definition: field.asFinalFieldDef,

      // @ts-ignore
      definitionInput,

      field,
      // id can be from inner type, like an object type with id or defined in an argument of createType
      id,
      idFromArgs,
      objectType: objectType,
    };

    if (id) {
      self.identify(id);
    }

    const res = onLoad?.(payload);

    if (res !== undefined) {
      return res;
    }

    return payload;
  }

  return {
    // id can also be from inner type, like an object type with id
    definitionInput,
    idFromArgs,
    initializer,
  };
}
