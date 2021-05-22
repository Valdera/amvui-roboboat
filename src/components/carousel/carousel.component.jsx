import React from 'react';
import Slider from 'react-slick';
import Product from '../product/product.component';

import './carousel.styles.scss';

const Carousel = ({ overview }) => {
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
        {overview.map((product) => (
          <div className="carousel__product">
            <Product key={product.name} product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
