import React from 'react';
import './homepage.styles.scss';
import logo from '../../assets/background-header.jpg';
import Header from '../../components/header/header.component';
import RoboboatVideo from '../../components/roboboat-video/roboboat-video.component';
import SeeAchievement from '../../components/see-achievement/see-achievement.component';
import SeeMember from '../../components/see-member/see-member.component';
import ProductOverview from '../../components/product-overview/product-overview.component';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__background">
        <img src={logo} alt="logo amv" />
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
    </div>
  );
};

export default Homepage;
