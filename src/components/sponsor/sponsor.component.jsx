import React from 'react';
import Line from '../line/line.component';
import './sponsor.styles.scss';
import TelkomLogo from '../../assets/logo-telkom.png'

const Sponsor = () => {
  return (
    <div className="sponsor">
      <h1>Our Last Sponsor</h1>
      <Line />
      <div className='sponsor__logo'>
        <img src={TelkomLogo} alt='telkomsel logo'/>
      </div>
    </div>
  );
};

export default Sponsor;