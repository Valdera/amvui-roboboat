import React from 'react';
import './social-media-buttons.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedinIn,
  faInstagram,
  faTwitter,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedinIn, faInstagram, faTwitter, faFacebook);

const SocialMediaButtons = () => {
  return (
    <div className="socialmedia">
      <div className="column">
        <a href="https://www.linkedin.com/company/amv-ui/">
          <div className="socialmedia_linkedin">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </div>
        </a>
      </div>

      <div className="column">
        <a href="https://www.instagram.com/amv.ui/">
          <div className="socialmedia_instagram">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </div>
        </a>
      </div>

      <div className="column">
        <a href="https://twitter.com/">
          <div className="socialmedia_twitter">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </div>
        </a>
      </div>

      <div className="column">
        <a href="https://www.facebook.com/AMVUI/">
          <div className="socialmedia_facebook">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaButtons;
