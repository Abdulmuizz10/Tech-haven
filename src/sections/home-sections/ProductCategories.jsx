import React from "react";
import { categoryData } from "../../Data";
import CategoryCard from "../../components/CategoryCard";

const ProductCategories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center place-content-center">
      {categoryData.map((category, index) => {
        return <CategoryCard category={category} key={index} />;
      })}
    </div>
  );
};

export default ProductCategories;
