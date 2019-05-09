import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ToggleList from '../toggle-list';
import { setSelectedCondition } from '../../AC';
import './sorting-filter.scss';

const SortingFilter = ({ sortingData, toggleHandler }) => (
  <div className="sorting-filter">
    <span>{sortingData.label}</span>
    <ToggleList
      toggleHandler={toggleHandler}
      storePathName="selectedSortingFilter"
      listClassStyle="sorting-filter__list"
      itemContainerStyle="sorting-filter__item-container"
      itemClassStyle="sorting-filter__item"
      items={sortingData.items.map(item => ({
        value: item.value,
        component: (
          <button
            className="sorting-filter__item"
            type="submit"
          >
            {item.name}
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
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  // from connect
  toggleHandler: PropTypes.func.isRequired,
};

export default connect(null, { toggleHandler: setSelectedCondition })(SortingFilter);
