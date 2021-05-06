import React from 'react';
import { withRouter } from 'react-router-dom';
import ButtonPulsate from '../button-pulsate/button-pulsate.component';

import './card.styles.scss';

function Card() {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture `}>&nbsp;</div>
        <h4 className="card__heading">
          <span className={`card__heading-span `}>MAKARA X</span>
        </h4>
        <div className="card__details">
          <ul>
            <li>2019</li>
            <li>3 Awards</li>
            <li>Underwater ROV</li>
          </ul>
        </div>
      </div>
      <div className={`card__side card__side--back `}>
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">Rp.</p>
          </div>
          <ButtonPulsate>Ikuti ujian</ButtonPulsate>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Card);
