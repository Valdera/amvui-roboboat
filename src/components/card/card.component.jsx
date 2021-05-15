import React from 'react';
import logo from '../../assets/ship-1-product.jpg';
import { withRouter } from 'react-router-dom';
import ButtonPulsate from '../button-pulsate/button-pulsate.component';

import './card.styles.scss';

const Card = () => {
  return (
    <div className="card">
      <div className={`card__picture `}>
        <img src={logo} alt="card-photo" />
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
        <div className="card__button">
          {/* <ButtonPulsate>More Details</ButtonPulsate> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
