import React from 'react';
import ButtonRound from '../../components/button-round/button-round.component';
import ship1 from '../../assets/ship-1-bubble.jpg';
import { ReactComponent as PaperSVG } from '../../assets/paper-header.svg';

import './header.styles.scss';
import Bubble from '../bubble/bubble.component';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          WE BUILD
          <br /> WE DESIGN
          <br /> WE DEVELOP
        </h1>
        <p>
          <span> Autonomous Marine Vehicle Universitas Indonesia</span> is a
          team that focuses on the development of robots in the maritime field
          with <span>Autonomous Surface Vehicles (ASV)</span> and{' '}
          <span>Autonomous Underwater Vehicles (AUV).</span>
        </p>
        <ButtonRound>See More</ButtonRound>
      </div>
      <div className="header__right">
        <div className="header__bubble header__bubble--1">
          <Bubble
            image="https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/header%2Fship-1-bubble.jpg?alt=media&token=1a098424-757a-459e-87f3-c88acdb6dcce"
            title="Makara X"
            desc="Underwater Surface Vehicle for SAUVC 2020"
          />
        </div>
        <div className="header__bubble header__bubble--2">
          <Bubble
            image="https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/header%2Fship-2-bubble.jpg?alt=media&token=41db8d6a-e1aa-4617-b95d-0345eb0c8a00"
            title="Makara X"
            desc="Underwater Surface Vehicle for SAUVC 2020"
          />
        </div>
        <div className="header__bubble header__bubble--3">
          <Bubble
            image={ship1}
            title="Makara X"
            desc="Underwater Surface Vehicle for SAUVC 2020"
          />
        </div>
        <div className="header__svg">
          <PaperSVG />
        </div>
      </div>
    </div>
  );
};

export default Header;
