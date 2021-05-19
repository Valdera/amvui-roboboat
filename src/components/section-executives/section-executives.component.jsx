import React from 'react';
import MemberCard from '../../components/member-card/member-card.component';
import Composition from '../../components/composition/composition.component';
import { executives } from '../../data/member';

const SectionExecutives = () => {
  return (
    <div className="member-section">
      <div className="member-section__title">
        <div className="member-section__title--icon">
          <i class="fas fa-link"></i>{' '}
        </div>
        <p>Executives</p>
      </div>
      <div className="member-section__desc">
        <Composition />
        <div className="member-section__text">
          <p>
            Executives is the peoples who are in charge of maintaining the
            Autonomous Marine Vehicle
          </p>
        </div>
      </div>
      <div className="member-section__members">
        {executives.map((member) => (
          <MemberCard member={member} key={member.name} />
        ))}
      </div>
    </div>
  );
};

export default SectionExecutives;
