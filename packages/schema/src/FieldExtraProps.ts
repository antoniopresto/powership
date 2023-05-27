import { DurableFieldConfig } from './Durable/IDurable';

/**
 * Represents the extra properties accepted in field definitions
 */
export interface FieldExtraProps {
  persist?: DurableFieldConfig | boolean;
}
