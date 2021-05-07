import React from 'react';
import ButtonRound from '../../components/button-round/button-round.component';
import ship1 from '../../assets/ship-1-bubble.jpg';
import { ReactComponent as PaperSVG } from '../../assets/paper-header.svg';
import Amvlogo from '../../assets/logofix.png';
import './footer.styles.scss';
import Bubble from '../bubble/bubble.component';
import SocialMediaButtons from '../social-media-buttons/social-media-buttons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={Amvlogo} alt="AMV LOGO"/>
      </div>
      
      <div className="footer__socialmedia">
        <p>Follow our social media</p>
        <div className="footer__socialmedia__buttons">
          <SocialMediaButtons />
        </div>
        
      </div>

      <div className="footer__copyright">
        <div className='footer__copyright__copyright'>
          <p>Copyright @ 2021 AmvUI</p>
        </div>
        
        <p>Help and Support</p>
        <p>roboboat.ui@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
