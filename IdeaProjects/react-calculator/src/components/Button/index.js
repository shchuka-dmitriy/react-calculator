import React from 'react';
import PropTypes from 'prop-types';


const Button = ({onClick, ...props}) => {

  const onButtonClick = () => {
    onClick(rest.children);
  };

  return (
    <div onClick={onButtonClick} children={props.children}/>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.string
};

export default Button;