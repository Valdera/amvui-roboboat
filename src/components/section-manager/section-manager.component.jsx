import React from 'react';
import MemberCard from '../../components/member-card/member-card.component';
import Composition from '../../components/composition/composition.component';

const SectionManager = () => {
  return (
    <div className="member-section">
      <div className="member-section__title">
        <div className="member-section__title--icon">
          <i class="fas fa-handshake"></i>{' '}
        </div>
        <p>Managerial Division</p>
      </div>
      <div className="member-section__desc">
        <Composition />
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
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
    </div>
  );
};

export default SectionManager;
