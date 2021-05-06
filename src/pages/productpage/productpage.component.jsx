import React from 'react';
import background from '../../assets/background-product.svg';
import Card from '../../components/card/card.component';
import ProductSelect from '../../components/product-select/product-select.component';
import './productpage.styles.scss';

const ProductPage = () => {
  return (
    <div className="productpage">
      <div className="productpage__select">
        <div className="productpage__background">
          <img src={background} alt="background product" />
        </div>
        <ProductSelect />
      </div>

      <div className="productpage__list">
        <div className="product-list">
          <h1>
            Remotely Operated Vehicle (ROV)
            <div className="product-list--line" />
          </h1>

          <div className="product-list__display">
            <div className="product-item">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
