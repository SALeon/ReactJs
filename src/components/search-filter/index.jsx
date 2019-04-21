import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchField from '../search-field';
import Button from '../button';
import ToggleList from '../toggle-list';
import { setSearchCondition, setFilteredValue } from '../../AC';
import './search-filter.scss';

class SearchFilter extends PureComponent {
  static propTypes = {
    inputPlaceholder: PropTypes.string.isRequired,
    searchLabel: PropTypes.string.isRequired,
    searchConditionsItems: PropTypes.arrayOf(
      PropTypes.string,
    ),
    // from connect
    toggleHandler: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
  }

  handleInput = (ev) => {
    ev.preventDefault();
    this.props.setValue(ev.target.value);
  }

  handleSubmit = () => {
    console.log(this.state.inputValue);
  }

  render() {
    console.log('search filter render');
    const {
      inputPlaceholder, searchLabel, searchConditionsItems, toggleHandler,
    } = this.props;

    return (
      <div className="filter">
        <h2 className="filter__name">FIND YOUR MOVIE</h2>
        <SearchField
          classStyles="filter__input"
          placeholder={inputPlaceholder}
          inputHandler={this.handleInput}
        />
        <h3 className="filter__title">SEARCH BY</h3>
        <ToggleList
          toggleHandler={toggleHandler}
          storePathName="selectedSearchFilter"
          listClassStyle="filter__list"
          itemContainerStyle="filter__item-container"
          itemClassStyle="filter__item"
          items={searchConditionsItems.map(item => ({
            name: item,
            component: (
              <button
                className="filter__item"
                type="button"
              >
                {item}
              </button>
            ),
          }))}
        />
        <Button
          classStyles="filter__submit-button"
          label={searchLabel}
          clickHandler={this.handleSubmit}
        />
      </div>
    );
  }
}

export default connect(null, {
  toggleHandler: setSearchCondition,
  setValue: setFilteredValue,
})(SearchFilter);
