import React from 'react';
import background from '../../assets/background-product.svg';
import Footer from '../../components/footer/footer.component';
import ProductList from '../../components/product-list/product-list.component';
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
        <ProductList />
        <ProductList />
        <ProductList />
      </div>

      <div className="productpage__footer">
        <Footer />{' '}
      </div>
    </div>
  );
};

export default ProductPage;
