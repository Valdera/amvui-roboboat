import React from 'react';
import MemberCard from '../../components/member-card/member-card.component';
import Composition from '../../components/composition/composition.component';
import { programmer } from '../../data/member';

const SectionProgrammer = () => {
  const imageArr = [
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_programming-1.png?alt=media&token=55b0cdd4-32ca-40c7-a5fa-e285213ec15c',
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_programming-2.jpg?alt=media&token=0fa39f0b-f85c-4f07-809d-b98a680752b1',
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_programming-3.jpg?alt=media&token=f74ee509-f2fe-41d6-95e0-4b53df288e75'
  ];

  return (
    <div className="member-section">
      <div className="member-section__title">
        <div className="member-section__title--icon">
          <i class="fas fa-laptop-code"></i>{' '}
        </div>
        <p>Programming Division</p>
      </div>
      <div className="member-section__desc">
        <Composition imageArr={imageArr} />
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
