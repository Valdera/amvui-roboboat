import React from 'react';
import ButtonRound from '../../components/button-round/button-round.component';
import { ReactComponent as PaperSVG } from '../../assets/paper-header.svg';
import { Link } from 'react-scroll';

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
        <ButtonRound>
          {' '}
          <Link activeClass="active" to="roboboat" spy={true} smooth={true}>
            See More
          </Link>
        </ButtonRound>
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
            title="Makara 8"
            desc="1st Place on MATE Underwater ROV 2019"
          />
        </div>
        <div className="header__bubble header__bubble--3">
          <Bubble
            image="https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/header%2Fship-3-bubble.JPG?alt=media&token=bd3ba6db-7bf1-4c7e-96c2-31a6c4aab0a7"
            title="Makara 9"
            desc="3rd Place on Autonomous Vehicle KKCTBN 2019"
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
