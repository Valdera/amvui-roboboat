import React from 'react';
import './product.styles.scss';

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product--image">
        <img src={product.url} alt="product" />
      </div>
      <div className="product--content">
        <h3>{product.name}</h3>
        <div className="product--desc">
          <i className="fas fa-robot"></i>
          <span>{product.type}</span>
          <i className="fas fa-trophy"></i>
          <span>{product.achivements} Achievements</span>
          <i className="fas fa-search"></i>
          <span>{product.research} Research</span>
          <i className="fas fa-calendar-alt"></i>
          <span>{product.year} </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
