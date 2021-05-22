import React from 'react';
import './button-c.styles.scss';

const ButtonC = ({ children, type, handleClick }) => {
  return (
    <button className="button-c" onClick={handleClick}>
      {children}
    </button>
  );
};

export default ButtonC;
