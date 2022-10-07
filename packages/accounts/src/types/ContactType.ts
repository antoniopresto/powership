import { createSchema, createType, Infer, tupleEnum } from 'backland';

export const ContactOriginEnum = tupleEnum('user_provided', 'accounts_provider');
export const ContactOrigin = Object.values(ContactOriginEnum);

export const ContactOriginSchema = createSchema({
  kind: { enum: ContactOrigin },
  external: {
    alias: 'ExternalLoginProvider',
    object: {
      name: { string: {}, description: 'Ex: Apple, Facebook or Google' },
      date: { date: { autoCreate: true } },
    },
    optional: true,
  },
});

export type ContactOrigin = Infer<typeof ContactOriginSchema>;

export const ContactBaseSchema = createSchema({
  value: 'string',
  verification: {
    object: {
      date: 'date',
      method: { enum: ['phone', 'email', 'provider'] },
    },
    optional: true,
  },
  principal: 'boolean?',
  origin: { type: ContactOriginSchema, optional: true },
} as const);

export const EmailContactType = createType('EmailContact', {
  object: {
    ...ContactBaseSchema.definition,
    value: 'email',
  },
});

export const PhoneContactType = createType('PhoneContact', {
  object: {
    ...ContactBaseSchema.definition,
    value: {
      description: 'E.164 formatted phone number: https://en.wikipedia.org/wiki/E.164',
      string: { regex: ['^\\+?[1-9]\\d{1,14}$'] },
    },
  },
});
