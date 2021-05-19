import React from 'react';
import bos from '../../assets/bos.png';

import './member-card.styles.scss';

const MemberCard = ({ member }) => {
  return (
    <div className="member-card">
      <div className="member-card__picture">
        <img src={bos} alt="member " />
        <h3>{member.role}</h3>
      </div>
      <div className="member-card__content">
        <h3>
          {member.name}
          <div />
        </h3>
        <p>{member.major}</p>
        <div className="member-card__social">
          {member.linkedIn ? (
            <a href={member.linkedIn}>
              <i className="fab fa-linkedin"></i>
            </a>
          ) : (
            ''
          )}
          {member.instagram ? (
            <a href={member.instagram}>
              <i className="fab fa-instagram-square"></i>
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
