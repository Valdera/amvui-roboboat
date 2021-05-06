import React from 'react';
import logo from '../../assets/ship-bubble.jpg';
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
          <li>3 Awards</li>
          <li>Underwater ROV</li>
        </ul>
        <ButtonPulsate>Ikuti ujian</ButtonPulsate>
      </div>
    </div>
  );
};

export default Card;
