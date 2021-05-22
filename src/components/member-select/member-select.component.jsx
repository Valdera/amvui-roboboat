import React from 'react';
import { ReactComponent as ElectricSVG } from '../../assets/electric_svg.svg';
import { ReactComponent as MechanicSVG } from '../../assets/mechanic_svg.svg';
import { ReactComponent as ManagerSVG } from '../../assets/manager_svg.svg';
import { ReactComponent as ProgrammerSVG } from '../../assets/programmer_svg.svg';
import './member-select.styles.scss';
import { Link } from 'react-scroll';

const MemberSelect = () => {
  return (
    <div className="member-select">
      <h1>Our Members</h1>
      <p>4 Team Divisions : </p>
      <div className="member-select__list">
        <Link activeClass="active" to="electrical" spy={true} smooth={true}>
          <div className="member-select__item">
            <div className="member-select__svg">
              <ElectricSVG />
            </div>
          </div>
        </Link>
        <Link activeClass="active" to="mecahnical" spy={true} smooth={true}>
          <div className="member-select__item">
            <div className="member-select__svg">
              <MechanicSVG />
            </div>
          </div>
        </Link>
        <Link activeClass="active" to="programming" spy={true} smooth={true}>
          <div className="member-select__item">
            <div className="member-select__svg">
              <ProgrammerSVG />
            </div>
          </div>
        </Link>
        <Link activeClass="active" to="managerial" spy={true} smooth={true}>
          <div className="member-select__item">
            <div className="member-select__svg">
              <ManagerSVG />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MemberSelect;
