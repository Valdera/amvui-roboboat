import React from 'react';
import Slider from 'react-slick';
import Product from '../product/product.component';

import './carousel.styles.scss';

const Carousel = () => {
  const settings = {
    className: 'center',
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    centerPadding: '100px',
    dots: true,
    swipeToSlide: true
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className="carousel__product">
          <Product />
        </div>
        <div className="carousel__product">
          <Product />
        </div>
        <div className="carousel__product">
          <Product />
        </div>
        <div className="carousel__product">
          <Product />
        </div>
        <div className="carousel__product">
          <Product />
        </div>
        <div className="carousel__product">
          <Product />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
