import React from "react";
import ProductCategories from "../home-sections/ProductCategories";

const CategoriesSection = () => {
  return (
    <section className="padding">
      <div className="container">
        <div className="mb-3">
          <h2 className="head-text">Shop by Categories</h2>
          <p className="sub-text">Specific products categories</p>
        </div>
        <ProductCategories />
      </div>
    </section>
  );
};

export default CategoriesSection;
