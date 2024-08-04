import React from "react";
import ProductSlider from "../../components/ProductSlider";

const CollectionSection = ({ addToCart, Collections }) => {
  return (
    <section className="padding">
      <div className="container">
        <div className="mb-3">
          <h2 className="head-text">New Collections</h2>
          <p className="sub-text">New collections just for you</p>
        </div>
        <ProductSlider addToCart={addToCart} Collections={Collections} />
      </div>
    </section>
  );
};

export default CollectionSection;
