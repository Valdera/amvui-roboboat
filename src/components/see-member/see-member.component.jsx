import React from 'react';
import { ReactComponent as MemberSvg } from '../../assets/member-robot.svg';
import ButtonRound from '../button-round/button-round.component';
import './see-member.styles.scss';

const SeeMember = () => {
  return (
    <div className="see-member">
      <div className="see-member__svg">
        <MemberSvg />
      </div>
      <div className="see-member__content">
        <h1>Meet Our Members</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </p>
        <ButtonRound type="yellow">See More</ButtonRound>
      </div>
    </div>
  );
};

export default SeeMember;
