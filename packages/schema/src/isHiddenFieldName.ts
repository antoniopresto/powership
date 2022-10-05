export const HIDDEN_FIELD_NAME_REGEX = /^(_)$/;

/**
 * Checks if the field names should be hidden from generated code
 * @param name
 */
export function isHiddenFieldName(name: string) {
  return HIDDEN_FIELD_NAME_REGEX.test(name);
}
