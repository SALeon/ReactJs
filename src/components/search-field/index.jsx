import React from 'react';
import PropTypes from 'prop-types';
import './search-field.scss';

const SearchField = ({
  placeholder,
  inputHandler,
  classStyles,
  submitHandler,
}) => (
  <form
    onSubmit={submitHandler}
    className={`search-field ${classStyles}`}
  >
    <input
      onSubmit={submitHandler}
      autoFocus
      className="search-field__input"
      type="text"
      placeholder={placeholder}
      onChange={inputHandler}
    />
  </form>
);

SearchField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  classStyles: PropTypes.string,
};

export default SearchField;
