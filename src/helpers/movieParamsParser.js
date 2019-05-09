const matchedParams = {
  selectedSearchFilter: 'searchBy=',
  selectedSortingFilter: 'sortBy=',
  searchInput: 'search=',
};

export default ({ filters }) => Object.keys(filters)
  .reduce((request, key) => {
    if (!matchedParams[key]) return request;
    return request ? `${request}&${matchedParams[key]}${filters[key]}`
      : `?${matchedParams[key]}${filters[key]}`;
  }, '');
