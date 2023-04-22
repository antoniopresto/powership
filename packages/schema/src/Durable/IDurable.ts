import type { StringValue as TimeString } from '@swind/utils';

export interface DurableFieldConfig {
  ttl?: TimeString | number;
}
