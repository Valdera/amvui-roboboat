import React from 'react';
import Card from '../../components/card/card.component';

import './product-list.styles.scss';

const ProductList = ({ products, title, type }) => {
  return (
    <div className="product-list">
      <h1>
        {title}
        <div className="product-list--line" />
      </h1>

      <div className="product-list__display">
        <div className="product-list__item">
          {products.map((product) => (
            <Card product={product} key={product.name} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
