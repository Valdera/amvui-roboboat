import React from 'react';
import MemberCard from '../../components/member-card/member-card.component';
import Composition from '../../components/composition/composition.component';
import { programmer } from '../../data/member';

const SectionProgrammer = () => {
  return (
    <div className="member-section">
      <div className="member-section__title">
        <div className="member-section__title--icon">
          <i class="fas fa-laptop-code"></i>{' '}
        </div>
        <p>Programming Division</p>
      </div>
      <div className="member-section__desc">
        <Composition />
        <div className="member-section__text">
          <p>
            The programmer division is the division that give life to our ships
            with the tip of their finger. They are responsible for producing{' '}
            <span>the control system</span> and{' '}
            <span>autonomous algorithm</span> into our ships
          </p>
          <p>
            A fraction of the many techologies we use as a programmer in AMV UI
            :
          </p>
          <ul>
            <li>C++/Python</li>
            <li>ROS (Robotic Operating System)</li>
            <li>Tensorflow</li>
            <li>OpenCV</li>
          </ul>
        </div>
      </div>
      <div className="member-section__members">
        {programmer.map((member) => (
          <MemberCard member={member} key={member.name} />
        ))}
      </div>
    </div>
  );
};

export default SectionProgrammer;
