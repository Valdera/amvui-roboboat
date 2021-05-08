import React from 'react';
import './social-media-buttons.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons' 

library.add( faLinkedinIn, faInstagram, faTwitter, faFacebook);

const SocialMediaButtons = () => {
  return (
    <div className="socialmedia">
      <div className='column'>
        <div class='socialmedia_linkedin'><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></div>
      </div>

      <div className='column'>
        <div class='socialmedia_instagram'><FontAwesomeIcon icon={['fab', 'instagram']} /></div>
      </div>

      <div className='column'>
        <div class='socialmedia_twitter'><FontAwesomeIcon icon={['fab', 'twitter']} /></div>
      </div>

      <div className='column'>
        <div class='socialmedia_facebook'><FontAwesomeIcon icon={['fab', 'facebook']} /></div>
      </div>
    </div>
  );
};

export default SocialMediaButtons;