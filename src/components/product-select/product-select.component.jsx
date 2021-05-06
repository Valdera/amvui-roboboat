import React from 'react';
import './product-select.styles.scss';

const ProductSelect = () => {
  return (
    <div className="product-select">
      <h1>Our Products</h1>
      <p>Lorem ipsum sir dolor amet : </p>
      <div className="product-select__list">
        <div className="product-select__item">
          <p>
            <span>8</span> ASV
          </p>
        </div>
        <div className="product-select__item">
          <p>
            <span>4</span> ROV
          </p>
        </div>
        <div className="product-select__item">
          <p>
            <span>2</span> Drone
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSelect;
