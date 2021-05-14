import React from 'react';
import './member-card.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedinIn, faInstagram);

const MemberCard = () => {
  return (
    <div className="membercard">
      <img
        src={
          'https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg'
        }
      />
      <div class="membercard_role">Electrical Engineer</div>
      <div class="membercard_container">
        <div class="name_container">
          <div class="name_container_name">Hansel Matthew</div>
          <div class="name_container_square"></div>
        </div>

        <div class="membercard_container_square"></div>
        <div class="membercard_container_major">Computer Engineering 18</div>
        <div class="membercard_container_linkedin">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </div>
        <div class="membercard_container_instagram">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
