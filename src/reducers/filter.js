import { FILTER_SEARCH, FILTER_SORT, SEARCH_VALUE } from '../AC/index';
import { filterItems, sortingInfo } from '../constants/staticData';

const defaultFilters = {
  selectedSortingFilter: sortingInfo.items[0].value,
  selectedSearchFilter: filterItems[0].value,
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
