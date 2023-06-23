import type { StringValue as TimeString } from '@powership/utils';

export interface DurableFieldConfig {
  ttl?: TimeString | number;
}
