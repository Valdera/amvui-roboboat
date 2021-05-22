import React from 'react';
import MemberCard from '../../components/member-card/member-card.component';
import Composition from '../../components/composition/composition.component';
import { electrical } from '../../data/member';

const SectionElectrical = () => {
  const imageArr = [
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_electric-1.jpg?alt=media&token=ec986748-c401-479c-8ae3-03075b91d32b',
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_electric-2.jpg?alt=media&token=f011c033-46ea-4228-8226-7fea27b8679d',
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_electric-3.png?alt=media&token=4dbe5004-59d1-48fb-927b-1f1f4025667a'
  ];

  return (
    <div className="member-section">
      <div className="member-section__title">
        <div className="member-section__title--icon">
          <i className="fas fa-bolt"></i>
        </div>
        <p>Electrical Division</p>
      </div>
      <div className="member-section__desc">
        <Composition imageArr={imageArr} />
        <div className="member-section__text">
          <p>
            The Electrical Division is the division that produce
            <span> the electrical system </span>
            and <span> wiring of our ships</span>. This include{' '}
            <span> the powering system</span>,
            <span> electrical motor system</span>,{' '}
            <span> communication system</span> and more.
          </p>
          <p>
            A fraction of the many techologies we use as a electrician in AMV UI
            :
          </p>
          <ul>
            <li>Autocad Electrical</li>
            <li>Altium Designer</li>
            <li>Arduino IDE</li>
          </ul>
        </div>
      </div>
      <div className="member-section__members">
        {electrical.map((member) => (
          <MemberCard member={member} key={member.name} />
        ))}
      </div>
    </div>
  );
};

export default SectionElectrical;
