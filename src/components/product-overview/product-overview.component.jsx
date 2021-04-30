import React from 'react';
import Slider from 'react-slick';
import ButtonC from '../button-c/button-c.component';
import prdoduct1 from '../../assets/ship-1-product.jpg';
import './product-overview.styles.scss';

const ProductOverview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="product-overview">
      <h1>Our Products</h1>
      <div className="product-overview__carousel">
        <div className="carousel">
          {/* <Slider {...settings}> */}
          <div className="carousel__item">
            <div className="carousel__item--image">
              <img src={prdoduct1} alt="product" />
            </div>
            <div className="carousel__item--content">
              <h3>Makara 08 Mark II</h3>
              <div className="carousel__item--desc">
                <i class="fas fa-robot"></i>
                <span>Underwater ROV</span>
                <i class="fas fa-calendar-alt"></i>
                <span>2019</span>
              </div>

              <button>More Details</button>
            </div>
          </div>
          {/* </Slider> */}
        </div>
      </div>
      <ButtonC>See More</ButtonC>
    </div>
  );
};

export default ProductOverview;
