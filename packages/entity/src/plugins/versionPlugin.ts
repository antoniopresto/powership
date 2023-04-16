import { createEntityPlugin } from '../EntityPlugin';

export const versionPlugin = createEntityPlugin(
  'versionPlugin',
  function (hooks) {
    hooks.createDefinition.pushMiddleware(function createDefinition(
      definition,
      context
    ) {
      if (context.kind !== 'databaseDefinition') return;
      definition._v = { def: { autoCreate: true }, type: 'ulid' };
    });
  }
);
