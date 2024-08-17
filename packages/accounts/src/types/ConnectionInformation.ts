import { createObjectType, Infer } from '@powership/schema';

export const ConnectionInformationSchema = createObjectType(
  'AccountConnectionInformation',
  {
    ip: 'string',
    userAgent: 'string',
    $string: 'string',
  }
);

export type ConnectionInformation = Infer<typeof ConnectionInformationSchema>;
