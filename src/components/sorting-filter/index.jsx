import React from 'react';
import PropTypes from 'prop-types';
import ToggleList from '../toggle-list';
import './sorting-filter.scss';

const SortingFilter = ({ sortingData }) => (
  <div className="sorting-filter">
    <span>{sortingData.label}</span>
    <ToggleList
      listClassStyle="sorting-filter__list"
      itemContainerStyle="sorting-filter__item-container"
      itemClassStyle="sorting-filter__item"
      items={sortingData.items.map(item => ({
        id: item.id,
        component: (
          <button
            className="sorting-filter__item"
            type="button"
          >
            {item.label}
          </button>
        ),
      }))}
    />
  </div>
);

SortingFilter.propTypes = {
  sortingData: PropTypes.shape({
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

export default SortingFilter;
