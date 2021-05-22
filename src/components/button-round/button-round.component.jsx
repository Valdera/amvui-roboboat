import React from 'react';
import './button-round.styles.scss';

const ButtonRound = ({ children, type, handleClick }) => {
  return (
    <button
      className={`button-round ${
        type === 'yellow' ? 'button-round--yellow' : ''
      }`}
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default ButtonRound;
