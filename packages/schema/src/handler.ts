import { FieldDefinition } from './fields/_parseFields';
import { Infer } from './fields/Infer';
import { createType, FieldParserConfig } from './types';

export function checkType<Type extends FieldDefinition>(
  definition: Type,
  value: any,
  validationConfig?: FieldParserConfig
): value is Infer<Type> {
  // @ts-ignore
  return createType(definition).validate(value, validationConfig);
}

export function handler<Type extends FieldDefinition, HandledValue>(
  definition: Type,
  input: any,
  handle: (input: Infer<Type> | null, value: any) => HandledValue,
  validationConfig?: FieldParserConfig
): Infer<Type> | HandledValue;

export function handler<Type extends FieldDefinition, Option>(
  definition: Type,
  input: any,
  resultIfInvalid: Option,
  validationConfig?: FieldParserConfig
): Infer<Type> | Option;

export function handler<Type extends FieldDefinition>(
  definition: Type,
  input: any,
  handlerOrPlaceholder: any,
  validationConfig?: FieldParserConfig
) {
  const type = createType(definition);

  let valid: boolean;
  let value: any = null;

  try {
    value = type.parse(input, validationConfig);
    valid = true;
  } catch (e) {
    valid = false;
  }

  if (typeof handlerOrPlaceholder === 'function') {
    return handlerOrPlaceholder(value, input);
  }

  return valid ? value : handlerOrPlaceholder;
}
