import React from 'react';
import ButtonC from '../button-c/button-c.component';
import Carousel from '../carousel/carousel.component';
import './product-overview.styles.scss';

const ProductOverview = () => {
  return (
    <div className="product-overview">
      <h1>Our Products</h1>
      <div className="product-overview__carousel">
        <Carousel />
      </div>
      <ButtonC>See More</ButtonC>
    </div>
  );
};

export default ProductOverview;
