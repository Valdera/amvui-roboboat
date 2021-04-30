import React from 'react';
import { ReactComponent as AchievementSvg } from '../../assets/achievement-winner.svg';
import ButtonRound from '../button-round/button-round.component';
import './see-achievement.styles.scss';

const SeeAchievement = () => {
  return (
    <div className="see-achievement">
      <div className="see-achievement__content">
        <h1>Past Achievement</h1>
        <ul>
          <li>2 ASV International Competition</li>
          <li>2 Champion ROV Competition</li>
          <li>3 ASV National Competition</li>
          <li>And many more</li>
        </ul>
        <ButtonRound type="yellow">See More</ButtonRound>
      </div>
      <div className="see-achievement__svg">
        <AchievementSvg />
      </div>
    </div>
  );
};

export default SeeAchievement;
