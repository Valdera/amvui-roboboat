import React from 'react';
import ButtonC from '../button-c/button-c.component';
import Carousel from '../carousel/carousel.component';
import './product-overview.styles.scss';

const ProductOverview = () => {
  return (
    <div className="product-overview">
      <div className="product-overview__title">
        <div />
        <h1>Our Products</h1>
        <div />
      </div>

      <div className="product-overview__carousel">
        <Carousel />
      </div>
      <ButtonC>See More</ButtonC>
    </div>
  );
};

export default ProductOverview;
