import React from 'react';
import PropTypes from 'prop-types';
import './search-field.scss';

const SearchField = ({ placeholder, inputHandler, classStyles }) => (
  <input className={['search-field', classStyles].join(' ')} type="text" placeholder={placeholder} onChange={inputHandler} />
);

SearchField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
  classStyles: PropTypes.string,
};

export default SearchField;
