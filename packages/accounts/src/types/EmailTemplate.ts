import { createType, Infer } from '@powership/schema';

export const EmailTemplateType = createType('AccountEmailTemplate', {
  object: {
    from: 'string',
    subject: 'string',
    body: {
      object: {
        kind: { enum: ['html', 'text'] },
        content: 'string',
      },
    },
  },
} as const);

export type EmailTemplate = Infer<typeof EmailTemplateType>;
