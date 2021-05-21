import React from 'react';
import Line from '../line/line.component';
import './sponsor.styles.scss';
import TelkomLogo from '../../assets/telkom-logo.png';
import PGNLogo from '../../assets/pgn-logo.png';
import PLNLogo from '../../assets/pln-logo-min.png';
import IKLogo from '../../assets/ik-logo.png';
import WSLogo from '../../assets/ws-logo.png';
import NRLogo from '../../assets/nr-logo.png';

const Sponsor = () => {
  return (
    <div className="sponsor">
      <h1>Last Sponsor</h1>
      <Line />
      <div className="sponsor__logo">
        <img src={TelkomLogo} alt="telkomsel logo" />
        <img src={PGNLogo} alt="PGN logo" className="pgnlogo" />
        <img src={PLNLogo} alt="PLN logo" />
        <img src={IKLogo} alt="IK logo" />
        <img src={WSLogo} alt="wartsila logo" />
        <img src={NRLogo} alt="NR logo" />
      </div>
    </div>
  );
};

export default Sponsor;
