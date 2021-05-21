import React from 'react';
import logo from '../../assets/ship-1-product.jpg';

import './card.styles.scss';

const Card = () => {
  return (
    <div className="card">
      <div className={`card__picture `}>
        <img src={logo} alt="card" />
      </div>
      <h4 className="card__heading">
        <span className={`card__heading-span `}>MAKARA X</span>
      </h4>
      <div className="card__details">
        <ul>
          <li>2019</li>
          <li>Underwater ROV</li>
          <li>
            <span>2nd ASEAN Mate ROV</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
