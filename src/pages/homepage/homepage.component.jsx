import React from 'react';
import './homepage.styles.scss';
import logo from '../../assets/background-header.jpg';
import Header from '../../components/header/header.component';
import RoboboatVideo from '../../components/roboboat-video/roboboat-video.component';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__background">
        <img src={logo} alt="logo amv" />
      </div>
      <Header />
      <RoboboatVideo />
    </div>
  );
};

export default Homepage;
