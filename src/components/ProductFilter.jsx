import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";

const ProductFilter = ({
  result,
  setSelected,
  query,
  active,
  setActive,
  handleInputChange,
}) => {
  const filterTags = [
    "All",
    "Ipads",
    "Headphones",
    "Tv and Home",
    "Pencil",
    "Watch",
    "Laptops",
  ];

  useEffect(() => {
    setSelected(active === "All" ? "" : active);
  }, [active]);

  return (
    <div>
      <div className="xl:flex justify-evenly gap-5 relative">
        <div className="sticky py-3 px-5 border border-slate-gray bg-white hidden xl:flex flex-col justify-center rounded-md shadow-lg hover:shadow-xl h-full xl:w-[400px]">
          <ul className="flex flex-col gap-2">
            {filterTags.map((tag, index) => (
              <li
                key={index}
                className={`${
                  active === tag &&
                  "!text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full  text-center"
                } info-text cursor-pointer border-b border-slate-200 px-5 p-2.5`}
                onClick={() => setActive(tag)}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-4xl xl:max-w-5xl w-full max-lg:mb-20 flex flex-col gap-5 ">
          <div className="flex justify-between items-center ">
            <div className="border border-slate-gray sm:w-1/2 p-2 rounded-lg flex items-center gap-2 w-full shadow-md hover:shadow-lg">
              <BiSearch className="text-xl" />
              <input
                type="text"
                className="no-focus input w-full"
                placeholder="Search products here...."
                value={query}
                onChange={handleInputChange}
              />
            </div>
            <p className="info-text max-md:hidden">
              Showing 1 . {result.length} of 13 Products
            </p>
          </div>
          <div className="max-w-3xl lg:max-w-4xl w-full max-lg:mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 place-items-center place-content-center text-center lg:text-right">
            {result.length > 0 ? (
              result
            ) : (
              <p className="info-text w-full">Product unavailable...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
