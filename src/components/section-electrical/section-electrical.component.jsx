import React from 'react';
import MemberCard from '../../components/member-card/member-card.component';
import Composition from '../../components/composition/composition.component';

const SectionElectrical = () => {
  return (
    <div className="member-section">
      <div className="member-section__title">
        <div className="member-section__title--icon">
          <i class="fas fa-bolt"></i>
        </div>
        <p>Electrical Division</p>
      </div>
      <div className="member-section__desc">
        <Composition />
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
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
    </div>
  );
};

export default SectionElectrical;
