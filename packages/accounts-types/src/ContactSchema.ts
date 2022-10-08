import { createSchema, Infer, tupleEnum } from 'backland';

export const ContactOriginEnum = tupleEnum(
  'user_provided',
  'external_provider'
);

export const ContactOrigin = Object.values(ContactOriginEnum);

export const ContactOriginSchema = createSchema({
  external: {
    object: {
      date: { date: { autoCreate: true } },
      providerName: { string: {} },
    },
    optional: true,
  },
  kind: { enum: ContactOrigin },
});

export const ContactVerificationSchema = createSchema({
  date: 'date',
  method: { enum: ['phone', 'email', 'provider', 'other'] },
} as const);

export const ContactBaseSchema = createSchema({
  origin: { optional: true, type: ContactOriginSchema },
  principal: 'boolean?',
  value: 'string',
  verification: { optional: true, type: ContactVerificationSchema },
} as const);

export const EmailContactSchema = createSchema({
  ...ContactBaseSchema.definition,
  value: 'email',
});

export const PhoneContactSchema = createSchema({
  ...ContactBaseSchema.definition,
  value: 'phone',
});

export type ContactOrigin = Infer<typeof ContactOriginSchema>;
export type EmailContact = Infer<typeof EmailContactSchema>;
export type ContactVerification = Infer<typeof ContactVerificationSchema>;
export type PhoneContact = Infer<typeof PhoneContactSchema>;
