import React from 'react';
import { ReactComponent as MemberSvg } from '../../assets/member-robot.svg';
import ButtonRound from '../button-round/button-round.component';
import './see-member.styles.scss';
import { withRouter } from 'react-router-dom';

const SeeMember = ({ history }) => {
  const handleClick = () => {
    history.push('/members');
    window.scrollTo(0, 0);
  };
  return (
    <div className="see-member">
      <div className="see-member__svg">
        <MemberSvg />
      </div>
      <div className="see-member__content">
        <h1>Meet Our Members</h1>
        <p>
          Our team is divided into 4 divisions : Electrical, Mechanical,
          Programming, and Managerial.
        </p>
        <ButtonRound handleClick={handleClick} type="yellow">
          See More
        </ButtonRound>
      </div>
    </div>
  );
};

export default withRouter(SeeMember);
