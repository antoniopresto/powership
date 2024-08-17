/**
 * Checks if the field names should be hidden from generated code
 * @param name
 */
export function isHiddenFieldName(name: string) {
  return name === '__dschm__';
}

Object.assign(powership, {
  isHiddenFieldName,
});

declare global {
  interface powership {
    isHiddenFieldName: typeof isHiddenFieldName;
  }
}
