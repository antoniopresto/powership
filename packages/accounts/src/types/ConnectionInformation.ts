import { createSchema, Infer } from '@powership/schema';

export const ConnectionInformationSchema = createSchema(
  'AccountConnectionInformation',
  {
    ip: 'string',
    userAgent: 'string',
    $string: 'string',
  }
);

export type ConnectionInformation = Infer<typeof ConnectionInformationSchema>;
