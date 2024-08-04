import React, { useState, useEffect } from "react";
import ProductDetailsResult from "../../components/ProductDetailsResult";
import RelatedProducts from "../../components/RelatedProducts";

const ProductDetailsSection = ({ Products, addToCart, id }) => {
  const [result, setResult] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const productResult = Products.find((product) => {
      return product.name === id;
    });

    setResult(productResult);
  }, [id]);

  return (
    <section className="padding">
      <div className="container">
        <ProductDetailsResult addToCart={addToCart} result={result} />
        <div className="mt-20 mb-3">
          <h2 className="head-text">Related Products</h2>
        </div>
      </div>
      <RelatedProducts
        result={result}
        Products={Products}
        id={id}
        addToCart={addToCart}
      />
    </section>
  );
};

export default ProductDetailsSection;
