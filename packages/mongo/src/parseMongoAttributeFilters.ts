import {
  createAggioIndexBasedFilters,
  parseAggioAttributeFilters,
} from '@backland/transporter';

// TODO move to transporter, move tests
export const createMongoIndexBasedFilters = createAggioIndexBasedFilters;
export const parseMongoAttributeFilters = parseAggioAttributeFilters;
