import React from 'react';
import PropTypes from 'prop-types';

const Button = React.forwardRef(({ children, className, onClick }, ref) => (
  <button ref={ref} className={className} data-test="button" onClick={onClick}>{children}</button>
));

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  className: ''
};

export default Button;
