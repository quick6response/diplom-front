import { SortDirection } from '@react-types/shared';

export type SortOrderByAndOrder<Entry> = {
  orderBy: keyof Entry;
  order: SortOrder;
  direction?: SortDirection;
};

export type SortOrder = 'ASC' | 'DESC';

export const getSortOrderBySortDirection = (
  order?: SortDirection
): SortOrder => {
  if (order === 'ascending') {
    return 'ASC';
  }
  return 'DESC';
};
