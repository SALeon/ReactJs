import { createSelector } from 'reselect';

const selectedIdGetter = state => state.sortedFilter.selectedSearchFilter;
const idGetter = (state, props) => props.id;

export const toggleSelectFactory = () =>
  createSelector(selectedIdGetter, idGetter, (selectedId, itemId) =>
    selectedId === itemId);
