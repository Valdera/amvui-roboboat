import React from 'react';
import MemberCard from '../../components/member-card/member-card.component';
import Composition from '../../components/composition/composition.component';
import { managerial } from '../../data/member';

const SectionManager = () => {
  const imageArr = [
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_manager-1.png?alt=media&token=9a938c7a-58da-4486-9143-d4c0e8d15fdc',
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_manager-2.jpg?alt=media&token=8d084ccd-ec5c-4361-89ac-104261dacdb1',
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_manager-3.png?alt=media&token=0002e8ec-30b3-4508-ad0e-500ac319c086'
  ];

  return (
    <div className="member-section">
      <div className="member-section__title">
        <div className="member-section__title--icon">
          <i className="fas fa-handshake"></i>{' '}
        </div>
        <p>Managerial Division</p>
      </div>
      <div className="member-section__desc">
        <Composition imageArr={imageArr} />
        <div className="member-section__text">
          <p>
            The managerial division is the division that Manage internal and
            external teams such as <span>team administration</span>,{' '}
            <span>branding</span> and <span>publications</span>,{' '}
            <span>team finances</span>, <span>sponsorship</span> etc.
          </p>
          <p>A fraction of the many things we do as a manager in AMV UI :</p>
          <ul>
            <li>How the research world works</li>
            <li>How to register a patent</li>
            <li>Relations to stakeholder in UI and Companies</li>
            <li>How to pitch</li>
          </ul>
        </div>
      </div>
      <div className="member-section__members">
        {managerial.map((member) => (
          <MemberCard member={member} key={member.name} />
        ))}
      </div>
    </div>
  );
};

export default SectionManager;
