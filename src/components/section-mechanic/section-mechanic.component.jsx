import React from 'react';
import MemberCard from '../../components/member-card/member-card.component';
import Composition from '../../components/composition/composition.component';
import { mechanical } from '../../data/member';

const SectionMechanic = () => {
  return (
    <div className="member-section">
      <div className="member-section__title">
        <div className="member-section__title--icon">
          <i class="fas fa-tools"></i>{' '}
        </div>
        <p>Mechanical Division</p>
      </div>
      <div className="member-section__desc">
        <Composition />
        <div className="member-section__text">
          <p>
            The Mechanical division is the division responsible for the
            <span> design</span>, <span>calculation</span>,{' '}
            <span>outfiting</span>, <span>analysis</span> and{' '}
            <span>production</span> of our ships
          </p>
          <p>
            A fraction of the many techologies we use as a mechanic in AMV UI :
          </p>
          <ul>
            <li>Autodesk Inventor</li>
            <li>Autodesk Autocad</li>
            <li>Maxsurf</li>
          </ul>
        </div>
      </div>
      <div className="member-section__members">
        {mechanical.map((member) => (
          <MemberCard member={member} key={member.name} />
        ))}
      </div>
    </div>
  );
};

export default SectionMechanic;
