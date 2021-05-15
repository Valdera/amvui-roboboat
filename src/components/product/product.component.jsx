import React from 'react';
import product from '../../assets/ship-1-product.jpg';
import './product.styles.scss';

const Product = () => {
  return (
    <div className="product">
      <div className="product--image">
        <img src={product} alt="product" />
      </div>
      <div className="product--content">
        <h3>Makara 08 Mark a</h3>
        <div className="product--desc">
          <i class="fas fa-robot"></i>
          <span>Underwater ROV</span>
          <i class="fas fa-trophy"></i>
          <span>2 Achievements</span>
          <i class="fas fa-search"></i>
          <span>2 Research</span>
          <i class="fas fa-calendar-alt"></i>
          <span>2019</span>
        </div>
        {/* <button>More Details</button> */}
      </div>
    </div>
  );
};

export default Product;
