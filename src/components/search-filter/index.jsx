import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchField from '../search-field';
import Button from '../button';
import ToggleList from '../toggle-list';
import './search-filter.scss';

class SearchFilter extends Component {
  static propTypes = {
    inputPlaceholder: PropTypes.string.isRequired,
    searchLabel: PropTypes.string.isRequired,
    searchConditionsItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
  }

  state = {
    inputValue: '',
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { inputValue } = this.state;
    return inputValue === nextState.inputValue;
  }

  handleInput = (ev) => {
    this.setState({
      inputValue: ev.target.value,
    });
  }

  handleSubmit = () => {
    console.log(this.state.inputValue);
  }

  render() {
    const { inputPlaceholder, searchLabel, searchConditionsItems } = this.props;

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
          listClassStyle="filter__list"
          itemContainerStyle="filter__item-container"
          itemClassStyle="filter__item"
          items={searchConditionsItems.map(item => ({
            id: item.id,
            component: (
              <button
                className="filter__item"
                type="button"
              >
                {item.label}
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

export default SearchFilter;
