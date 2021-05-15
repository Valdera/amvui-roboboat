import React from 'react';
import bos from '../../assets/bos.png';

import './member-card.styles.scss';

const MemberCard = () => {
  return (
    <div className="member-card">
      <div className="member-card__picture">
        <img src={bos} alt="member " />
        <h3>Electrical Engineer</h3>
      </div>
      <div className="member-card__content">
        <h3>
          Hansel Matthew <div />
        </h3>
        <p>Electrical Engineering 18</p>
        <div className="member-card__social">
          <i class="fab fa-linkedin"></i>{' '}
          <i class="fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
