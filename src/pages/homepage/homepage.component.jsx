import React from 'react';
import './homepage.styles.scss';
import background from '../../assets/background-header.svg';
import Header from '../../components/header/header.component';
import RoboboatVideo from '../../components/roboboat-video/roboboat-video.component';
import SeeAchievement from '../../components/see-achievement/see-achievement.component';
import SeeMember from '../../components/see-member/see-member.component';
import ProductOverview from '../../components/product-overview/product-overview.component';
import Footer from '../../components/footer/footer.component';
import Sponsor from '../../components/sponsor/sponsor.component';
import Alumni from '../../components/alumni/alumni.component';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__background">
        <img src={background} alt="header amv" />
      </div>
      <div className="homepage__header">
        <Header />
      </div>
      <div className="homepage__roboboat-video">
        <RoboboatVideo />
      </div>
      <div className="homepage__see-achievement">
        <SeeAchievement />
      </div>
      <div className="homepage__see-member">
        <SeeMember />
      </div>
      <div className="homepage__product-overview">
        <ProductOverview />
      </div>
      <div className="homepage__alumni">
        <Alumni />
      </div>
      <div className="homepage__sponsor">
        <Sponsor />
      </div>
      <div className="homepage__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
