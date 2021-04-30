import React from 'react';
import './button-round.styles.scss';

const ButtonRound = ({ children, type }) => {
  return (
    <button
      className={`button-round ${
        type === 'yellow' ? 'button-round--yellow' : ''
      }`}>
      {children}
    </button>
  );
};

export default ButtonRound;
