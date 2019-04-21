import { FILTER_SEARCH, FILTER_SORT, SEARCH_VALUE } from '../AC/index';
import { filterItems, sortingInfo } from '../constants/staticData';

const defaultFilters = {
  selectedSearchFilter: filterItems[0],
  selectedSortingFilter: sortingInfo.items[0],
  searchInput: '',
};

export default (filters = defaultFilters, action) => {
  const { payload, type } = action;

  switch (type) {
    case FILTER_SEARCH:
      return { ...filters, selectedSearchFilter: payload };
    case FILTER_SORT:
      return { ...filters, selectedSortingFilter: payload };
    case SEARCH_VALUE:
      return { ...filters, searchInput: payload };
    default: return filters;
  }
};
