import React, { useState, useEffect, useMemo } from "react";
import RelatedProductsCard from "./RelatedProductsCard";

const RelatedProducts = ({ result, Products, id, addToCart }) => {
  const [sameProducts, setSameProducts] = useState([]);

  useEffect(() => {
    const same = Products.filter((product) => {
      return product.categories === result.categories;
    });

    setSameProducts(same);
  }, [id, result]);

  return (
    <div>
      {sameProducts && (
        <RelatedProductsCard
          sameProducts={sameProducts}
          id={id}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default RelatedProducts;
