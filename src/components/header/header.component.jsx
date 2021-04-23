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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut.
        </p>
        <ButtonRound>See More</ButtonRound>
      </div>
      <div className="header__right">
        <div className="header__bubble header__bubble--1">
          <Bubble
            image={ship1}
            title="Makara X"
            desc="Underwater Surface Vehicle for SAUVC 2020"
          />
        </div>
        <div className="header__bubble header__bubble--2">
          <Bubble
            image={ship1}
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
