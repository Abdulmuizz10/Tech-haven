import React from "react";
import ProductSlider from "../../components/ProductSlider";

const ProductSection = ({ addToCart, Products }) => {
  return (
    <section className="padding">
      <div className="container">
        <div className="mb-3">
          <h2 className="head-text">Flash Deals</h2>
          <p className="sub-text">Flash deals just for you</p>
        </div>
        <ProductSlider addToCart={addToCart} Products={Products} />
      </div>
    </section>
  );
};

export default ProductSection;
