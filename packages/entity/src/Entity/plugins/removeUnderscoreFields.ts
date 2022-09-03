import { createEntityPlugin } from '../EntityPlugin';

export const removeUnderscoreFields = createEntityPlugin(
  'removeUnderscoreFields',
  {
    async createDefinition(def, { fields }) {
      fields.forEach((k) => {
        if (k.startsWith('__')) delete def[k];
      });
    },
  }
);
