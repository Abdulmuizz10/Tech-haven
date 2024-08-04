import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailsSection from "../sections/product-details-sections/ProductDetailsSection";

const ProductDetails = ({ addToCart, Products }) => {
  const { id } = useParams();

  return (
    <main className="max-sm:py-24">
      <ProductDetailsSection
        Products={Products}
        addToCart={addToCart}
        id={id}
      />
    </main>
  );
};

export default ProductDetails;
