export const Symbols = Object.freeze({
  // === flux status ===
  NOT_STARTED: Symbol('NOT_STARTED'),
  DID_START: Symbol('DID_START'),
  DID_END: Symbol('DID_END'),
  DID_SUCCESS: Symbol('DID_SUCCESS'),
  DID_NOT_THROWN: Symbol('DID_NOT_THROWN'),
  DID_THROWN: Symbol('DID_THROWN'),

  // === flux instructions ===
  SKIP: Symbol('SKIP'),
  CONTINUE: Symbol('CONTINUE'),
  GOTO: Symbol('GOTO'),
  VOID: Symbol('VOID'),

  // === property status ===
  VALUE_CHANGED: Symbol('VALUE_CHANGED'),
  VALUE_UNCHANGED: Symbol('VALUE_UNCHANGED'),
  VALUE_ABOVE_MAXIMUM: Symbol('VALUE_ABOVE_MAXIMUM'),
  VALUE_BELOW_MINIMUM: Symbol('VALUE_BELOW_MINIMUM'),
  VALUE_VALID: Symbol('VALUE_VALID'),
  VALUE_NOT_VALID: Symbol('VALUE_NOT_VALID'),
});
