import React from "react";
import ProductShopSection from "../sections/shop-sections/ProductShopSection";

const Shop = ({
  result,
  setSelected,
  query,
  active,
  setActive,
  handleInputChange,
}) => {
  return (
    <main className="max-sm:py-24">
      <ProductShopSection
        result={result}
        setSelected={setSelected}
        query={query}
        active={active}
        setActive={setActive}
        handleInputChange={handleInputChange}
      />
    </main>
  );
};

export default Shop;
