import React from 'react';
import MemberCard from '../../components/member-card/member-card.component';
import Composition from '../../components/composition/composition.component';
import { executives } from '../../data/member';

const SectionExecutives = () => {
  const imageArr = [
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_executives-1.jpg?alt=media&token=29919653-5c25-43a3-968b-e2a87600b5a5',
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_executives-2.jpg?alt=media&token=a8edecd8-ec3a-44f9-81c8-937fbf493543',
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_executives-3.jpg?alt=media&token=c0a97af5-bdbd-469f-97ac-7519fd9936eb'
  ];

  return (
    <div className="member-section">
      <div className="member-section__title">
        <div className="member-section__title--icon">
          <i class="fas fa-link"></i>{' '}
        </div>
        <p>Executives</p>
      </div>
      <div className="member-section__desc">
        <Composition imageArr={imageArr} />
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
