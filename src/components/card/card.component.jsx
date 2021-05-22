import React from 'react';

import './card.styles.scss';

const Card = ({ product, type }) => {
  return (
    <div className="card">
      <div className={`card__picture `}>
        <img src={product.url} alt="card" />
      </div>
      <h4 className="card__heading">
        <span className={`card__heading-span `}>{product.name}</span>
      </h4>
      <div className="card__details">
        <ul>
          <li>{product.year}</li>
          <li>{type}</li>
          <li>
            <span>{product.juara}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
