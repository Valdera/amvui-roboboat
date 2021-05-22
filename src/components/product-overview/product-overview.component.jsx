import React from 'react';
import ButtonC from '../button-c/button-c.component';
import Carousel from '../carousel/carousel.component';
import './product-overview.styles.scss';
import { overview } from '../../data/robot';
import { withRouter } from 'react-router-dom';

const ProductOverview = ({ history }) => {
  const handleClick = () => {
    history.push('/products');
    window.scrollTo(0, 0);
  };

  return (
    <div className="product-overview">
      <div className="product-overview__title">
        <div />
        <h1>Products Overview</h1>
        <div />
      </div>

      <div className="product-overview__carousel">
        <Carousel overview={overview} />
      </div>
      <ButtonC handleClick={handleClick}>See More</ButtonC>
    </div>
  );
};

export default withRouter(ProductOverview);
