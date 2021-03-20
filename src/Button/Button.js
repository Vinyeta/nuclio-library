import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * featured UI component for user interaction
 */
export const Button = ({featured, size, value, onClick}) => {
  const mode = featured ? 'defaultButton_featured' : 'defaultButton';
  return (
    <div
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  featured: PropTypes.bool,
  /** 
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  value: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  featured: false,
  size: 'small',
  onClick: undefined,
};
