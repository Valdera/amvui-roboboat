import React from 'react';
import './bubble.styles.scss';

const Bubble = ({ image, title, desc }) => {
  return (
    <div className="bubble">
      <div className="bubble__image">
        <img src={image} alt=" " />
      </div>
      <div className="bubble__text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Bubble;
