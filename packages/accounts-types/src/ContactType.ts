import { createSchema, createType, Infer, tupleEnum } from 'backland';

export const ContactOriginEnum = tupleEnum(
  'user_provided',
  'accounts_provider'
);
export const ContactOrigin = Object.values(ContactOriginEnum);

export const ContactOriginSchema = createSchema({
  external: {
    alias: 'ExternalLoginProvider',
    object: {
      date: { date: { autoCreate: true } },
      name: { description: 'Ex: Apple, Facebook or Google', string: {} },
    },
    optional: true,
  },
  kind: { enum: ContactOrigin },
});

export type ContactOrigin = Infer<typeof ContactOriginSchema>;

export const ContactBaseSchema = createSchema({
  origin: { optional: true, type: ContactOriginSchema },
  principal: 'boolean?',
  value: 'string',
  verification: {
    object: {
      date: 'date',
      method: { enum: ['phone', 'email', 'provider'] },
    },
    optional: true,
  },
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
      description:
        'E.164 formatted phone number: https://en.wikipedia.org/wiki/E.164',
      string: { regex: ['^\\+?[1-9]\\d{1,14}$'] },
    },
  },
});
