import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col items-center py-2 px-2 rounded-lg shadow-xl bg-white border border-gray-200">
      <img
        src={category.image}
        alt="category image"
        className="p-2 rounded-t-lg w-full h-full object-cover"
      />

      <Link
        to={`/categories/${category.name}`}
        className="cursor-pointer w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {category.name}
      </Link>
    </div>
  );
};

export default CategoryCard;
