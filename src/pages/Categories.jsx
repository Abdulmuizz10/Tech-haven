import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Categories = ({ addToCart, Products }) => {
  const { id } = useParams();

  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const newData = Products.filter((product) => {
      return product.categories === id;
    });

    setCurrentProducts(newData);
  }, [id]);

  return (
    <main className="max-sm:py-24">
      <section className="padding">
        <div className="container">
          <div className="mb-3">
            <h2 className="head-text">Product Category</h2>
            <p className="sub-text">Specific product category</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 place-items-center place-content-center">
            {currentProducts &&
              currentProducts.map((product, index) => {
                return (
                  <ProductCard
                    product={product}
                    key={index}
                    addToCart={addToCart}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Categories;
