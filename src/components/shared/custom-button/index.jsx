import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({
                        label = 'Button',
                        type = 'button',
                        onClick = () => {
                        },
                        className = '',
                        ...props
                      }) => {
  const baseStyles =
    'bg-primary text-quote-radio-option text-center rounded-full justify-center items-center px-8 py-4 font-sans font-bold text-base leading-tight transition-transform duration-300 flex';
  const hoverStyles = 'hover:scale-90 focus:outline-none focus:ring-2 focus:ring-offset-2';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default CustomButton;
