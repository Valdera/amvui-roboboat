import React from 'react';
import background from '../../assets/background-product.svg';
import MemberCard from '../../components/member-card/member-card.component';
import MemberSelect from '../../components/member-select/member-select.component';

import './memberpage.styles.scss';

const MemberPage = () => {
  return (
    <div className="memberpage">
      <div className="memberpage__select">
        <div className="memberpage__background">
          <img src={background} alt="background member" />
        </div>
        <MemberSelect />
      </div>

      <div className="memberpage__list">
        <div className="memberpage__item">
          <MemberCard />
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
