import React from 'react';
import background from '../../assets/background-product.svg';
import Footer from '../../components/footer/footer.component';
import MemberSelect from '../../components/member-select/member-select.component';
import SectionElectrical from '../../components/section-electrical/section-electrical.component';
import SectionManager from '../../components/section-manager/section-manager.component';
import SectionMechanic from '../../components/section-mechanic/section-mechanic.component';
import SectionProgrammer from '../../components/section-programmer/section-programmer.component';
import SectionExecutives from '../../components/section-executives/section-executives.component';

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

      <div className="memberpage__member">
        <div id="executives">
          <SectionExecutives />
        </div>
        <div id="electrical">
          <SectionElectrical />
        </div>
        <div id="mecahnical">
          <SectionMechanic />
        </div>
        <div id="programming">
          <SectionProgrammer />
        </div>
        <div id="managerial">
          <SectionManager />
        </div>
      </div>
      <div className="memberpage__footer">
        <Footer />
      </div>
    </div>
  );
};

export default MemberPage;
