import React from 'react';

import './member-card.styles.scss';

const MemberCard = ({ member }) => {
  const unknown =
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/member%2Fmember_unknown.jpg?alt=media&token=914b850b-60f3-4254-83e4-7b08be206634';

  return (
    <div className="member-card">
      <div className="member-card__picture">
        {member.url ? (
          <div>
            <img src={member.url} alt="  " />
          </div>
        ) : (
          <div>
            {' '}
            <img src={unknown} alt=" " />
          </div>
        )}
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
