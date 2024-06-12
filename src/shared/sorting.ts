import { SortDirection } from '@react-types/shared';

export type SortOrderByAndOrder<Entry> = {
  orderBy: keyof Entry;
  order: SortOrder;
  direction?: SortDirection;
};

export type SortOrder = 'asc' | 'desc';

export const getSortOrderBySortDirection = (
  order?: SortDirection
): SortOrder => {
  if (order === 'ascending') {
    return 'asc';
  }
  return 'desc';
};
