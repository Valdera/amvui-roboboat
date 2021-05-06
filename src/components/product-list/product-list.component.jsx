import React from 'react';
import Card from '../../components/card/card.component';

import './product-list.styles.scss';

const ProductList = () => {
  return (
    <div className="product-list">
      <h1>
        Remotely Operated Vehicle (ROV)
        <div className="product-list--line" />
      </h1>

      <div className="product-list__display">
        <div className="product-list__item">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
