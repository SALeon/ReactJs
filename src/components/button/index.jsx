import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ label, clickHandler, classStyles }) => (<button className={['button', classStyles].join(' ')} onClick={clickHandler} type="submit">{label}</button>);

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  classStyles: PropTypes.string,
};

export default Button;
