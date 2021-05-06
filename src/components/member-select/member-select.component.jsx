import React from 'react';
import { ReactComponent as ElectricSVG } from '../../assets/electric_svg.svg';
import { ReactComponent as MechanicSVG } from '../../assets/mechanic_svg.svg';
import { ReactComponent as ManagerSVG } from '../../assets/manager_svg.svg';
import { ReactComponent as ProgrammerSVG } from '../../assets/programmer_svg.svg';
import './member-select.styles.scss';

const MemberSelect = () => {
  return (
    <div className="member-select">
      <h1>Our Members</h1>
      <p>Lorem ipsum sir dolor amet : </p>
      <div className="member-select__list">
        <div className="member-select__item">
          <div className="member-select__svg">
            <ElectricSVG />
          </div>
        </div>
        <div className="member-select__item">
          <div className="member-select__svg">
            <MechanicSVG />
          </div>
        </div>
        <div className="member-select__item">
          <div className="member-select__svg">
            <ProgrammerSVG />
          </div>
        </div>
        <div className="member-select__item">
          <div className="member-select__svg">
            <ManagerSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberSelect;
