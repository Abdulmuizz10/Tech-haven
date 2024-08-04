import React, { useEffect } from "react";
import ProductFilter from "../../components/ProductFilter";

const ProductShopSection = ({
  result,
  setSelected,
  query,
  active,
  setActive,
  handleInputChange,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="padding">
      <div className="container">
        <div className="mb-3">
          <h2 className="head-text">Product Shop</h2>
          <p className="sub-text">Filter products by categories</p>
        </div>
        <ProductFilter
          result={result}
          setSelected={setSelected}
          query={query}
          active={active}
          setActive={setActive}
          handleInputChange={handleInputChange}
        />
      </div>
    </section>
  );
};

export default ProductShopSection;
