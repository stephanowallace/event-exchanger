import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => (
  <button data-test="button" onClick={onClick}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  onClick: PropTypes.func
}

export default Button;
