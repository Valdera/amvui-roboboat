import React from 'react';
import MemberCard from '../../components/member-card/member-card.component';
import Composition from '../../components/composition/composition.component';
import { mechanical } from '../../data/member';

const SectionMechanic = () => {
  const imageArr = [
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_mechanic-1.jpg?alt=media&token=f4a6f899-f974-4734-87c9-27c99c64ccaf',
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection_mechanic-2.jpg?alt=media&token=1441d5c2-9f92-46da-834f-0dfa5447c250',
    'https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/section%2Fsection-mechanic-3.jpg?alt=media&token=ebddda73-3179-4ab7-80de-b2197ab3d7c9'
  ];

  return (
    <div className="member-section">
      <div className="member-section__title">
        <div className="member-section__title--icon">
          <i class="fas fa-tools"></i>{' '}
        </div>
        <p>Mechanical Division</p>
      </div>
      <div className="member-section__desc">
        <Composition imageArr={imageArr} />
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
