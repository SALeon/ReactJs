import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchFilter from '../search-filter';
import SortingFilter from '../sorting-filter';
import './movie-header.scss';

class MoviesHeader extends PureComponent {
  static propTypes = {
    labels: PropTypes.shape({
      siteLabel: PropTypes.string.isRequired,
      searchLabel: PropTypes.string.isRequired,
      filterItems: PropTypes.arrayOf(PropTypes.object).isRequired,
      sortingInfo: PropTypes.shape({
        label: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
      }).isRequired,
      searchResult: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { siteLabel, filterItems, searchLabel, searchResult, sortingInfo } = this.props.labels;
    return (
      <header className="header header--movie">
        <div className="header__title">{siteLabel}</div>
        <SearchFilter
          searchConditionsItems={filterItems}
          inputPlaceholder="enter search"
          searchLabel={searchLabel}
        />
        <div className="header__row">
          <div className="search-result">{searchResult}</div>
          <SortingFilter sortingData={sortingInfo} />
        </div>
      </header>
    );
  }
}

export default connect()(MoviesHeader);
